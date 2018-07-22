<?php
/**
 * Register Settings
 * @since   1.0
*/

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Get an option
 *
 * Looks to see if the specified setting exists, returns default if not
 *
 * @since 1.0
 * @global $block_options Array of all the Block Options
 * @return mixed
 */
if( !function_exists( 'blockopts_get_option' ) ):
	function blockopts_get_option( $key = '', $default = false ) {
		global $block_options;

		$value = ! empty( $block_options[ $key ] ) ? $block_options[ $key ] : $default;
		$value = apply_filters( 'blockopts_get_option', $value, $key, $default );

		return apply_filters( 'blockopts_get_option_' . $key, $value, $key, $default );
	}
endif;

/**
 * Update an option
 *
 * Updates an blockopts setting value in both the db and the global variable.
 * Warning: Passing in an empty, false or null string value will remove
 *          the key from the block_options array.
 *
 * @since 1.0
 * @param string $key The Key to update
 * @param string|bool|int $value The value to set the key to
 * @global $block_options Array of all the Block Options
 * @return boolean True if updated, false if not.
 */
if( !function_exists( 'blockopts_update_option' ) ):
	function blockopts_update_option( $key = '', $value = false ) {

		// If no key, exit
		if ( empty( $key ) ){
			return false;
		}

		if ( empty( $value ) ) {
			$remove_option = blockopts_delete_option( $key );
			return $remove_option;
		}

		// First let's grab the current settings
		$options = get_option( 'blockopts_settings' );

		// Let's let devs alter that value coming in
		$value = apply_filters( 'blockopts_update_option', $value, $key );

		// Next let's try to update the value
		$options[ $key ] = $value;

		$did_update = update_option( 'blockopts_settings', $options );
		// If it updated, let's update the global variable
		if ( $did_update ){
			global $block_options;
			$block_options[ $key ] = $value;
		}
		return $did_update;
	}
endif;

/**
 * Remove an option
 *
 * Removes block options setting value in both the db and the global variable.
 *
 * @since 1.0
 * @param string $key The Key to delete
 * @global $block_options Array of all the Block Options
 * @return boolean True if removed, false if not.
 */
if( !function_exists( 'blockopts_delete_option' ) ):
	function blockopts_delete_option( $key = '' ) {
		// If no key, exit
		if ( empty( $key ) ){
			return false;
		}
		// First let's grab the current settings
		$options = get_option( 'blockopts_settings' );

		// Next let's try to update the value
		if( isset( $options[ $key ] ) ) {
			unset( $options[ $key ] );
		}
		$did_update = update_option( 'blockopts_settings', $options );

		// If it updated, let's update the global variable
		if ( $did_update ){
			global $edd_options;
			$edd_options = $options;
		}
		return $did_update;
	}
endif;

/**
 * Get Settings
 *
 * Retrieves all plugin settings
 *
 * @since 1.0
 * @return array blockOPTS settings
 */
if( !function_exists( 'blockopts_get_settings' ) ):
	function blockopts_get_settings() {
		$settings = get_option( 'blockopts_settings' );

		if( empty( $settings ) ) {

			$opts_settings 		= get_option( 'blockopts_tabmodule-settings' );
			//fallback to prevent error
			if( is_serialized( $opts_settings ) ){
				$opts_settings = maybe_unserialize( $opts_settings );
			}

			// Update old settings with new single option
			$settings 			= !empty( $opts_settings ) ?  $opts_settings : array();
			$general 			= array( 'general' 		=> get_option( 'blockopts_tabmodule-general' ) );
			$devices 			= array( 'devices' 		=> get_option( 'blockopts_tabmodule-devices' ) );
			$logic 				= array( 'logic' 		=> get_option( 'blockopts_tabmodule-logic' ) );
			$state 				= array( 'state' 		=> get_option( 'blockopts_tabmodule-state' ) );
			$acf 				= array( 'acf' 			=> get_option( 'blockopts_tabmodule-acf' ) );
			

			$settings = array_merge( array( 'settings' => $settings ), $general, $devices, $logic, $state, $acf );

			// Let's let devs alter that value coming in
			$value = apply_filters( 'blockopts_update_settings', $settings );

			update_option( 'blockopts_settings', $settings );
		}

		return apply_filters( 'blockopts_get_settings', $settings );
	}
endif;
?>
