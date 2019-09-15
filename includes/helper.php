<?php
/**
 * Create helper functions for third party plugin integrations
 *
 * @copyright   Copyright (c) 2019, Jeffrey Carandang
 * @since       1.9.2
 */

//Block Lab : https://github.com/getblocklab/block-lab/pull/373
add_filter( 'block_lab_default_fields', 'editorskit_block_lab_default_fields', 10, 3 );
function editorskit_block_lab_default_fields( $default_fields ){
	$default_fields['editorskit'] = 'array'; // The name and type.
	return $default_fields;
}

function editorskit_blocklab_classname() {
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