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
	add_action( 'init', 'blockopts_editor_assets', 999 );
	function blockopts_editor_assets() {
		global $block_options;
		$js_dir  = BLOCKOPTS_PLUGIN_URL . 'dist/';
		$css_dir = BLOCKOPTS_PLUGIN_URL . 'dist/';

		wp_enqueue_script(
			'gutenberg-blockopts',
			$js_dir .'blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-date', 'wp-editor' ), // Dependencies, defined above.
			filemtime( BLOCKOPTS_PLUGIN_DIR .'dist/blocks.build.js' )
		);

		wp_enqueue_style(
			'gutenberg-blockopts-css', // Handle.
			$css_dir .'blocks.editor.build.css', // Block editor CSS.
			array(), // Dependency to include the CSS after it.
			filemtime( BLOCKOPTS_PLUGIN_DIR .'dist/blocks.editor.build.css' ) // filemtime — Gets file modification time.
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
		}else if( $block_name == 'block' && isset( $attributes['ref'] ) && !empty( $attributes['ref'] ) ){
			$reusable = apply_filters( 'blockopts_block_options', $opening_tag, $attributes, array( 'tag' => $opening_tag , 'block_name' => $block_name ) );
			//if not empty
			if( !empty( $reusable ) ){
				$res = blockopts_get_reusable( $attributes['ref'] ); 
				if( !empty( $res ) && isset( $res[0] ) && isset( $res[0]->post_content ) ){
					$rendered_content .= blockopts_gutenberg_callback( $res[0]->post_content );
				}
			}
		}
	}

	// Append remaining unmatched content.
	$rendered_content .= $content;

	return $rendered_content;
}

if( !function_exists( 'blockopts_remove_placeholder' ) ){
	function blockopts_remove_placeholder( $content ){
		return str_replace( 'blockopts:::placeholder', 'wp:columns', $content );
	}
}

if( !function_exists( 'blockopts_gutenberg_filter' ) ){
	add_action( 'init', 'blockopts_gutenberg_filter' );
	function blockopts_gutenberg_filter(){ 
		if( !is_admin() ){
			add_filter( 'the_content', 'blockopts_gutenberg_callback', 6 );
			add_filter( 'the_content', 'blockopts_remove_placeholder', 6 );
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

			//ACF
			if( isset( $block_options['acf'] ) && 'activate' == $block_options['acf'] ){
				if( isset( $blockOpts['acf_field'] ) && !empty( $blockOpts['acf_field'] ) ){
					$hidden     = false;
					$acf = get_field_object( $blockOpts['acf_field'] );
					if( $acf && is_array( $acf ) ){
						$acf_visibility    = isset( $blockOpts['acf_visibility'] ) ? $blockOpts['acf_visibility'] : 'hide';
						switch ( $blockOpts['acf_condition'] ) {
							case 'equal':
								if( isset( $acf['value'] ) ){
									if( 'show' == $acf_visibility && $acf['value'] == $blockOpts['acf_value'] ){
										$hidden = false;
									}else if( 'show' == $acf_visibility && $acf['value'] != $blockOpts['acf_value'] ){
										$hidden = true;
									}else if( 'hide' == $acf_visibility && $acf['value'] == $blockOpts['acf_value'] ){
										$hidden = true;
									}else if( 'hide' == $acf_visibility && $acf['value'] != $blockOpts['acf_value'] ){
										$hidden = false;
									}
								}
							break;

							case 'not_equal':
								if( isset( $acf['value'] ) ){
									if( 'show' == $acf_visibility && $acf['value'] == $blockOpts['acf_value'] ){
										$hidden = true;
									}else if( 'show' == $acf_visibility && $acf['value'] != $blockOpts['acf_value'] ){
										$hidden = false;
									}else if( 'hide' == $acf_visibility && $acf['value'] == $blockOpts['acf_value'] ){
										$hidden = false;
									}else if( 'hide' == $acf_visibility && $acf['value'] != $blockOpts['acf_value'] ){
										$hidden = true;
									}
								}
							break;

							case 'contains':
								if( isset( $acf['value'] ) ){
									if( 'show' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) !== false ){
										$hidden = false;
									}else if( 'show' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) === false ){
										$hidden = true;
									}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) !== false ){
										$hidden = true;
									}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) === false ){
										$hidden = false;
									}
								}
							break;

							case 'not_contains':
								if( isset( $acf['value'] ) ){
									if( 'show' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) !== false ){
										$hidden = true;
									}else if( 'show' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) === false ){
										$hidden = false;
									}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) !== false ){
										$hidden = false;
									}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $blockOpts['acf_value'] ) === false ){
										$hidden = true;
									}
								}
							break;

							case 'empty':
								if( 'show' == $acf_visibility && empty( $acf['value'] ) ){
									$hidden = false;
								}else if( 'show' == $acf_visibility && !empty( $acf['value'] ) ){
									$hidden = true;
								}elseif( 'hide' == $acf_visibility && empty( $acf['value'] ) ){
									$hidden = true;
								}else if( 'hide' == $acf_visibility && !empty( $acf['value'] ) ){
									$hidden = false;
								}
							break;

							case 'not_empty':
								if( 'show' == $acf_visibility && empty( $acf['value'] ) ){
									$hidden = true;
								}else if( 'show' == $acf_visibility && !empty( $acf['value'] ) ){
									$hidden = false;
								}elseif( 'hide' == $acf_visibility && empty( $acf['value'] ) ){
									$hidden = false;
								}else if( 'hide' == $acf_visibility && !empty( $acf['value'] ) ){
									$hidden = true;
								}
							break;
							
							default:
								$hidden = false;
								break;
						}

						// //do return to bypass other conditions
			            $hidden = apply_filters( 'blockopts_visibility_acf', $hidden );
			            if( $hidden ){
			                return false;
			            }
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

			//run match on columns content
			if( $tag['block_name'] == 'columns' ){
				$block = blockopts_gutenberg_callback( str_replace( 'wp:columns', 'blockopts:::placeholder', $block ) );
			}
		}
		return $block;
	}
}

if( !function_exists( 'blockopts_api_acf' ) ){
	function blockopts_api_acf( $data ) {

		$fields = array();

		if ( function_exists( 'acf_get_field_groups' ) ) {
            $groups = acf_get_field_groups();
            if ( is_array( $groups ) ) {
                foreach ( $groups as $group ) {
                    $fields_group = acf_get_fields( $group );
                    if( !empty( $fields_group ) ){
                        foreach ( $fields_group as $k => $fg ) {
                               $fields[ $fg['key'] ] = $fg['label'];
                           }   
                    }
                }
            }
        }else{
            $groups = apply_filters( 'acf/get_field_groups', array() );
	        if ( is_array( $groups ) ) {
	            foreach ( $groups as $group ) {
	                $fields_group = apply_filters( 'acf/field_group/get_fields', array(), $group['id'] );
	                if( !empty( $fields_group ) ){
	                    foreach ( $fields_group as $k => $fg ) {
	                            $fields[ $fg['key'] ] = $fg['label'];
	                       }   
	                }
	            }
	        }
        }
        

		return (object)array_reverse( $fields ) ;
	}

	add_action( 'rest_api_init', function () {
		register_rest_route( 'block-options/v1', '/acf', array(
			'methods' => 'GET',
			'callback' => 'blockopts_api_acf',
		) );
	} );
}

?>