<?php
/**
 * Create shortcodes
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang from EditorsKit
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * EditorsKit_Shortcodes Class
 *
 * @since 1.15
 */
class EditorsKit_Shortcodes {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_shortcode( 'editorskit', array( $this, 'register_shortcode' ) );
	}

	/**
	 * Register EditorsKit shortcode.
	 *
	 * @param array $atts The shortcode attributes.
	 * @param mixed $content The shortcode content.
	 *
	 * @return mixed Returns shortcode display.
	 */
	public function register_shortcode( $atts, $content = '' ) {

		if ( ! isset( $atts['display'] ) ) {
			return $content;
		}
		$tag = 'div';

		if ( isset( $atts['tag'] ) ) {
			$tag = $atts['tag'];
		}

		$content = '<' . $tag . ' class="editorskit-shortcode">';

		switch ( $atts['display'] ) {
			case 'wordcount':
				$wordcount = $this->wordcount( $atts, $content );
				$content  .= $wordcount;

				if ( empty( $wordcount ) ) {
					return false;
				}

				break;

			default:
				// code...
				break;
		}

		$content .= '</' . $tag . '>';

		return $content;
	}

	/**
	 * Calculate word count.
	 *
	 * @param array $atts The shortcode attributes.
	 * @param mixed $content The shortcode content.
	 *
	 * @return mixed Returns wordcount with content.
	 */
	public function wordcount( $atts, $content ) {
		global $post;

		if ( ! isset( $post->ID ) ) {
			return false;
		}

		$returned_content = '';
		$reading_time     = get_post_meta( $post->ID, '_editorskit_reading_time', true );

		if ( ! $reading_time && isset( $atts['fallback'] ) && 'true' === $atts['fallback'] ) {
			$blocks = '';
			if ( function_exists( 'has_blocks' ) && has_blocks( $post->post_content ) ) {
				$blocks = parse_blocks( $post->post_content );
			}
			$text      = trim( wp_strip_all_tags( $post->post_content ) );
			$text      = strip_shortcodes( $text );
			$wordcount = str_word_count( $text );

			$word_per_seconds = ( $wordcount / 275 ) * 60;
			$media_blocks     = array( 'core/image', 'core/gallery', 'core/cover' );

			if ( ! empty( $blocks ) ) {
				$i = 12;
				foreach ( $blocks as $key => $block ) {
					if ( in_array( $block['blockName'], $media_blocks ) ) { // phpcs:ignore
						$word_per_seconds = $word_per_seconds + $i;
						if ( $i > 3 ) {
							$i--;
						}
					}
				}
			}

			$word_per_minute = $word_per_seconds / 60;

			if ( $word_per_minute < 1 ) {
				$word_per_minute = 1;
			}

			$reading_time = round( $word_per_minute );
		}

		if ( ! $reading_time ) {
			return false;
		}

		if ( isset( $atts['before'] ) ) {
			$returned_content .= $atts['before'];
		}

		$returned_content .= $reading_time;

		if ( isset( $atts['after'] ) ) {
			$returned_content .= $atts['after'];
		}

		return $returned_content;
	}
}

return new EditorsKit_Shortcodes();
