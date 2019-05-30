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
					'name'  => 'visibility',
					'label' => __( 'Visibility', $this->_slug ),
					'items' => array(
						'devices'	 => array(
							'name'  => 'devices',
							'label' => __( 'Devices', $this->_slug ),
							'value' => true,
						),
						'userState' => array(
							'name'  => 'userState',
							'label' => __( 'User Login State', $this->_slug ),
							'value' => true,
						),
						'logic' 	 => array(
							'name'  => 'logic',
							'label' => __( 'Display Logic', $this->_slug ),
							'value' => true,
						),
						'acf' 		 => array(
							'name'  => 'acf',
							'label' => __( 'ACF Support', $this->_slug ),
							'value' => true,
						),
					)
				),
				'formats' => array(
					'name'  => 'formats',
					'label' => __( 'Formats', $this->_slug ),
					'items' => array(
						'colors'	=> array(
							'name'  => 'colors',
							'label' => __( 'Highlighted Text Color', $this->_slug ),
							'value' => true,
						),
						'justify'	=> array(
							'name'  => 'justify',
							'label' => __( 'Justified Alignment', $this->_slug ),
							'value' => true,
						),
						'underline'	=> array(
							'name'  => 'underline',
							'label' => __( 'Underline', $this->_slug ),
							'value' => true,
						),
						'subscript'	=> array(
							'name'  => 'subscript',
							'label' => __( 'Subscript', $this->_slug ),
							'value' => true,
						),
						'superscript'	=> array(
							'name'  => 'superscript',
							'label' => __( 'Superscript', $this->_slug ),
							'value' => true,
						),
					)
				),
				'writing' => array(
					'name'  => 'writing',
					'label' => __( 'Writing', $this->_slug ),
					'items' => array(
						'markdown'	=> array(
							'name'  => 'markdown',
							'label' => __( 'Markdown', $this->_slug ),
							'value' => true,
						),
					)
				),
				'tools' => array(
					'name'  => 'tools',
					'label' => __( 'Tools', $this->_slug ),
					'items' => array(
						'guidelines' => array(
							'name'  => 'guidelines',
							'label' => __( 'Block Guide Lines', $this->_slug ),
							'value' => true,
						),
						'autosave' 	 => array(
							'name'  => 'autosave',
							'label' => __( 'Toggle Auto Save', $this->_slug ),
							'value' => true,
						),
					)
				),
			);
		}

		return $editor_settings;
	}

}

EditorsKit_Features_Manager::register();
