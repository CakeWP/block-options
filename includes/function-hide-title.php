<?php
/**
 * Hide Title
 *
 * @copyright   Copyright (c) 2019, Jeffrey Carandang
 * @since       1.0
*/
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

//register default values
if( !function_exists( 'editorskit_hide_title' ) ){
	add_filter( 'the_title', 'editorskit_hide_title', 10, 2 );
	function editorskit_hide_title( $title, $id = null ){
		if( !is_admin() ){
			$hidden = get_post_meta( $id, '_editorskit_title_hidden', true );
			if( $hidden ){
				return '';
			}
		}
		return $title;
	}
}

if( !function_exists( 'editorskit_admin_body_class' ) ){
	add_filter( 'admin_body_class', 'editorskit_admin_body_class', 10, 2 );
	function editorskit_admin_body_class( $classes ){
		global $post;
		if( isset( $post->ID ) ){
			$hidden = get_post_meta( $post->ID, '_editorskit_title_hidden', true );
			if( $hidden ){
				$classes .= 'editorskit-title-hidden ';
			}
		}

		return $classes;
	}
}
?>