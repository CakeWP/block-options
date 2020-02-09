<?php
/**
 * Hide Title
 *
 * @copyright   Copyright (c) 2019, Jeffrey Carandang
 * @since       1.0
 * @package     EditorsKit
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'editorskit_hide_title' ) ) {

	/**
	 * Replace title with blank
	 *
	 * @param string $title The post title.
	 * @param int    $id The post id.
	 *
	 * @return string Returns the new title.
	 */
	function editorskit_hide_title( $title, $id = null ) {
		// phpcs:ignore
		if ( ! is_admin() && ! is_search() && in_the_loop() && ( strpos( esc_url( $_SERVER[ 'REQUEST_URI' ] ), '/wp-json/' ) === false ) ) {

			$hidden = get_post_meta( $id, '_editorskit_title_hidden', true );
			if ( $hidden ) {

				return '';
			}
		}

		return $title;
	}
	add_filter( 'the_title', 'editorskit_hide_title', 90, 2 );
}

if ( ! function_exists( 'editorskit_hidden_title_body_class' ) ) {

	/**
	 * Replace title with blank
	 *
	 * @param array $classes The body classes.
	 *
	 * @return array Returns the new body classes.
	 */
	function editorskit_hidden_title_body_class( $classes ) {
		if ( ! is_admin() && ! is_search() ) {

			global $post;
			if ( isset( $post->ID ) ) {

				$hidden = get_post_meta( $post->ID, '_editorskit_title_hidden', true );

				if ( $hidden ) {

					$classes[] = 'editorskit-title-hidden';
				}
			}
		}
		return $classes;
	}
	add_filter( 'body_class', 'editorskit_hidden_title_body_class' );
}

if ( ! function_exists( 'editorskit_remove_title_filter_nav_menu' ) ) {

	/**
	 * Replace title with blank
	 *
	 * @param string $nav_menu The nav menu output.
	 * @param object $args The wp_nav_menu() arguments.
	 *
	 * @return array Returns the new $nav_menu.
	 */
	function editorskit_remove_title_filter_nav_menu( $nav_menu, $args ) {

		remove_filter( 'the_title', 'editorskit_hide_title', 10, 2 );
		return $nav_menu;
	}
	add_filter( 'pre_wp_nav_menu', 'editorskit_remove_title_filter_nav_menu', 10, 2 );
}

if ( ! function_exists( 'editorskit_add_title_filter_non_menu' ) ) {

	/**
	 * Replace title with blank
	 *
	 * @param string $items The HTML list content for the menu items.
	 * @param object $args The wp_nav_menu() arguments.
	 *
	 * @return array Returns the new $items.
	 */
	function editorskit_add_title_filter_non_menu( $items, $args ) {
		// we are done working with menu, so add the title filter back.
		add_filter( 'the_title', 'editorskit_hide_title', 10, 2 );
		return $items;
	}
	add_filter( 'wp_nav_menu_items', 'editorskit_add_title_filter_non_menu', 10, 2 );
}


if ( ! function_exists( 'editorskit_admin_body_class' ) ) {

	/**
	 * Replace title with blank
	 *
	 * @param string $classes The body classes.
	 *
	 * @return array Returns the new body classes.
	 */
	function editorskit_admin_body_class( $classes ) {
		global $post;
		if ( isset( $post->ID ) ) {

			$hidden = get_post_meta( $post->ID, '_editorskit_title_hidden', true );
			if ( $hidden ) {

				$classes .= 'editorskit-title-hidden ';
			}
		}

		return $classes;
	}
	add_filter( 'admin_body_class', 'editorskit_admin_body_class', 10, 2 );
}
