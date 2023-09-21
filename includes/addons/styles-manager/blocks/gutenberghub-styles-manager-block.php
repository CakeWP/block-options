<?php
/**
 * Gutenberghub_Styles_Manager_Blocks Class
 *
 * This class is responsible for registering the preview block
 *
 * @package GutenberghubStylesManager
 * @since   1.0.0
 */

/**
 * Block.
 */
class Gutenberghub_Styles_Manager_Block {

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
		register_block_type(
			EDITORSKIT_PLUGIN_DIR . 'build/styles-manager-block.json',
			array(
				'render_callback' => array( $this, 'render' ),
			)
		);
	}


	/**
	 *
	 * Renders the block.
	 *
	 * @param array    $attributes - Block Attributes.
	 * @param string   $block_content - Content.
	 * @param WP_Block $block_instance - Instance.
	 */
	public function render( $attributes, $block_content, $block_instance ) {
		$current_post = isset( $GLOBALS['post'] ) ? $GLOBALS['post'] : null;

		if ( ! isset( $attributes['blockName'] ) ) {
			return $block_content;
		}

		// Applying the style.
		$block_name = explode( '/', $attributes['blockName'] );

		if ( ! isset( $block_name[1] ) ) {
			return $block_content;
		} else {
			$block_name = $block_name[1];
		}

		$style_class = 'is-style-' . _wp_to_kebab_case( $current_post->post_title );

		$new_content = '';

		foreach ( $block_instance->inner_blocks as $child_block ) {
			$new_content .= gsm_str_replace_first(
				'class="',
				'class="' . $style_class . ' ',
				$child_block->render()
			);
		}

		return $new_content;
	}
}

new Gutenberghub_Styles_Manager_Block();
