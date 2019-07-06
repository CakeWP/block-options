<?php
/**
 * Custom CSS classes with custom filter
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang from EditorsKit
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * EditorsKit_Custom_CSS_Classes Class
 *
 * @since 1.9.0
 */
class EditorsKit_Custom_CSS_Classes {

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
			self::$instance = new EditorsKit_Custom_CSS_Classes();
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
		if( !isset( $editor_settings[ $this->_slug . 'CustomClassNames'] ) ){
			$defaults = array(
				'padding--sm', 
				'sm:padding--sm', 
				'md:padding--sm', 
				'lg:padding--sm',
				'padding--md', 
				'sm:padding--md', 
				'md:padding--md', 
				'lg:padding--md',
				'padding--lg', 
				'sm:padding--lg', 
				'md:padding--lg', 
				'lg:padding--lg',
				'padding--xl', 
				'sm:padding-xl', 
				'md:padding-xl', 
				'lg:padding-xl',
				'flex', 
				'sm:flex', 
				'md:flex', 
				'lg:flex',
				'flex-initial',
				'sm:flex-initial',
				'md:flex-initial',
				'lg:flex-initial',
				'flex-1',
				'sm:flex-1',
				'md:flex-1',
				'lg:flex-1',
				'flex-auto',
				'sm:flex-auto',
				'md:flex-auto',
				'lg:flex-auto',
				'flex-none',
				'sm:flex-none',
				'md:flex-none',
				'lg:flex-none',
				'flex-no-wrap',
				'sm:flex-no-wrap',
				'md:flex-no-wrap',
				'lg:flex-no-wrap',
				'flex-wrap',
				'sm:flex-wrap',
				'md:flex-wrap',
				'lg:flex-wrap',
				'flex-wrap-reverse',
				'sm:flex-wrap-reverse',
				'md:flex-wrap-reverse',
				'lg:flex-wrap-reverse',
				'flex-row',
				'sm:flex-row',
				'md:flex-row',
				'lg:flex-row',
				'flex-row-reverse',
				'sm:flex-row-reverse',
				'md:flex-row-reverse',
				'lg:flex-row-reverse',
				'flex-col',
				'sm:flex-col',
				'md:flex-col',
				'lg:flex-col',
				'flex-col-reverse',
				'sm:flex-col-reverse',
				'md:flex-col-reverse',
				'lg:flex-col-reverse',
				'items-stretch',
				'sm:items-stretch',
				'md:items-stretch',
				'lg:items-stretch',
				'items-start',
				'sm:items-start',
				'md:items-start',
				'lg:items-start',
				'items-center',
				'sm:items-center',
				'md:items-center',
				'lg:items-center',
				'items-end',
				'sm:items-end',
				'md:items-end',
				'lg:items-end',
				'items-baseline',
				'sm:items-baseline',
				'md:items-baseline',
				'lg:items-baseline',
				'justify-start',
				'sm:justify-start',
				'md:justify-start',
				'lg:justify-start',
				'justify-center',
				'sm:justify-center',
				'md:justify-center',
				'lg:justify-center',
				'justify-end',
				'sm:justify-end',
				'md:justify-end',
				'lg:justify-end',
				'justify-between',
				'sm:justify-between',
				'md:justify-between',
				'lg:justify-between',
				'justify-around',
				'sm:justify-around',
				'md:justify-around',
				'lg:justify-around',
			);

			$editor_settings[ $this->_slug . 'CustomClassNames'] = apply_filters( $this->_slug . '_block_editor_classnames', $defaults );
		}

		return $editor_settings;
	}
}

EditorsKit_Custom_CSS_Classes::register();
