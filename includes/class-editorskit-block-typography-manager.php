<?php
/**
 * Will manage block level typography
 *
 * @package Editorskit
 */

/**
 * Class to handle block level typography
 */
class Editorskit_Block_Typography_Manager {


	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_filter( 'render_block', array( $this, 'apply_editorskit_typography' ), 10, 2 );
	}

	/**
	 * Will extract font family details for the given font family.
	 *
	 * @param string $font_family - Font family to extract details for.
	 *
	 * @return array - Font family details.
	 */
	public function get_font_details( $font_family ) {

		global $wp_filesystem;

		require_once ABSPATH . '/wp-admin/includes/file.php';
		WP_Filesystem();

		// TODO: maybe move this fonts data somewhere in the root?
		$google_font_file        = EDITORSKIT_PLUGIN_DIR . 'src/add-ons/typography/src/defaults/google-fonts.json';
		$content                 = '';
		$required_family_details = '';

		if ( $wp_filesystem->exists( $google_font_file ) ) {
			$content = json_decode( $wp_filesystem->get_contents( $google_font_file ), true );
		}

		if ( '' !== $content && ! empty( $content['fonts'] ) && is_array( $content['fonts'] ) ) {

			foreach ( $content['fonts'] as $font_details ) {
				if ( isset( $font_details['name'] ) && $font_details['name'] === $font_family ) {
					$required_family_details = $font_details;
					break;
				}
			}
		}

		return $required_family_details;
	}

	/**
	 * Applies typography variables to the given block.
	 *
	 * @param \DOMNode $block_element - Reference to block element node.
	 * @param array    $attributes - Parsed block attributes.
	 * @param string   $block_name - Block name.
	 *
	 * @return \DOMNode - Will provide block with applied typography variables.
	 */
	public function apply_typography( \DOMNode &$block_element, $attributes, $block_name ) {

		$font_family = '';
		$font_weight = '';

		$typography      = isset( $attributes['editorskit_typography'] ) ? $attributes['editorskit_typography'] : null;
		$has_font_family = isset( $typography['family'] ) && '' !== $typography['family'];
		$has_font_weight = isset( $typography['weight'] ) && '' !== $typography['weight'];

		if ( is_null( $typography ) ) {
			return;
		}

		$font_family_details = $has_font_family ? $this->get_font_details( $typography['family'] ) : null;

		if ( ! is_null( $font_family_details ) ) {

			if ( $has_font_family ) {

				if ( 'core/heading' === $block_name ) {
					$font_family = sprintf( '--ek-heading-font-family:%1$s;', $typography['family'] );

					if ( $has_font_weight ) {
						$font_weight = sprintf( '--ek-heading-font-weight:%1$s;', $typography['weight'] );
					}
				} elseif ( in_array( $block_name, array( 'core/button', 'core/buttons' ), true ) ) {
					$font_family = sprintf( '--ek-button-font-family:%1$s;', $typography['family'] );

					if ( $has_font_weight ) {
						$font_weight = sprintf( '--ek-button-font-weight:%1$s;', $typography['weight'] );
					}
				} elseif ( 'core/heading' === $block_name ) {
					$font_family = sprintf( '--ek-heading-font-family:%1$s;', $typography['family'] );

					if ( $has_font_weight ) {
						$font_weight = sprintf( '--ek-heading-font-weight:%1$s;', $typography['weight'] );
					}
				} else {
					$font_family = sprintf( '--ek-font-family:%1$s;', $typography['family'] );

					if ( $has_font_weight ) {
						$font_weight = sprintf( '--ek-font-weight:%1$s;', $typography['weight'] );
					}
				}
			}
		} else {

			if ( 'core/heading' === $block_name ) {
				$font_family = sprintf( '--ek-heading-font-family:%1$s;', $typography['family'] );
			} elseif ( 'core/buttons' === $block_name ) {
				$font_family = sprintf( '--ek-button-font-family:%1$s;', $typography['family'] );
			} else {
				$font_family = sprintf( '--ek-font-family:%1$s;', $typography['family'] );
			}
		}

		$default_block_element_styles = $block_element->getAttribute( 'style' ) ?? '';

		$block_element->setAttribute(
			'style',
			sprintf(
				'%1$s%2$s%3$s',
				$default_block_element_styles,
				$has_font_family ? $font_family : '',
				$has_font_weight ? $font_weight : ''
			)
		);

	}

	/**
	 * Applies editorskit typography to the given block (if needed)
	 *
	 * @param string $block_content - Current block content.
	 * @param string $block - Parsed block.
	 *
	 * @return string $block_content - Block content.
	 */
	public function apply_editorskit_typography( $block_content, $block ) {

		libxml_use_internal_errors( true ); // For surpressing any document error.

		$document = new DOMDocument();

		if ( ! isset( $block['attrs']['editorskit_typography'] ) || '' === $block_content ) {
			return $block_content;
		}

		$attributes = isset( $block['attrs'] ) ? $block['attrs'] : null;
		$block_name = isset( $block['blockName'] ) ? $block['blockName'] : null;

		$document->loadHTML( '<?xml encoding="utf-8" ?>' . $block_content );

		$block_element = $document->getElementsByTagName( 'body' )->item( 0 )->childNodes->item( 0 );

		if ( is_null( $block_element ) ) {
			return $block_content;
		}

		$classlist = explode( ' ', $block_element->getAttribute( 'class' ) ?? '' );

		$classlist[] = 'has-ek-typography';

		$block_element->setAttribute(
			'class',
			join( ' ', $classlist )
		);

		// Applying editorskit typography.
		$this->apply_typography( $block_element, $attributes, $block_name );

		libxml_clear_errors();

		return $document->saveHTML( $block_element );
	}
}


new Editorskit_Block_Typography_Manager();
