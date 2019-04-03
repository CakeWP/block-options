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
class EditorsKit_Render_Block {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Render_Block
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Render_Block();
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
	 * The block attributes.
	 *
	 * @var string $_attributes
	 */
	private $_attributes;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->_version 	= EDITORSKIT_VERSION;
		$this->_slug    	= 'editorskit';
		$this->_url     	= untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_action( 'render_block', array( $this, 'render_block' ), 5, 2 );
	}

	private function block_attributes( $block ){
		if ( isset( $block['attrs'] ) && isset( $block['attrs']['editorskit'] ) && is_array( $block['attrs'] ) ) {
			return $block['attrs']['editorskit'];
		}

		return [];
	}

	private function user_state_visibility( $block_content ){

		if( isset( $this->_attributes['loggedin'] ) && ! $this->_attributes['loggedin']
			&& is_user_logged_in() 
		){
			return '';
		}

		if( isset( $this->_attributes['loggedout'] ) && ! $this->_attributes['loggedout']
			&& ! is_user_logged_in() 
		){
			return '';
		}

		return $block_content;
	}

	public function render_block( $block_content, $block ){
		$this->_attributes  = $this->block_attributes( $block );
		$block_content		= $this->user_state_visibility( $block_content );

		
		return $block_content;
	}

}

EditorsKit_Render_Block::register();
