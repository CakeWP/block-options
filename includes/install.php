<?php
/**
 * Install Function
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

//register default values
if( !function_exists( 'blockopts_register_defaults' ) ){
	register_activation_hook( BLOCKOPTS_PLUGIN_FILE, 'blockopts_register_defaults' );
	if( function_exists( 'is_multisite' ) && is_multisite() ){
  		
  	}else{
  		add_action( 'plugins_loaded', 'blockopts_register_defaults' );
  	}
	function blockopts_register_defaults(){
		if( is_admin() ){

			if( !get_option( 'blockopts_installDate' ) ){
				add_option( 'blockopts_installDate', date( 'Y-m-d h:i:s' ) );
			}

			if( !get_option( '_blockopts_default_registered_' ) ){
				//activate free version modules
				add_option( 'blockopts_tabmodule-devices', 'activate' );
				add_option( 'blockopts_tabmodule-logic', 'activate' );
				add_option( 'blockopts_tabmodule-state', 'activate' );
				add_option( '_blockopts_default_registered_', '1' );
				delete_option( 'blockopts_settings' );
			}

		}
	}
}

?>
