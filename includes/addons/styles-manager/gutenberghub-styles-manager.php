<?php
/**
 * Gutenberghub_Styles_Manager Class
 *
 * This class is responsible for adding/rendering of registered block styles.
 *
 * @since 1.0.0
 * @package GutenberghubStylesManager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Styles Manager.
 */
class Gutenberghub_Styles_Manager {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'wp_loaded', array( $this, 'register' ) );

		add_filter(
			'template_include',
			function( $template ) {

				$post = isset( $GLOBALS['post'] ) ? $GLOBALS['post'] : null;

				if ( ! is_null( $post ) && Gutenberghub_Styles_Manager_Admin::$post_type === $post->post_type ) {
					return EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/templates/blank.php';
				}

				return $template;
			}
		);

		add_filter(
			'show_admin_bar',
			function( $show ) {

				$post = isset( $GLOBALS['post'] ) ? $GLOBALS['post'] : null;

				if ( ! is_null( $post ) && Gutenberghub_Styles_Manager_Admin::$post_type === $post->post_type ) {
					return false;
				}

				return $show;
			}
		);

	}

	/**
	 * Registers the necessary styles.
	 *
	 * @return void
	 */
	public function register() {

		$styles = get_posts(
			array(
				'posts_per_page' => -1,
				'post_type'      => Gutenberghub_Styles_Manager_Admin::$post_type,
			)
		);

		foreach ( $styles as $style ) {

			$block = get_the_terms( $style, Gutenberghub_Styles_Manager_Blocks::$taxonomy );

			// Step 1: Exit if no block is assigned.
			if ( ! is_array( $block ) || 0 === count( $block ) ) {
				continue;
			}

			// Step 2: Set the array pointer to the first element, since we're only expecting 1 block per style.
			$block = reset( $block );

			// Register the block style.
			list($namespace, $block_name) = explode( '___', $block->slug );

			$block_type = $namespace . '/' . $block_name;

			$css = get_post_meta( $style->ID, 'gsm_css', true );

			// Step 3: Exit if no CSS is found.
			if ( '' === $css ) {
				continue;
			}

			// Step 4: Checking if the style is active. Excluding this check from the previewing post.
			$is_previewing = isset( $_GET['preview'] ) ? true : false;
			$is_active     = get_post_meta( $style->ID, 'gsm_active', true );

			if ( false === $is_previewing && ( false === $is_active || '1' !== $is_active ) ) {
				continue;
			}

			// Step 5: Preparing css.
			$selector = _wp_to_kebab_case( ! empty( $style->post_title ) ? $style->post_title : (string) $style->ID );

			$css = str_replace( 'selector', '.is-style-' . $selector, $css );

			register_block_style(
				$block_type,
				array(
					'inline_style' => $css,
					'name'         => $selector,
					'label'        => empty( $style->post_title ) ? __( 'Untitled Style', 'block-options' ) : $style->post_title,
				)
			);
		}
	}


}

new Gutenberghub_Styles_Manager();
