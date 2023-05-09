<?php
/**
 * Load assets for our blocks.
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class EditorsKit_Render_Block {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Render_Block
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Render_Block();
		}
	}

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $url
	 */
	private $url;

	/**
	 * The Plugin version.
	 *
	 * @var string $version
	 */
	private $version;

	/**
	 * The Plugin version.
	 *
	 * @var string $_slug
	 */
	private $slug;

	/**
	 * The block attributes.
	 *
	 * @var string $_attributes
	 */
	private $attributes;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->version = EDITORSKIT_VERSION;
		$this->slug    = 'editorskit';
		$this->url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		if ( ! is_admin() ) {
			add_action( 'render_block', array( $this, 'render_block' ), 5, 2 );
		}

		add_filter( 'block_lab_get_block_attributes', array( $this, 'block_lab_get_block_attributes' ), 10, 3 );
	}

	/**
	 * Set block attributes.
	 *
	 * @param array $block The block data.
	 *
	 * @return array Returns the block attributes.
	 */
	private function block_attributes( $block ) {
		if ( isset( $block['attrs'] ) && isset( $block['attrs']['editorskit'] ) && is_array( $block['attrs'] ) ) {

			return $block['attrs']['editorskit'];
		}

		return array();
	}

	/**
	 * EditorsKit compatibility to old Block Options.
	 *
	 * @param array $block The block data.
	 *
	 * @return array Returns the block attributes.
	 */
	private function version_compatibility( $block ) {
		if ( isset( $block['attrs'] ) && isset( $block['attrs']['blockOpts'] ) && is_array( $block['attrs'] ) ) {
			$block_opts = $block['attrs']['blockOpts'];
			return array(
				'devices'        => false,
				// phpcs:ignore WordPress.PHP.YodaConditions
				'desktop'        => isset( $block_opts['devices'] ) && isset( $block_opts['desktop'] ) && ( ( $block_opts['devices'] === 'show' && $block_opts['desktop'] !== 'on' ) || ( $block_opts['devices'] === 'hide' && $block_opts['desktop'] === 'on' ) ) ? false : true,
				// phpcs:ignore WordPress.PHP.YodaConditions
				'tablet'         => isset( $block_opts['devices'] ) && isset( $block_opts['tablet'] ) && ( ( $block_opts['devices'] === 'show' && $block_opts['tablet'] !== 'on' ) || ( $block_opts['devices'] === 'hide' && $block_opts['tablet'] === 'on' ) ) ? false : true,
				// phpcs:ignore WordPress.PHP.YodaConditions
				'mobile'         => isset( $block_opts['devices'] ) && isset( $block_opts['mobile'] ) && ( ( $block_opts['devices'] === 'show' && $block_opts['mobile'] !== 'on' ) || ( $block_opts['devices'] === 'hide' && $block_opts['mobile'] === 'on' ) ) ? false : true,
				// phpcs:ignore WordPress.PHP.YodaConditions
				'loggedin'       => isset( $block_opts['state'] ) && ( $block_opts['state'] === 'out' && $block_opts['state'] !== 'in' ) ? false : true,
				// phpcs:ignore WordPress.PHP.YodaConditions
				'loggedout'      => isset( $block_opts['state'] ) && ( $block_opts['state'] === 'in' && $block_opts['state'] !== 'out' ) ? false : true,
				// phpcs:ignore WordPress.PHP.YodaConditions
				'acf_visibility' => isset( $block_opts['acf_visibility'] ) ? $block_opts['acf_visibility'] : '',
				// phpcs:ignore WordPress.PHP.YodaConditions
				'acf_field'      => isset( $block_opts['acf_field'] ) ? $block_opts['acf_field'] : '',
				// phpcs:ignore WordPress.PHP.YodaConditions
				'acf_condition'  => isset( $block_opts['acf_condition'] ) ? $block_opts['acf_condition'] : '',
				// phpcs:ignore WordPress.PHP.YodaConditions
				'acf_value'      => isset( $block_opts['acf_value'] ) ? $block_opts['acf_value'] : '',
				// phpcs:ignore WordPress.PHP.YodaConditions
				'logic'          => isset( $block_opts['logic'] ) ? $block_opts['logic'] : '',
				// phpcs:ignore WordPress.PHP.YodaConditions
			);
		}

		return $this->block_attributes( $block );
	}

	/**
	 * Set visibility based on user state.
	 *
	 * @param mixed $block_content The block content.
	 *
	 * @return mixed Returns the new block content.
	 */
	private function user_state_visibility( $block_content ) {

		if ( isset( $this->attributes['loggedin'] ) && ! $this->attributes['loggedin'] && is_user_logged_in() ) {
			return '';
		}

		if ( isset( $this->attributes['loggedout'] ) && ! $this->attributes['loggedout'] && ! is_user_logged_in() ) {
			return '';
		}

		return $block_content;
	}

	/**
	 * Set visibility based on custom display logic.
	 *
	 * @param mixed $block_content The block content.
	 *
	 * @return mixed Returns the new block content.
	 */
	private function display_logic( $block_content ) {
		if ( defined( 'EDITORSKIT_ALLOW_EVAL' ) && true === EDITORSKIT_ALLOW_EVAL ) {
			if ( isset( $this->attributes['logic'] ) && ! empty( $this->attributes['logic'] ) ) {
				// do display logic.
				$logic = stripslashes( trim( $this->attributes['logic'] ) );

				// allow override filters.
				$logic = apply_filters( 'editorskit_logic_override', $logic );
				$logic = apply_filters( 'block_options_logic_override', $logic );
				if ( false === $logic ) {
					return '';
				}

				if ( true === $logic ) {
					return $block_content;
				}

				if ( stristr( $logic, 'return' ) === false ) {
					$logic = 'return (' . html_entity_decode( $logic, ENT_COMPAT | ENT_HTML401 | ENT_QUOTES ) . ');';
				}

				// Ignore phpcs since warning is available as description on this feature.
				if ( ! eval( $logic ) ) { // phpcs:ignore
					return '';
				}
			}
		}

		return $block_content;
	}

	/**
	 * Set visibility based on ACF conditions.
	 *
	 * @param mixed $block_content The block content.
	 *
	 * @return mixed Returns the new block content.
	 */
	private function acf_visibility( $block_content ) {
		if ( isset( $this->attributes['acf_field'] ) && ! empty( $this->attributes['acf_field'] ) ) {
			$acf = get_field_object( $this->attributes['acf_field'] );
			if ( $acf && is_array( $acf ) ) {
				$acf_visibility = isset( $this->attributes['acf_visibility'] ) ? $this->attributes['acf_visibility'] : 'hide';
				switch ( $this->attributes['acf_condition'] ) {
					case 'equal':
						if ( isset( $acf['value'] ) ) {
							if ( 'show' === $acf_visibility && $acf['value'] === $this->attributes['acf_value'] ) {
								$hidden = false;
							} elseif ( 'show' === $acf_visibility && $acf['value'] !== $this->attributes['acf_value'] ) {
								$hidden = true;
							} elseif ( 'hide' === $acf_visibility && $acf['value'] === $this->attributes['acf_value'] ) {
								$hidden = true;
							} elseif ( 'hide' === $acf_visibility && $acf['value'] !== $this->attributes['acf_value'] ) {
								$hidden = false;
							}
						}
						break;

					case 'not_equal':
						if ( isset( $acf['value'] ) ) {
							if ( 'show' === $acf_visibility && $acf['value'] === $this->attributes['acf_value'] ) {
								$hidden = true;
							} elseif ( 'show' === $acf_visibility && $acf['value'] !== $this->attributes['acf_value'] ) {
								$hidden = false;
							} elseif ( 'hide' === $acf_visibility && $acf['value'] === $this->attributes['acf_value'] ) {
								$hidden = false;
							} elseif ( 'hide' === $acf_visibility && $acf['value'] !== $this->attributes['acf_value'] ) {
								$hidden = true;
							}
						}
						break;

					case 'contains':
						if ( isset( $acf['value'] ) ) {
							if ( 'show' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) !== false ) {
								$hidden = false;
							} elseif ( 'show' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) === false ) {
								$hidden = true;
							} elseif ( 'hide' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) !== false ) {
								$hidden = true;
							} elseif ( 'hide' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) === false ) {
								$hidden = false;
							}
						}
						break;

					case 'not_contains':
						if ( isset( $acf['value'] ) ) {
							if ( 'show' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) !== false ) {
								$hidden = true;
							} elseif ( 'show' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) === false ) {
								$hidden = false;
							} elseif ( 'hide' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) !== false ) {
								$hidden = false;
							} elseif ( 'hide' === $acf_visibility && strpos( $acf['value'], $this->attributes['acf_value'] ) === false ) {
								$hidden = true;
							}
						}
						break;

					case 'empty':
						if ( 'show' === $acf_visibility && empty( $acf['value'] ) ) {
							$hidden = false;
						} elseif ( 'show' === $acf_visibility && ! empty( $acf['value'] ) ) {
							$hidden = true;
						} elseif ( 'hide' === $acf_visibility && empty( $acf['value'] ) ) {
							$hidden = true;
						} elseif ( 'hide' === $acf_visibility && ! empty( $acf['value'] ) ) {
							$hidden = false;
						}
						break;

					case 'not_empty':
						if ( 'show' === $acf_visibility && empty( $acf['value'] ) ) {
							$hidden = true;
						} elseif ( 'show' === $acf_visibility && ! empty( $acf['value'] ) ) {
							$hidden = false;
						} elseif ( 'hide' === $acf_visibility && empty( $acf['value'] ) ) {
							$hidden = false;
						} elseif ( 'hide' === $acf_visibility && ! empty( $acf['value'] ) ) {
							$hidden = true;
						}
						break;

					default:
						$hidden = false;
						break;
				}

				// //do return to bypass other conditions
				$hidden = apply_filters( 'editorskit_visibility_acf', $hidden );

				if ( $hidden ) {
					return '';
				}
			}
		}

		return $block_content;
	}

	/**
	 * Set Media and Text Block link.
	 *
	 * @param mixed $block_content The block content.
	 * @param array $block The block data.
	 *
	 * @return mixed Returns the new block content.
	 */
	private function media_text_link( $block_content, $block ) {
		if ( isset( $block['blockName'] ) && 'core/media-text' === $block['blockName'] ) {
			$attributes = $block['attrs'];
			if ( isset( $attributes['href'] ) && ! empty( $attributes['href'] ) ) {
				$linked = '<a href="' . esc_url( $attributes['href'] ) . '" class="editorskit-media-text-link"';
				$rel    = ' rel="';

				if ( isset( $attributes['linkTarget'] ) && '_blank' === $attributes['linkTarget'] ) {
					$linked .= ' target="_blank"';
					$rel    .= ' noreferrer noopener';
				}

				if ( isset( $attributes['linkNoFollow'] ) && $attributes['linkNoFollow'] ) {
					$rel .= ' nofollow';
				}

				if ( isset( $attributes['linkSponsored'] ) && $attributes['linkSponsored'] ) {
					$rel .= ' sponsored';
				}

				$rel    .= '"';
				$linked .= $rel;

				$linked .= '>';

				if ( isset( $attributes['linkFullBlock'] ) && $attributes['linkFullBlock'] ) {
					$block_content = $linked . $block_content . '</a>';
				} else {
					if ( preg_match_all( '/<figure class="wp-block-media-text__media"[^>]*>(.*?)<\/figure[^>]*>/', $block_content, $figure ) ) {
						$linked       .= $figure[0][0];
						$linked       .= '</a>';
						$block_content = str_replace( $figure[0], $linked, $block_content );
					}
				}
			}
		}

		return $block_content;
	}

	/**
	 * Block link.
	 *
	 * @param mixed $block_content The block content.
	 * @param array $block The block data.
	 *
	 * @return mixed Returns the new block content.
	 */
	private function render_link_toolbar( $block_content, $block ) {
		if ( isset( $block['blockName'] ) && ( in_array( $block['blockName'], array( 'core/group', 'core/column', 'core/cover' ) ) ) ) {
			$attributes = $block['attrs'];

			if ( isset( $attributes['href'] ) && ! empty( $attributes['href'] ) ) {
				$linked = '<a href="' . esc_attr( $attributes['href'] ) . '" class="editorskit-block-link"';
				$rel    = ' rel="';

				if ( isset( $attributes['opensInNewTab'] ) && $attributes['opensInNewTab'] ) {
					$linked .= ' target="_blank"';
					$rel    .= ' noreferrer noopener';
				}

				if ( isset( $attributes['linkNoFollow'] ) && $attributes['linkNoFollow'] ) {
					$rel .= ' nofollow';
				}

				if ( isset( $attributes['linkSponsored'] ) && $attributes['linkSponsored'] ) {
					$rel .= ' sponsored';
				}

				$rel    .= '"';
				$linked .= $rel;

				$linked .= '></a>';

				$reg   = '~(.*)</div>~su';
				$subst = '${1}' . $linked . '</div>';

				$block_content = preg_replace( $reg, $subst, $block_content );
			}
		}

		return $block_content;
	}

	/**
	 * Render block.
	 *
	 * @param mixed $block_content The block content.
	 * @param array $block The block data.
	 *
	 * @return mixed Returns the new block content.
	 */
	public function render_block( $block_content, $block ) {
		$this->attributes = $this->block_attributes( $block );

		// override attributes if still not migrated via editor.
		if ( ! isset( $this->attributes['migrated'] ) || ( isset( $this->attributes['migrated'] ) && ! $this->attributes['migrated'] ) ) {
			$this->attributes = $this->version_compatibility( $block );
		}

		$block_content = $this->user_state_visibility( $block_content );
		$block_content = $this->display_logic( $block_content );

		if ( class_exists( 'ACF' ) ) {
			$block_content = $this->acf_visibility( $block_content );
		}

		// Media Text Block Link.
		$block_content = $this->media_text_link( $block_content, $block );

		// Add Block Link.
		$block_content = $this->render_link_toolbar( $block_content, $block );

		return $block_content;
	}

	/**
	 * BlockLab plugin compatibility.
	 *
	 * @param array $attributes The block attributes.
	 * @param array $block      The block data.
	 *
	 * @return array Returns the new block attributes.
	 */
	public function block_lab_get_block_attributes( $attributes, $block ) {

		if ( ! isset( $attributes['editorskit'] ) ) {
			$attributes['editorskit'] = array(
				'type' => 'object',
			);
		}

		return $attributes;
	}

}

EditorsKit_Render_Block::register();
