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
		if( !is_admin() && !is_search() ){
			$hidden = get_post_meta( $id, '_editorskit_title_hidden', true );
			if( $hidden ){
				return '';
			}
		}
		return $title;
	}
}

function editorskit_remove_title_filter_nav_menu( $nav_menu, $args ) {
    // we are working with menu, so remove the title filter
    remove_filter( 'the_title', 'editorskit_hide_title', 10, 2 );
    return $nav_menu;
}
// this filter fires just before the nav menu item creation process
add_filter( 'pre_wp_nav_menu', 'editorskit_remove_title_filter_nav_menu', 10, 2 );

function editorskit_add_title_filter_non_menu( $items, $args ) {
    // we are done working with menu, so add the title filter back
    add_filter( 'the_title', 'editorskit_hide_title', 10, 2 );
    return $items;
}
// this filter fires after nav menu item creation is done
add_filter( 'wp_nav_menu_items', 'editorskit_add_title_filter_non_menu', 10, 2 );

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