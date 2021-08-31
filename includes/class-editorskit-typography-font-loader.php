<?php
/**
 * Load google fonts and CSS styling
 *
 * @package EditorsKit
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load google fonts and custom CSS
 *
 * @since 1.0
 */
class EditorsKit_Typography_Font_Loader {
	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Typography_Font_Loader
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Typography_Font_Loader();
		}
	}

	/**
	 * The Constructor.
	 */
	public function __construct() {
		$is_enabled = get_option( 'editorskit_typography_enabled', 1 );

		if ( $is_enabled ) {
			add_filter( 'body_class', array( $this, 'body_class' ) );
			add_filter( 'admin_body_class', array( $this, 'body_class' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'fonts_loader' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'fonts_loader' ) );
			add_action( 'wp_resource_hints', array( $this, 'resource_hints' ), 10, 2 );
		}
	}

	/**
	 * Add body class when meta exists
	 *
	 * @param array $classes The body classes.
	 *
	 * @return array Returns the new body classes.
	 */
	public function body_class( $classes ) {
		global $post;
		if ( isset( $post->ID ) ) {
			$meta    = get_post_meta( $post->ID, '_editorskit_typography_data', true );
			$options = get_option( 'editorskit_typography_default' );
			if ( $meta && isset( $meta['meta'] ) && isset( $meta['meta']['disabled'] ) ) {
				return $classes;
			}

			if ( is_admin() ) {
				$classes = explode( ' ', $classes );
			}

			if ( $meta || ( ! empty( $options ) && '{}' !== $options ) ) {
				$classes[] = 'ek-has-typography';
			}

			if ( $meta && isset( $meta['meta'] ) ) {
				$id   = $meta['meta']['id'];
				$meta = isset( $meta['meta']['data'] ) ? $meta['meta']['data'] : $meta['meta'];
			} elseif ( ! $meta && ! empty( $options ) ) {
				$meta = json_decode( $options, true );
				if ( isset( $meta['meta'] ) ) {
					$id   = ( isset( $meta['meta']['itemSelected'] ) ) ? $meta['meta']['itemSelected'] : '';
					$meta = $meta['meta'];
				}
			}

			if ( $meta && ! isset( $meta['type'] ) ) {
				$custom_fonts = json_decode( get_option( 'editorskit_typography_custom' ), true );
				$is_custom    = true;

				if ( isset( $custom_fonts[ $id ] ) ) {
					$meta = $custom_fonts[ $id ];
				}
			}

			if ( ! empty( $meta ) ) {
				// Add body classes based on default fonts.
				if ( isset( $meta['content'] ) ) {
					$content = $meta['content'];

					if ( isset( $content['font-family'] ) ) {
						$classes[] = 'ek-has-content-font-family';
					}

					if ( isset( $content['font-size'] ) ) {
						$classes[] = 'ek-has-content-font-size';
					}

					if ( isset( $content['line-height'] ) ) {
						$classes[] = 'ek-has-content-line-height';
					}

					if ( isset( $content['letter-spacing'] ) ) {
						$classes[] = 'ek-has-content-letter-spacing';
					}

					if ( isset( $content['body'] ) ) {
						$classes[] = 'ek-has-body-font-family';
					}
				}

				if ( isset( $meta['heading'] ) ) {
					$heading = $meta['heading'];

					if ( isset( $heading['font-family'] ) ) {
						$classes[] = 'ek-has-header-font-family';
					}

					for ( $i = 1; $i < 7; $i ++ ) {
						if ( isset( $heading[ 'H' . $i ] ) ) {
							$inner_heading = $heading[ 'H' . $i ];

							if ( isset( $inner_heading['font-size'] ) ) {
								$classes[] = 'ek-has-H' . $i . '-font-size';
							}

							if ( isset( $inner_heading['font-weight'] ) ) {
								$classes[] = 'ek-has-H' . $i . '-font-weight';
							}

							if ( isset( $inner_heading['line-height'] ) ) {
								$classes[] = 'ek-has-H' . $i . '-line-height';
							}

							if ( isset( $inner_heading['letter-spacing'] ) ) {
								$classes[] = 'ek-has-H' . $i . '-letter-spacing';
							}

							if ( isset( $inner_heading['text-transform'] ) ) {
								$classes[] = 'ek-has-H' . $i . '-text-transform';
							}

							if ( isset( $inner_heading['title'] ) && $inner_heading['title'] ) {
								$classes[] = 'ek-apply-H' . $i . '-to-title';
							}
						}
					}
				}

				if ( isset( $meta['button'] ) ) {
					$button = $meta['button'];

					if ( isset( $button['font-family'] ) ) {
						$classes[] = 'ek-has-button-font-family';
					}

					if ( isset( $button['font-weight'] ) ) {
						$classes[] = 'ek-has-button-font-weight';
					}

					if ( isset( $button['font-size'] ) ) {
						$classes[] = 'ek-has-button-font-size';
					}

					if ( isset( $button['line-height'] ) ) {
						$classes[] = 'ek-has-button-line-height';
					}

					if ( isset( $button['letter-spacing'] ) ) {
						$classes[] = 'ek-has-button-letter-spacing';
					}

					if ( isset( $button['text-transform'] ) ) {
						$classes[] = 'ek-has-button-text-transform';
					}
				}
			}

			if ( is_admin() ) {
				$classes = implode( ' ', $classes );
			}
		}

		return $classes;
	}

	/**
	 * Custom frontend CSS.
	 *
	 * @access public
	 */
	public function fonts_loader() {
		global $post;

		if ( $post && isset( $post->ID ) ) {
			$meta      = get_post_meta( $post->ID, '_editorskit_typography_data', true );
			$options   = get_option( 'editorskit_typography_default' );
			$is_custom = false;
			$id        = null;
			$style     = '<style id="editorskit-typography-inline-css"></style>';

			if ( $meta && isset( $meta['meta'] ) && isset( $meta['meta']['disabled'] ) ) {
				echo wp_kses( $style, array( 'style' ) );

				return false;
			}

			if ( $meta && isset( $meta['meta'] ) ) {
				$id   = $meta['meta']['id'];
				$meta = isset( $meta['meta']['data'] ) ? $meta['meta']['data'] : $meta['meta'];
			} elseif ( ! $meta && ! empty( $options ) ) {
				$meta = json_decode( $options, true );

				if ( isset( $meta['itemSelected'] ) ) {
					$id = $meta['itemSelected'];
				}

				if ( isset( $meta['meta'] ) ) {
					$meta = $meta['meta'];
				}
			}

			if ( $meta && ! isset( $meta['type'] ) ) {
				$custom_fonts = json_decode( get_option( 'editorskit_typography_custom' ), true );
				$is_custom    = true;

				if ( isset( $custom_fonts[ $id ] ) ) {
					// print_r($meta );
					$meta = $custom_fonts[ $id ];
				}
			}

			if ( $meta ) {
				$this->fonts_loader_default( $meta, $is_custom );
			} else {
				$this->block_level_fonts();
				echo $style;
			}
		}
	}

	/**
	 * Wrap font family with quotes if custom.
	 *
	 * @access private
	 */
	private function wrap_font_family( $family, $is_custom ) {
		if ( $is_custom ) {
			return "'" . $family . "'";
		}

		return $family;
	}

	/**
	 * Default fonts loader.
	 *
	 * @param array $font_data Font data.
	 * @param bool  $is_custom Custom flag.
	 *
	 * @access public
	 */
	public function fonts_loader_default( $font_data, $is_custom = false ) {

		$variables    = '';
		$google_fonts = '';

		if ( isset( $font_data['content'] ) ) {
			$content = $font_data['content'];

			if ( isset( $content['font-family'] ) ) {
				$variables .= '--ek-font-family: ' . $this->wrap_font_family( $font_data['content']['font-family'], $is_custom ) . ';';
			}

			if ( isset( $content['font-weight'] ) ) {
				$variables .= '--ek-font-weight: ' . $font_data['content']['font-weight'] . ';';
			}

			if ( isset( $content['font-size'] ) ) {
				$variables .= '--ek-font-size: ' . $font_data['content']['font-size'] . $font_data['content']['font-size-unit'] . ';';
			}

			if ( isset( $content['line-height'] ) ) {
				$variables .= '--ek-line-height: ' . $font_data['content']['line-height'] . $font_data['content']['line-height-unit'] . ';';
			}

			if ( isset( $content['letter-spacing'] ) ) {
				$variables .= '--ek-letter-spacing: ' . $font_data['content']['letter-spacing'] . $font_data['content']['letter-spacing-unit'] . ';';
			}
		}

		if ( isset( $font_data['heading'] ) ) {
			$heading = $font_data['heading'];

			if ( isset( $heading['font-family'] ) ) {
				$variables .= '--ek-heading-font-family: ' . $this->wrap_font_family( $heading['font-family'], $is_custom ) . ';';
			}

			if ( isset( $heading['font-weight'] ) ) {
				$variables .= '--ek-heading-font-weight: ' . $heading['font-weight'] . ';';
			}

			for ( $i = 1; $i < 7; $i ++ ) {
				if ( isset( $heading[ 'H' . $i ] ) ) {
					$inner_heading = $heading[ 'H' . $i ];

					if ( isset( $inner_heading['font-weight'] ) ) {
						$variables .= '--ek-H' . $i . '-font-weight: ' . $inner_heading['font-weight'] . ';';
					}

					if ( isset( $inner_heading['font-size'] ) ) {
						$variables .= '--ek-H' . $i . '-font-size: ' . $inner_heading['font-size'] . $inner_heading['font-size-unit'] . ';';
					}

					if ( isset( $inner_heading['line-height'] ) ) {
						$variables .= '--ek-H' . $i . '-line-height: ' . $inner_heading['line-height'] . $inner_heading['line-height-unit'] . ';';
					}

					if ( isset( $inner_heading['letter-spacing'] ) ) {
						$variables .= '--ek-H' . $i . '-letter-spacing: ' . $inner_heading['letter-spacing'] . $inner_heading['letter-spacing-unit'] . ';';
					}

					if ( isset( $inner_heading['text-transform'] ) ) {
						$variables .= '--ek-H' . $i . '-text-transform: ' . $inner_heading['text-transform'] . ';';
					}
				}
			}
		}

		if ( isset( $font_data['button'] ) ) {
			$button = $font_data['button'];

			if ( isset( $button['font-family'] ) ) {
				$variables .= '--ek-button-font-family: ' . $this->wrap_font_family( $button['font-family'], $is_custom ) . ';';
			}

			if ( isset( $button['font-weight'] ) ) {
				$variables .= '--ek-button-font-weight: ' . $button['font-weight'] . ';';
			}

			if ( isset( $button['font-size'] ) ) {
				$variables .= '--ek-button-font-size: ' . $button['font-size'] . $button['font-size-unit'] . ';';
			}

			if ( isset( $button['line-height'] ) ) {
				$variables .= '--ek-button-line-height: ' . $button['line-height'] . $button['line-height-unit'] . ';';
			}

			if ( isset( $button['letter-spacing'] ) ) {
				$variables .= '--ek-button-letter-spacing: ' . $button['letter-spacing'] . $button['letter-spacing-unit'] . ';';
			}

			if ( isset( $button['text-transform'] ) ) {
				$variables .= '--ek-button-text-transform: ' . $button['text-transform'] . ';';
			}
		}

		if ( isset( $font_data['fonts'] ) ) {
			if ( $is_custom ) {
				foreach ( $font_data['fonts'] as $font_key => $font_value ) {
					$google_fonts .= str_replace( ' ', '+', $font_value['name'] );

					if ( isset( $font_value['weights'] ) && ! empty( $font_value['weights'] ) ) {
						$google_fonts .= ':' . $font_value['weights'];
					}

					$google_fonts .= '|';
				}
			} else {
				$google_fonts = implode( '|', $font_data['fonts'] );
			}
		}

		// Block level typography.
		$blocks_typography = get_post_meta( get_the_ID(), '_editorskit_blocks_typography', true );
		if ( $blocks_typography ) {
			$blocks_typography = explode( '|', $blocks_typography );
			$blocks_typography = array_filter( array_unique( $blocks_typography ) );

			$google_fonts = explode( '|', $google_fonts );

			// merge.
			$google_fonts = array_merge( $google_fonts, $blocks_typography );
			$google_fonts = array_filter( array_unique( $google_fonts ) );

			if ( defined( 'PHP_VERSION' ) && version_compare( PHP_VERSION, '7.4.0', '>' ) ) {
				$google_fonts = implode( '|', $google_fonts );
			} else {
				$google_fonts = implode( $google_fonts, '|' );
			}
		}

		if ( ! empty( $google_fonts ) ) {
			if ( $is_custom ) {
				wp_enqueue_style(
					'editorskit-typography-fonts',
					add_query_arg( array( 'family' => rtrim( $google_fonts, '|' ) ), '//fonts.googleapis.com/css' ),
					array(),
					EDITORSKIT_VERSION
				);
			} else {
				wp_enqueue_style(
					'editorskit-typography-fonts',
					add_query_arg( array( 'family' => $google_fonts ), '//fonts.googleapis.com/css' ),
					array(),
					EDITORSKIT_VERSION
				);
			}
		} ?>
		<style id="editorskit-typography-inline-css">
			<?php
			if ( $variables ) {
				echo sanitize_text_field( ':root{' . $variables . '}' );
			}
			?>
		</style>
		<?php
	}

	/**
	 * Block Level Fonts
	 *
	 * @access public
	 */
	public function block_level_fonts() {
		global $post;
		if ( isset( $post->ID ) ) {
			$meta = get_post_meta( $post->ID, '_editorskit_blocks_typography', true );
			if ( $meta ) {
				$meta         = explode( '|', $meta );
				$meta         = array_filter( array_unique( $meta ) );
				$google_fonts = implode( $meta, '|' );

				wp_enqueue_style(
					'editorskit-typography-fonts',
					add_query_arg( array( 'family' => $google_fonts ), '//fonts.googleapis.com/css' ),
					array(),
					EDITORSKIT_VERSION
				);
			}
		}
	}


	/**
	 * Preconnect Google Fonts for faster loading.
	 *
	 * @param array  $urls URL array.
	 * @param string $relation_type Relation type.
	 *
	 * @access public
	 */
	public function resource_hints( $urls, $relation_type ) {
		if ( wp_style_is( 'editorskit-typography-fonts', 'queue' ) && 'preconnect' === $relation_type ) {
			$urls[] = array(
				'href' => 'https://fonts.gstatic.com',
				'crossorigin',
			);
		}

		return $urls;
	}
}

EditorsKit_Typography_Font_Loader::register();
