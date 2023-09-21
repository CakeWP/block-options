<?php
/**
 * Gutenberghub_Styles_Manager_Blocks Class
 *
 * This class is responsible for creating a new taxonomy named "block"
 * and associating it with the custom post type.
 *
 * @package GutenberghubStylesManager
 * @since   1.0.0
 */


/**
 * Blocks.
 */
class Gutenberghub_Styles_Manager_Blocks {

	/**
	 * Taxonomy Slug.
	 *
	 * @static
	 * @access public
	 * @var    string
	 */
	public static $taxonomy = 'gsm_block';

	/**
	 * Constructor method.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register' ) );
	}

	/**
	 * Register the "block" taxonomy and associate it with our custom post type.
	 *
	 * @since 1.0.0
	 */
	public function register() {
		$labels = array(
			'name'              => _x( 'Blocks', 'taxonomy general name', 'gutenberghub-styles-manager' ),
			'singular_name'     => _x( 'Block', 'taxonomy singular name', 'gutenberghub-styles-manager' ),
			'search_items'      => __( 'Search Blocks', 'gutenberghub-styles-manager' ),
			'all_items'         => __( 'All Blocks', 'gutenberghub-styles-manager' ),
			'parent_item'       => __( 'Parent Block', 'gutenberghub-styles-manager' ),
			'parent_item_colon' => __( 'Parent Block:', 'gutenberghub-styles-manager' ),
			'edit_item'         => __( 'Edit Block', 'gutenberghub-styles-manager' ),
			'update_item'       => __( 'Update Block', 'gutenberghub-styles-manager' ),
			'add_new_item'      => __( 'Add New Block', 'gutenberghub-styles-manager' ),
			'new_item_name'     => __( 'New Block Name', 'gutenberghub-styles-manager' ),
			'menu_name'         => __( 'Blocks', 'gutenberghub-styles-manager' ),
		);

		$args = array(
			'hierarchical'      => false,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_in_rest'      => true,
			'show_admin_column' => true,
			'query_var'         => true,
		);

		register_taxonomy( static::$taxonomy, array( Gutenberghub_Styles_Manager_Admin::$post_type ), $args );

		// Populating the taxonomy with block types.
		$block_types = WP_Block_Type_Registry::get_instance()->get_all_registered();

		foreach ( $block_types as $block_type ) {

			if ( term_exists( $block_type->name, static::$taxonomy ) ) {
				continue;
			}

			wp_insert_term(
				$block_type->title,
				static::$taxonomy,
				array(
					'slug' => str_replace( '/', '___', $block_type->name ),
				)
			);
		}
	}
}

new Gutenberghub_Styles_Manager_Blocks();
