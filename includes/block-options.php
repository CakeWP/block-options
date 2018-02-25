<?php
/**
 * BLOCK: Basic
 *
 * Gutenberg Custom Block assets.
 *
 * @since   1.0
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if( !function_exists( 'blockopts_editor_assets' ) ):
	// Hook: Editor assets.
	add_action( 'enqueue_block_editor_assets', 'blockopts_editor_assets', 9999 );
	/**
	 * Enqueue the block's assets for the editor.
	 *
	 * `wp-blocks`: includes block type registration and related functions.
	 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
	 * `wp-i18n`: To internationalize the block's. text.
	 *
	 * @since 1.0.0
	 */
	function blockopts_editor_assets() {
		global $block_options;
		$js_dir  = BLOCKOPTS_PLUGIN_URL . 'assets/js/';
		$css_dir = BLOCKOPTS_PLUGIN_URL . 'assets/css/';

		wp_enqueue_script(
			'gutenberg-blockopts',
			$js_dir .'block-options.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date' ), // Dependencies, defined above.
			filemtime( BLOCKOPTS_PLUGIN_DIR .'assets/js/block-options.js' )
		);

		wp_enqueue_style(
			'gutenberg-blockopts-css', // Handle.
			$css_dir .'gutenberg.css', // Block editor CSS.
			array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
			filemtime( BLOCKOPTS_PLUGIN_DIR .'assets/css/gutenberg.css' ) // filemtime — Gets file modification time.
		);

		wp_localize_script( 'gutenberg-blockopts', 'varblockOpts', $block_options );

	}
endif;

function blockopts_gutenberg_callback( $content ){
	$rendered_content = '';
	$block_pattern = (
		'/<!--\s+wp:(?:([^\s]+))(\s+(\{.*?\}))?\s+(\/)?-->/'
	);
	while ( preg_match( $block_pattern, $content, $block_match, PREG_OFFSET_CAPTURE ) ) {
		$opening_tag     = $block_match[0][0];
		$offset          = $block_match[0][1];
		$block_name      = $block_match[1][0];
		$is_self_closing = isset( $block_match[4] );
		// Reset attributes JSON to prevent scope bleed from last iteration.
		$block_attributes_json = null;

		if ( isset( $block_match[3] ) ) {
			$block_attributes_json = $block_match[3][0];
		}
		// Since content is a working copy since the last match, append to
		// rendered content up to the matched offset...
		$rendered_content .= substr( $content, 0, $offset );
		// ...then update the working copy of content.
		$content = substr( $content, $offset + strlen( $opening_tag ) );
		
		// Attempt to parse attributes JSON, if available.
		$attributes = array();
		if ( ! empty( $block_attributes_json ) ) {
			$decoded_attributes = json_decode( $block_attributes_json, true );
			if ( ! is_null( $decoded_attributes ) ) {
				$attributes = $decoded_attributes;
			}
		}
		
		if ( ! $is_self_closing ) {
			$end_tag_pattern = '/<!--\s+\/wp:' . str_replace( '/', '\/', preg_quote( $block_name ) ) . '\s+-->/';
			if ( ! preg_match( $end_tag_pattern, $content, $block_match_end, PREG_OFFSET_CAPTURE ) ) {
				// If no closing tag is found, abort all matching, and continue
				// to append remainder of content to rendered output.
				break;
			}
			// Update content to omit text up to and including closing tag.
			$end_tag    = $block_match_end[0][0];
			$end_offset = $block_match_end[0][1];
			$innerHTML 	= substr( $content, 0, $end_offset );
			$content 	= substr( $content, $end_offset + strlen( $end_tag ) );

			$rendered_content .= apply_filters( 'blockopts_block_options', $opening_tag . $innerHTML . $end_tag, $attributes, array( 'tag' => $opening_tag , 'block_name' => $block_name ) );	
		}
	}

	// Append remaining unmatched content.
	$rendered_content .= $content;

	return $rendered_content;
}

if( !function_exists( 'blockopts_gutenberg_filter' ) ){
	add_action( 'init', 'blockopts_gutenberg_filter' );
	function blockopts_gutenberg_filter(){ 
		if( !is_admin() ){
			add_filter( 'the_content', 'blockopts_gutenberg_callback', 8 );
		}
	}
}

if( !function_exists( 'blockopts_block_options_callback' ) ){
	add_filter( 'blockopts_block_options', 'blockopts_block_options_callback', 10, 3 );
	function blockopts_block_options_callback( $block, $attr, $tag ){
		if( isset( $attr['blockOpts'] ) && !empty( $attr['blockOpts'] ) ){
			global $block_options;
			$blockOpts = $attr['blockOpts'];

			//wrap blocks that doesn't support custom class names
			//add filter for block developers
			$blocklist = apply_filters( 'block_options_wrapped', array( 'html' ) );
			if( is_array( $tag ) && isset( $tag['block_name'] ) && in_array( $tag['block_name'], $blocklist ) ){
				$wrap_start = '<div class="';
					if( isset( $blockOpts['devices'] ) ){
						$wrap_start .= ' extendedwopts-'. $blockOpts['devices'];
					}
					if( isset( $blockOpts['desktop'] ) && 'on' == $blockOpts['desktop'] ){
						$wrap_start .= ' extendedwopts-desktop';
					}
					if( isset( $blockOpts['tablet'] ) && 'on' == $blockOpts['tablet'] ){
						$wrap_start .= ' extendedwopts-tablet';
					}
					if( isset( $blockOpts['mobile'] ) && 'on' == $blockOpts['mobile'] ){
						$wrap_start .= ' extendedwopts-mobile';
					}
				$wrap_start .= '">';
				$wrap_end = '</div>';

				//wrap block
				$block = $wrap_start . $block . $wrap_end;
			}

			//login state
			if( 'activate' == $block_options['state'] ){
				if( isset( $blockOpts['state'] ) && !empty( $blockOpts['state'] ) ){
					//do state action here
					if( $blockOpts['state'] == 'out' && is_user_logged_in() ){
						return false;
					}else if( $blockOpts['state'] == 'in' && !is_user_logged_in() ){
						return false;
					}
				}
			}
			
			//display logic
			if( 'activate' == $block_options['logic'] ){
				if( isset( $blockOpts['logic'] ) && !empty( $blockOpts['logic'] ) ){
					//do widget logic
					$logic = stripslashes( trim( $blockOpts['logic'] ) );

					//allow override filters
	                $logic = apply_filters( 'widget_options_logic_override', $logic );
	                $logic = apply_filters( 'extended_widget_options_logic_override', $logic );
	                $logic = apply_filters( 'block_options_logic_override', $logic );
	                if ( $logic === false ){
	                    return false;
	                }
	                if ( $logic === true ){
	                    return $block;
	                }
	                if ( stristr($logic,"return")===false ){
	                    $logic="return (" . $logic . ");";
	                }
	                if ( !eval( $logic ) ){
	                    return false;
	                }
				}
			}
		}
		return $block;
	}
}

?>