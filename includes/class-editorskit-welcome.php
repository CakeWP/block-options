<?php
/**
 * Welcome Page Class
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
 * @package     EditorsKit
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'EditorsKit_Welcome' ) ) {
	/**
	 * EditorsKit_Welcome Class
	 *
	 * A general class for About and Credits page.
	 *
	 * @since 1.0
	 * @package EditorsKit
	 */
	class EditorsKit_Welcome {

		/**
		 * The base URL path (without trailing slash).
		 *
		 * @var string $url
		 */
		private $url;
		/**
		 * The Plugin version.
		 *
		 * @var string $version
		 */
		private $version;
		/**
		 * The Plugin version.
		 *
		 * @var string $slug
		 */
		private $slug;

		/**
		 * Constructor
		 */
		public function __construct() {
			$this->version = EDITORSKIT_VERSION;
			$this->slug    = 'editorskit';
			$this->url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );
			add_action( 'admin_menu', array( $this, 'screen_page' ) );

			// phpcs:ignore
			if ( defined( 'WP_CLI' ) && WP_CLI ) {
				// Do nothing if WP CLI.
			} else {

				add_action( 'admin_notices', array( $this, 'admin_notices' ), 10, 2 );
			}
		}

		/**
		 * Load Scripts
		 *
		 * Enqueues the required scripts.
		 *
		 * @return void
		 */
		public function enqueue() {
			// phpcs:ignore
			if ( ! isset( $_GET['page'] ) || 'editorskit-getting-started' !== $_GET['page'] ) {
				return;
			}

			// Make sure all blocks plugin were registered.
			$block_categories = array();
			if ( function_exists( 'gutenberg_get_block_categories' ) ) {
					$block_categories = gutenberg_get_block_categories( get_post() );
			} elseif ( function_exists( 'get_block_categories' ) ) {
					$block_categories = get_block_categories( get_post() );
			}
			wp_add_inline_script(
				'wp-blocks',
				sprintf( 'wp.blocks.setCategories( %s );', wp_json_encode( $block_categories ) ),
				'after'
			);

			do_action( 'enqueue_block_editor_assets' );

			$block_registry = WP_Block_Type_Registry::get_instance();
			foreach ( $block_registry->get_all_registered() as $block_name => $block_type ) {
				// Front-end script.
				if ( ! empty( $block_type->editor_script ) ) {
					wp_enqueue_script( $block_type->editor_script );
				}
			}

			// Remove lifterlms to prevent error.
			wp_dequeue_script( 'lifterlms_blocks-cgb-block-js' );

			wp_enqueue_style(
				'editorskit-welcome',
				$this->url . '/build/admin.build.css',
				array( 'wp-components' ),
				$this->version
			);

			// Scripts.
			wp_enqueue_script(
				$this->slug . '-admin',
				$this->url . '/build/settings.js',
				array( 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-api', 'wp-data', 'wp-hooks', 'wp-edit-post', 'lodash', 'wp-block-library', 'wp-block-editor', 'wp-editor' ),
				time(),
				false
			);

			if ( function_exists( 'get_block_editor_settings' ) ) {
				$block_editor_settings = 'block_editor_settings_all';
			} else {
				$block_editor_settings = 'block_editor_settings';
			}

			$default_editor_settings = function_exists( 'gutenberg_get_default_block_editor_settings' ) ? gutenberg_get_default_block_editor_settings() : array();

			$global = array(
				'url'             => EDITORSKIT_PLUGIN_URL,
				'dir'             => EDITORSKIT_PLUGIN_DIR,
				'plugin'          => array(
					'url' => EDITORSKIT_PLUGIN_URL,
					'dir' => EDITORSKIT_PLUGIN_DIR,
				),
				'licenses'        => array(
					'typography' => get_option( 'editorskit_typography_addon_license_active' ),
				),
				'version'         => $this->version,
				'editor_settings' => apply_filters( $block_editor_settings, $default_editor_settings, '' ),
			);

			wp_add_inline_script( $this->slug . '-admin', 'window.editorskitSettings = ' . wp_json_encode( $global ) . ';', 'before' );
			wp_add_inline_script( $this->slug . '-admin', 'window.editorskitInfo = ' . wp_json_encode( $global ) . ';', 'before' );
		}

		/**
		 * Setup the admin menu.
		 */
		public function screen_page() {
			add_submenu_page(
				'options-general.php',
				__( 'Getting started with EditorsKit', 'block-options' ),
				__( 'EditorsKit', 'block-options' ),
				apply_filters( 'blockopts_welcome_cap', 'manage_options' ),
				'editorskit-getting-started',
				array( $this, 'welcome_content' )
			);
		}

		/**
		 * Render page content.
		 */
		public function welcome_content(){ ?>
			<div class="editorskit-settings-wrap"></div>
			<?php
		}

		/**
		 * Adds a marker to remember to activation.
		 */
		public static function add_activation_marker() {
			update_option( 'editorskit_activation_marker', '1' );
		}

		/**
		 * Activation notice on plugins.php only
		 */
		public function admin_notices() {
			global $pagenow;
			if ( get_option( 'editorskit_activation_marker' ) && 'plugins.php' === $pagenow ) {
				delete_option( 'editorskit_activation_marker' );
				?>

				<div class="notice notice-success is-dismissible">
					<p>
					<?php
						echo sprintf(
							/* translators: %s: EditorsKit settings page link */
							esc_html__( 'Thank you for installing and activating EditorsKit Plugin. Please go to %1$sSettings > EditorsKit%2$s to get started.', 'block-options' ),
							'<a href="' . esc_url( admin_url( 'options-general.php?page=editorskit-getting-started' ) ) . '" style="font-weight:700; text-decoration:none;">',
							'</a>'
						);
					?>
					</p>
				</div>

		<?php }
		}

		/**
		 * Redirect after activation
		 *
		 * @param string $plugin The plugin main file.
		 */
		public function redirect( $plugin ) {
			// phpcs:ignore
			if ( ( $plugin === 'block-options/plugin.php' || $plugin === 'editorskit/plugin.php' ) && ! isset( $_GET['activate-multi'] ) ) {
				wp_safe_redirect( admin_url( 'options-general.php?page=editorskit-getting-started' ) );
				die();
			}
		}
	}
	new EditorsKit_Welcome();
}

// Redirect to the welcome screen.
register_activation_hook( EDITORSKIT_PLUGIN_FILE, array( 'EditorsKit_Welcome', 'add_activation_marker' ) );

?>
