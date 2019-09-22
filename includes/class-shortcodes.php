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
	 * Register Shortcode.
	 */
	public function register_shortcode( $atts, $content = "" ) {

		if( !isset( $atts['display'] ) ){
			return $content;
		}
		$tag = 'div';

		if( isset( $atts['tag'] ) ){
			$tag = $atts['tag'];
		}

		$content = '<'. $tag .' class="editorskit-shortcode">';

		switch ( $atts['display'] ) {
			case 'wordcount':
				$wordcount = $this->wordcount( $atts, $content );
				$content .= $wordcount;

				if( empty( $wordcount ) ){
					return false;
				}

				break;
			
			default:
				# code...
				break;
		}

		$content .= '</'. $tag .'>';

		return $content;
	}

	function wordcount( $atts, $content ) {
		global $post;
		
		if( !isset($post->ID) ){
			return false;
		}

		$returned_content = '';
		$readingTime = get_post_meta( $post->ID, '_editorskit_reading_time', true );
		
		if( !$readingTime && isset( $atts['fallback'] ) && $atts['fallback'] == 'true' ){
			$blocks = '';
			if ( function_exists('has_blocks') && has_blocks( $post->post_content ) ) {
				$blocks = parse_blocks( $post->post_content );
			}
			$text  = trim( strip_tags( $post->post_content ) );
			$text  = strip_shortcodes( $text );
			$wordcount = str_word_count( $text );

			$wordPerSeconds = ( $wordcount / 275 ) * 60;

			$mediaBlocks =  array( 'core/image', 'core/gallery', 'core/cover' );

			if( !empty( $blocks ) ){
				$i = 12;
				foreach ( $blocks as $key => $block ) {
					if( in_array( $block['blockName'], $mediaBlocks ) ){
						$wordPerSeconds = $wordPerSeconds + $i;
						if ( $i > 3 ) {
							$i--;;
						}
					}
				}
			}
			
			$wordPerMinute = $wordPerSeconds / 60;

			if( $wordPerMinute < 1 ){
				$wordPerMinute = 1;
			}

			$readingTime = round($wordPerMinute);
		}

		if( !$readingTime ){
			return false;
		}

		if( isset($atts['before']) ){
			$returned_content .= $atts['before'];
		}

		$returned_content .= $readingTime;

		if( isset($atts['after']) ){
			$returned_content .= $atts['after'];
		}

		return $returned_content;
	}
}

return new EditorsKit_Shortcodes();
