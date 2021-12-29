<?php
/**
 * Load assets for our blocks.
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class EditorsKit_Block_Assets {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Block_Assets
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Block_Assets();
		}
	}

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
	 * The Constructor.
	 */
	private function __construct() {
		$this->version = EDITORSKIT_VERSION;
		$this->slug    = 'editorskit';
		$this->url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'init', array( $this, 'editor_assets' ), 9999 );
		add_action( 'admin_enqueue_scripts', array( $this, 'filter_admin_assets' ) );
		add_filter( 'show_admin_bar', array( $this, 'hide_admin_bar' ), 10, 3 );
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function block_assets() {

		// Styles.
		wp_enqueue_style(
			$this->slug . '-frontend',
			$this->url . '/build/style.build.css',
			array(),
			'latest'
		);
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function editor_assets() {

		global $wp;
		$wp->add_query_var( 'editorskitsandbox' );

		if ( ! is_admin() ) {

			return;
		}

		if ( ! $this->is_edit_or_new_admin_page() ) { // load on allowed pages only.

			return;
		}

		global $wp_version;

		// Styles.
		wp_enqueue_style(
			$this->slug . '-editor',
			$this->url . '/build/editor.build.css',
			array(),
			$this->version
		);

		// Scripts.
		wp_enqueue_script(
			$this->slug . '-editor',
			$this->url . '/build/index.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-data', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'lodash' ),
			time(),
			false
		);

		if ( current_theme_supports( 'editorskit-devtools' ) ) {

			$theme_support = get_theme_support( 'editorskit-devtools' );

			if ( $theme_support ) {

				wp_enqueue_script(
					$this->slug . '-devtools',
					$this->url . '/build/devtools.js',
					array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'lodash' ),
					time(),
					false
				);
			}
		}

		$version = '';
		$is_core = true;

		if ( defined( 'GUTENBERG_VERSION' ) ) {

			$version = GUTENBERG_VERSION;
			$is_core = false;
		} else {

			if ( version_compare( $wp_version, '5.0' ) >= 0 && version_compare( $wp_version, '5.2.9' ) <= 0 ) {

				$version = '4.8';
			} elseif ( version_compare( $wp_version, '5.3' ) >= 0 && version_compare( $wp_version, '5.3.4' ) <= 0 ) {

				$version = '6.6';
			} elseif ( version_compare( $wp_version, '5.4' ) >= 0 || floatval( $wp_version ) >= 5.4 ) {

				$version = '7.7';
			}
		}

		$global = array(
			'plugin'   => array(
				'version' => $this->version,
				'url'     => $this->url,
				'dir'     => EDITORSKIT_PLUGIN_DIR,
			),
			'core'     => array(
				'version' => $wp_version,
			),
			'editor'   => array(
				'version' => $version,
				'is_core' => $is_core,
			),
			'supports' => array(
				'color_palette' => get_theme_support( 'editorskit-color-palette-classnames' ),
			),
		);

		wp_add_inline_script( $this->slug . '-editor', 'window.editorskitInfo = ' . wp_json_encode( $global ) . ';', 'before' );

		// CodeMirror assets.
		wp_enqueue_script( 'code-editor' );
		wp_enqueue_style( 'code-editor' );
	}

	/**
	 * Unregister JS assets when post type is not using Gutenberg
	 *
	 * @access public
	 */
	public function filter_admin_assets() {
		global $current_screen;

		// Check if Gutenberg editor is loaded on the screen.
		if ( ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) ) {
			return;
		}

		// Remove EditorsKit JS file when post is not using Gutenberg.
		wp_dequeue_script( $this->slug . '-editor' );
		wp_dequeue_script( $this->slug . '-devtools' );
	}

	/**
	 * Checks if admin page is the 'edit' or 'new-post' screen.
	 *
	 * @return bool true or false
	 */
	function is_edit_or_new_admin_page() { // phpcs:ignore
		global $pagenow;
		return ( is_admin() && ( $pagenow === 'post.php' || $pagenow === 'post-new.php' ) ); // phpcs:ignore
	}

	/**
	 * Hides admin bar on preview mode
	 *
	 * @return bool true or false
	 */
	function hide_admin_bar( $bool ) {
		if ( get_query_var( 'editorskitsandbox' ) ) {
			return false;
		}

		return $bool;
	}

}

EditorsKit_Block_Assets::register();
