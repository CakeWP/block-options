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
class EditorsKit_ACF_Support {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_ACF_Support
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_ACF_Support();
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

		add_action( 'rest_api_init', function () {
			if ( is_user_logged_in() ) {
				if( class_exists( 'ACF' ) ){
					register_rest_route( 'editorskit/v1', '/acf', array(
						'methods' => 'GET',
						'callback' => array( $this, 'api' ),
					) );
				}else{
					register_rest_route( 'editorskit/v1', '/acf', array(
						'methods' => 'GET',
						'callback' => function(){
							return (object)[];
						},
					) );
				}
			}
		} );
	}

	public function api( $data ){
		$fields = array();
		if ( function_exists('acf_get_field_groups') ) {
            $groups = acf_get_field_groups();
            if ( is_array( $groups ) ) {
                foreach ( $groups as $group ) {
                    $fields_group = acf_get_fields( $group );
                    if( !empty( $fields_group ) ){
                        foreach ( $fields_group as $k => $fg ) {
                               $fields[ $fg['key'] ] = $fg['label'];
                           }   
                    }
                }
            }
        }else{
            $groups = apply_filters( 'acf/get_field_groups', array() );
	        if ( is_array( $groups ) ) {
	            foreach ( $groups as $group ) {
	                $fields_group = apply_filters( 'acf/field_group/get_fields', array(), $group['id'] );
	                if( !empty( $fields_group ) ){
	                    foreach ( $fields_group as $k => $fg ) {
	                            $fields[ $fg['key'] ] = $fg['label'];
	                       }   
	                }
	            }
	        }
        }
        
		return (object)array_reverse( $fields ) ;
	}

}

EditorsKit_ACF_Support::register();
