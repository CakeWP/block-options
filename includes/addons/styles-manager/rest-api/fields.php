<?php
/**
 * Extending the rest api with additional fields.
 *
 * @package GutenberghubStylesManager
 */

/**
 * Include styles block manager.
 */

/**
 * A new field that displays if the block is registered or not.
 */
register_rest_field(
	Gutenberghub_Styles_Manager_Blocks::$taxonomy,
	'gsm_is_missing',
	array(
		'update_callback' => null,
		'schema'          => null,
		'get_callback'    => function( $term_obj ) {

			$block_type = str_replace( '___', '/', $term_obj['slug'] );
			$registry = WP_Block_Type_Registry::get_instance();

			return false === $registry->is_registered( $block_type );
		},
	)
);

