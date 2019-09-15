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
	 * @var string $_url
	 */
	private $_url;

	/**
	 * The Plugin version.
	 *
	 * @var string $_version
	 */
	private $_version;

	/**
	 * The Plugin version.
	 *
	 * @var string $_slug
	 */
	private $_slug;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->_version = EDITORSKIT_VERSION;
		$this->_slug    = 'editorskit';
		$this->_url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'init', array( $this, 'editor_assets' ), 9999 );
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function block_assets() {

		// Styles.
		wp_enqueue_style(
			$this->_slug . '-frontend',
			$this->_url . '/build/style.build.css',
			array(),
			$this->_version
		);
	}

	/**
	 * Enqueue block assets for use within Gutenberg.
	 *
	 * @access public
	 */
	public function editor_assets() {
		
		if( ! is_admin() ){
			return;
		}

		if( ! $this->is_edit_or_new_admin_page() ){ //load on allowed pages only
			return;
		}

		// Styles.
		wp_enqueue_style(
			$this->_slug . '-editor',
			$this->_url . '/build/editor.build.css',
			array(),
			$this->_version
		);

		// Scripts.
		wp_enqueue_script(
			$this->_slug . '-editor',
			$this->_url . '/build/index.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'lodash' ),
			time(),
			false
		);

		//CodeMirror
		wp_enqueue_script( 'code-editor' );
    	wp_enqueue_style( 'code-editor' );
	}

	/**
	 * Checks if admin page is the 'edit' or 'new-post' screen.
	 *
	 * @return bool true or false
	 */
	function is_edit_or_new_admin_page() {
		global $pagenow;

 		return ( is_admin() && ( $pagenow === 'post.php' || $pagenow === 'post-new.php' ) );
	}

}

EditorsKit_Block_Assets::register();
