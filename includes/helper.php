<?php
/**
 * Create helper functions for third party plugin integrations
 *
 * @copyright   Copyright (c) 2019, Jeffrey Carandang
 * @since       1.9.2
 */

//Block Lab : https://github.com/getblocklab/block-lab/pull/373
add_filter( 'is_block_field_name_allowed', 'is_editorskit_blocklab_name_allowed', 10, 3 );
function is_editorskit_blocklab_name_allowed( $is_name_allowed, $name ){
	if( $name == 'editorskit' ){
		$is_name_allowed = true;
	}

	return $is_name_allowed;
}

function editorskit_block_classname() {
	$classes = '';
	if( function_exists( 'block_field' ) ){
		$value = block_field( 'editorskit', false );
		
		if( !is_array( $value ) ){
			return;
		}

		$devices = array( 'desktop', 'tablet', 'mobile' );

		foreach ( $devices as $key => $device ) {
			if( in_array( $device, $value ) && !$value[ $device ] ){
				$classes .= ' editorskit-no-' . $device;
			}
		}
	}

	return trim( $classes );
}

?>