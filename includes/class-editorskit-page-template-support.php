<?php
/**
 * Add theme support for template body class
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// @codingStandardsIgnoreStart
/*
	add_theme_support('editorskit-template-block-sizes', array(
		'page-templates/landing.php' => array(
			'default' 	=> '500px',
			'wide' 		=> '900px',
			'full' 		=> '1200px',
		)
	));

	add_theme_support('editorskit-genesis-layout-block-sizes', array(
		'content-sidebar' => array(
			'default' 	=> array(
								'post' 	=> '700px',
								'page' 	=> '800px',
							),
			'wide' 		=> '900px',
			'full' 		=> '1200px',
		),
	));
 */
// @codingStandardsIgnoreEnd

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class EditorsKit_Page_Template_Support {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Page_Template_Support
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Page_Template_Support();
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
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->version = EDITORSKIT_VERSION;
		$this->slug    = 'editorskit';
		$this->url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_action( 'after_setup_theme', array( $this, 'theme_support' ), 100 );
	}

	/**
	 * Support custom theme support for editorskit-template-block-sizes
	 *
	 * @access public
	 */
	public function theme_support() {

		if ( current_theme_supports( 'editorskit-template-block-sizes' ) ) {
			$theme_support = get_theme_support( 'editorskit-template-block-sizes' );
			if ( $theme_support ) {
				add_filter( 'admin_body_class', array( $this, 'body_class_support' ) );

				if ( is_array( $theme_support ) && ! empty( $theme_support ) ) {
					global $pagenow;

					if ( ! empty( $pagenow ) && in_array( $pagenow, array( 'post-new.php', 'post.php', 'edit.php' ) ) ) { // phpcs:ignore
						add_action( 'admin_head', array( $this, 'template_width_css' ), 100 );
					}
				}
			}
		}

		if ( current_theme_supports( 'editorskit-genesis-layout-block-sizes' ) ) {
			$theme_support = get_theme_support( 'editorskit-genesis-layout-block-sizes' );
			if ( $theme_support ) {
				add_filter( 'admin_body_class', array( $this, 'genesis_layout_support' ) );

				if ( is_array( $theme_support ) && ! empty( $theme_support ) ) {
					global $pagenow;

					if ( ! empty( $pagenow ) && in_array( $pagenow, array( 'post-new.php', 'post.php', 'edit.php' ) ) ) { // phpcs:ignore
						add_action( 'admin_head', array( $this, 'layout_width_css' ), 100 );
					}
				}
			}
		}
	}

	/**
	 * Add custom body class.
	 *
	 * @param string $classes The body classes.
	 *
	 * @return mixed Returns update body class.
	 */
	public function body_class_support( $classes ) {
		global $post;

		$classes .= 'editorskit-body-class-on ';

		if ( isset( $post->ID ) ) {
			$template = str_replace( array( '.', '/' ), '-', get_page_template_slug( $post->ID ) );

			if ( empty( $template ) ) {
				$template = 'default';
			}

			$classes .= $post->post_type . '-template-' . $template . ' ';
		}

		return $classes;
	}

	/**
	 * Add custom css for template width.
	 */
	public function template_width_css() {
		global $post;

		if ( ! isset( $post->ID ) ) {
			return;
		}

		wp_register_style(
			'editorskit-body-class',
			false,
			array(),
			$this->version
		);
		wp_enqueue_style( 'editorskit-body-class' );

		$theme_support = get_theme_support( 'editorskit-template-block-sizes' );
		$selector      = ' .editor-styles-wrapper .wp-block';
		$style         = '';

		foreach ( $theme_support as $templates ) {
			if ( is_array( $templates ) && ! empty( $templates ) ) {
				foreach ( $templates as $template => $sizes ) {
					$block = '.' . $post->post_type . '-template-' . str_replace( array( '.', '/' ), '-', $template ) . $selector;

					if ( is_array( $sizes ) && ! empty( $sizes ) ) {
						foreach ( $sizes as $size => $width ) {
							if ( 'default' === $size ) {
								$style .= $block . '{ max-width: ' . $width . '; }';
							} else {
								$style .= $block . '[data-align="' . $size . '"]{ max-width: ' . $width . '; }';
							}
						}
					}
				}
			}
		}

		wp_add_inline_style( 'editorskit-body-class', $style );
	}

	/**
	 * Support for Genesis layouts.
	 *
	 * @param string $classes The body classes.
	 *
	 * @return string Returns new body class.
	 */
	public function genesis_layout_support( $classes ) {
		global $post;

		$classes .= 'editorskit-genesis-body-class-on ';

		if ( isset( $post->ID ) && function_exists( 'genesis_get_custom_field' ) ) {
			$layout = genesis_get_custom_field( '_genesis_layout', $post->ID );

			if ( empty( $layout ) ) {
				$layout = 'default-layout';
			}

			$classes .= $post->post_type . '-layout-' . $layout . ' ';
		}

		return $classes;
	}

	/**
	 * Add custom css for Genesis layout width.
	 */
	public function layout_width_css() {
		global $post;
		if ( ! isset( $post->ID ) ) {
			return;
		}

		wp_register_style(
			'editorskit-genesis-body-class',
			false,
			array(),
			$this->version
		);
		wp_enqueue_style( 'editorskit-genesis-body-class' );

		$theme_support = get_theme_support( 'editorskit-genesis-layout-block-sizes' );
		$selector      = ' .editor-styles-wrapper .wp-block';
		$style         = '';

		foreach ( $theme_support as $layouts ) {
			if ( is_array( $layouts ) && ! empty( $layouts ) ) {
				foreach ( $layouts as $layout => $sizes ) {
					if ( is_array( $sizes ) && ! empty( $sizes ) ) {
						foreach ( $sizes as $size => $width ) {
							if ( is_array( $width ) ) {
								foreach ( $width as $type => $w ) {
									$block = '.' . $type . '-layout-' . $layout . $selector;

									if ( 'default' === $size ) {
										$style .= $block . '{ max-width: ' . $w . '; }';
									} else {
										$style .= $block . '[data-align="' . $size . '"]{ max-width: ' . $w . '; }';
									}
								}
							} else {
								$block = '.' . $post->post_type . '-layout-' . $layout . $selector;

								if ( 'default' === $size ) {
									$style .= $block . '{ max-width: ' . $width . '; }';
								} else {
									$style .= $block . '[data-align="' . $size . '"]{ max-width: ' . $width . '; }';
								}
							}
						}
					}
				}
			}
		}

		wp_add_inline_style( 'editorskit-genesis-body-class', $style );
	}

}

EditorsKit_Page_Template_Support::register();
