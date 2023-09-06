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

		$is_in_the_loop = in_the_loop();

		if ( function_exists( 'wp_is_block_theme' ) ) {
			$is_in_the_loop = wp_is_block_theme() ? true : $is_in_the_loop;
		}

		// phpcs:ignore
		if ( ! is_admin() && ! is_search() && ! wp_is_json_request()  && ( strpos( esc_url( $_SERVER[ 'REQUEST_URI' ] ), '/wp-json/' ) === false ) && $is_in_the_loop ) {

			$hidden = get_post_meta( $id, '_editorskit_title_hidden', true );
			if ( $hidden ) {

				return '';
			}
		}

		return $title;
	}
	add_filter( 'the_title', 'editorskit_hide_title', 999999, 2 );
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

add_filter(
	'render_block',
	/**
	 * Avoids the filter to be applied on post title block when
	 * used inside the query loop context.
	 *
	 * @param string $block_content - Block content.
	 * @param array $parsed_block - Parsed block.
	 * @param WP_Block $instance - Block instance.
	 */
	function( $block_content, $parsed_block ) {

		if ( 'core/query' !== $parsed_block['blockName'] || isset( $parsed_block['ek_rendered'] ) || is_search() || is_archive() || is_home() ) {
			return $block_content;
		}

		// Checking if the post title block is used inside query loop instance.
		remove_filter( 'the_title', 'editorskit_hide_title', 999999, 2 );

		$parsed_block['ek_rendered'] = true;

		return render_block( $parsed_block );
	},
	10,
	3
);
