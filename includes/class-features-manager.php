<?php
/**
 * Add editor settings for EditorsKit features manager.
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
class EditorsKit_Features_Manager {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Features_Manager
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Features_Manager();
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
		$this->_version 	= EDITORSKIT_VERSION;
		$this->_slug    	= 'editorskit';
		$this->_url     	= untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_filter( 'block_editor_settings', array( $this, 'block_editor_settings' ), 10, 2 );
	}

	public function block_editor_settings( $editor_settings, $post ){
		if( !isset( $editor_settings['editorskit'] ) ){
			$editor_settings['editorskit'] = array(
				'visibility' => array(
					'devices'	 => true,
					'loginState' => true,
					'logic' 	 => true,
					'acf' 		 => true,
				),
				'formats' => array(
					'colors'	=> true,
					'justify'	=> true,
					'underline'	=> true,
				),
				'tools' => array(
					'guidelines' => true,
					'autosave' 	 => true,
				),
			);
		}
		
		return $editor_settings;
	}

}

EditorsKit_Features_Manager::register();
