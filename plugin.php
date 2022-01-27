<?php
/**
 * Plugin Name: EditorsKit
 * Plugin URI: https://editorskit.com/
 * Description: EditorsKit is a suite of <strong>page building block options</strong> for the Gutenberg block editor.
 * Version: 1.33.4
 * Author: Munir Kamal
 * Author URI: https://www.munirkamal.com/
 * Text Domain: block-options
 * Domain Path: languages
 *
 * @category Gutenberg
 * @author Munir Kamal
 * @version 1.0
 * @package EditorsKit
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'EditorsKit' ) ) :

	/**
	 * Main EditorsKit Class.
	 *
	 * @since  1.0
	 */
	final class EditorsKit {

		/**
		 * The plugin's instance
		 *
		 * @var EditorsKit The one true EditorsKit
		 * @since  1.0
		 */

		private static $instance;

		/**
		 * Main EditorsKit Instance.
		 *
		 * Insures that only one instance of EditorsKit exists in memory at any one
		 * time. Also prevents needing to define globals all over the place.
		 *
		 * @since 1.0.0
		 * @static
		 * @return object|EditorsKit The one true EditorsKit
		 */
		public static function instance() {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof EditorsKit ) ) {
				self::$instance = new EditorsKit();
				self::$instance->init();
				self::$instance->setup_constants();
				self::$instance->asset_suffix();
				self::$instance->includes();
			}
			return self::$instance;
		}

		/**
		 * Throw error on object clone.
		 *
		 * The whole idea of the singleton design pattern is that there is a single
		 * object therefore, we don't want the object to be cloned.
		 *
		 * @since 1.0.0
		 * @access protected
		 * @return void
		 */
		public function __clone() {
			// Cloning instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'block-options' ), '1.0' );
		}

		/**
		 * Disable unserializing of the class.
		 *
		 * @since 1.0.0
		 * @access protected
		 * @return void
		 */
		public function __wakeup() {
			// Unserializing instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheating huh?', 'block-options' ), '1.0' );
		}

		/**
		 * Setup plugin constants.
		 *
		 * @access private
		 * @since 1.0.0
		 * @return void
		 */
		private function setup_constants() {
			$this->define( 'EDITORSKIT_DEBUG', true );
			$this->define( 'EDITORSKIT_VERSION', '1.33.4' );
			$this->define( 'EDITORSKIT_HAS_PRO', false );
			$this->define( 'EDITORSKIT_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
			$this->define( 'EDITORSKIT_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
			$this->define( 'EDITORSKIT_PLUGIN_FILE', __FILE__ );
			$this->define( 'EDITORSKIT_PLUGIN_BASE', plugin_basename( __FILE__ ) );
			$this->define( 'EDITORSKIT_SHOP_URL', 'https://editorskit.com/' );
			$this->define( 'EDITORSKIT_REVIEW_URL', 'https://wordpress.org/support/plugin/block-options/reviews/?filter=5' );
		}

		/**
		 * Define constant if not already set.
		 *
		 * @param  string|string $name Name of the definition.
		 * @param  string|bool   $value Default value.
		 */
		private function define( $name, $value ) {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		/**
		 * Include required files.
		 *
		 * @access private
		 * @since 4.1
		 * @return void
		 */
		private function includes() {
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-block-assets.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-render-block.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-acf-support.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-features-manager.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-post-meta.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/function-hide-title.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-custom-css-classes.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/helper.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-shortcodes.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-typography-font-loader.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-responsive-preview.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-block-typography-manager.php';
			require_once EDITORSKIT_PLUGIN_DIR . 'extendify-sdk/loader.php';

			if ( is_admin() || ( defined( 'WP_CLI' ) && WP_CLI ) ) {
				require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-welcome.php';
				require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-page-template-support.php';
				require_once EDITORSKIT_PLUGIN_DIR . 'includes/class-editorskit-user-feedback.php';
			}
		}

		/**
		 * Load actions
		 *
		 * @return void
		 */
		private function init() {
			add_action( 'plugins_loaded', array( $this, 'load_textdomain' ), 99 );
			add_action( 'enqueue_block_editor_assets', array( $this, 'block_localization' ) );
			add_action( 'after_setup_theme', array( $this, 'set_eval' ) );
		}

		/**
		 * Set eval feature through filter.
		 */
		public function set_eval() {
			$this->define( 'EDITORSKIT_ALLOW_EVAL', (bool) apply_filters( 'editorskit_allow_unsafe_eval', false ) );
		}

		/**
		 * Change the plugin's minified or src file name, based on debug mode.
		 *
		 * @since 1.0.0
		 */
		public function asset_suffix() {
			if ( true === EDITORSKIT_DEBUG ) {
				define( 'EDITORSKIT_ASSET_SUFFIX', null );
			} else {
				define( 'EDITORSKIT_ASSET_SUFFIX', '.min' );
			}
		}

		/**
		 * If debug is on, serve unminified source assets.
		 *
		 * @since 1.0.0
		 * @param string|string $type The type of resource.
		 * @param string|string $directory Any extra directories needed.
		 */
		public function asset_source( $type = 'js', $directory = null ) {
			if ( 'js' !== $type ) {
				return EDITORSKIT_PLUGIN_URL . 'build/css/' . $directory;
			}

			if ( true === EDITORSKIT_DEBUG ) {
				return EDITORSKIT_PLUGIN_URL . 'src/' . $type . '/' . $directory;
			}

			return EDITORSKIT_PLUGIN_URL . 'build/' . $type . '/' . $directory;
		}

		/**
		 * Loads the plugin language files.
		 *
		 * @access public
		 * @since 1.0.0
		 * @return void
		 */
		public function load_textdomain() {
			load_plugin_textdomain( 'block-options', false, dirname( plugin_basename( EDITORSKIT_PLUGIN_DIR ) ) . '/languages/' );
		}

		/**
		 * Enqueue localization data for our blocks.
		 *
		 * @access public
		 */
		public function block_localization() {
			if ( function_exists( 'wp_set_script_translations' ) ) {
				wp_set_script_translations( 'editorskit-editor', 'editorskit' );
			}
		}
	}

endif; // End if class_exists check.


/**
 * The main function for that returns EditorsKit
 *
 * The main function responsible for returning the one true EditorsKit
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $blockopts = EditorsKit(); ?>
 *
 * @since 1.0
 * @return object|EditorsKit The one true EditorsKit Instance.
 */
function editorskit() {
	return EditorsKit::instance();
}

// Add Extendify global.
if ( ! isset( $GLOBALS['extendify_sdk_partner'] ) ) {
    // phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['extendify_sdk_partner'] = 'EditorsKit';
}

// Get Plugin Running.
if ( function_exists( 'is_multisite' ) && is_multisite() ) {
	// Get Plugin Running. Load on plugins_loaded action to avoid issue on multisite.
	add_action( 'plugins_loaded', 'editorskit' );
} else {
	editorskit();
}
