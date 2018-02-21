<?php
/**
 * AJAX Functions
 *
 * Process AJAX actions.
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
 */
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Save Options
 *
 * @since 1.0
 * @return void
 */
function blockopts_ajax_save_settings(){
    $response = array( 'errors' => array() );

	if( !isset( $_POST['method'] ) ) return;
	if( !isset( $_POST['nonce'] ) ) return;

	if ( ! wp_verify_nonce( $_POST['nonce'], 'blockopts-settings-nonce' ) ) {
		return;
	}

	switch ( $_POST['method'] ) {
		case 'activate':
		case 'deactivate':
				if( !isset( $_POST['module'] ) ) return;

				//update options
				update_option( 'blockopts_tabmodule-' . sanitize_text_field( $_POST['module'] ), sanitize_text_field( $_POST['method'] ) );

				//update global variable
				blockopts_update_option( sanitize_text_field( $_POST['module'] ), sanitize_text_field( $_POST['method'] ) );
			break;

		case 'save':
				$response['messages'] = array( __( 'Settings saved successfully.', 'block-options' ) );
				if( !isset( $_POST['data'] ) ) return;
				parse_str( $_POST['data']['--blockopts-form-serialized-data'], $params );
				$sanitized = blockopts_sanitize_array( $params );
				update_option( 'blockopts_tabmodule-settings', maybe_serialize( $sanitized ) );

				//reset options
				blockopts_update_option( 'settings', $sanitized );
			break;

		default:
			# code...
			break;
	}
	$response['source'] 	= 'blockOPTS_Response';
	$response['response'] 	= 'success';
	$response['closeModal'] = true;
	$response 				= (object) $response;

	//let devs do there action
	do_action( 'block_options_before_ajax_print', sanitize_text_field( $_POST['method'] ) );

	echo json_encode( $response );
	die();
}
add_action( 'wp_ajax_blockopts_ajax_settings',  'blockopts_ajax_save_settings' );

/* Hide the rating div
 * @return json string
 *
 */
if( !function_exists( 'blockopts_ajax_hide_rating' ) ):
	function blockopts_ajax_hide_rating(){
	    update_option('blockopts_RatingDiv','yes');
	    echo json_encode(array("success")); exit;
	}
	add_action( 'wp_ajax_blockopts_hideRating', 'blockopts_ajax_hide_rating' );
endif;
?>
