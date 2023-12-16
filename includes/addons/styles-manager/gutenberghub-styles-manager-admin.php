<?php
/**
 * Gutenberghub_Styles_Manager_Admin Class
 *
 * This class is responsible for adding a new post type inside the
 * "Styles Manager" admin page.
 *
 * @since 1.0.0
 * @package GutenberghubStylesManager
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Admin.
 */
class Gutenberghub_Styles_Manager_Admin {

	/**
	 * Post type Slug.
	 *
	 * @static
	 * @access public
	 * @var    string
	 */
	public static $post_type = 'gsm_styles';

	/**
	 * Constructor method.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_admin_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'load_block_editor_assets' ) );
	}

	/**
	 * Loads assets necessary for the block editor.
	 *
	 * @return void
	 */
	public function load_block_editor_assets() {

		$post = isset( $GLOBALS['post'] ) ? $GLOBALS['post'] : null;

		if ( is_null( $post ) || static::$post_type !== $post->post_type ) {
			return;
		}

		// Enqueue code editor and settings for manipulating the editor.
		$settings = wp_enqueue_code_editor( array( 'type' => 'text/css' ) );
		wp_enqueue_code_editor( array( 'type' => 'text/js' ) );

		// Bail out if user can't use code editor.
		if ( false === $settings ) {
			return;
		}

		// Enqueue WordPress code editor script.
		wp_enqueue_script( 'wp-code-editor' );

		wp_enqueue_script(
			'gutenberghub-gsm-manager',
			EDITORSKIT_PLUGIN_URL . 'build/styles-manager-addon-block.js',
			array(
				'lodash',
				'wp-element',
				'wp-api',
				'wp-components',
				'wp-data',
				'wp-core-data',
			),
			uniqid(),
			true
		);

		wp_localize_script(
			'gutenberghub-gsm-manager',
			'gutenberghubStylesManager',
			array(
				'stylesManagerUrl' => admin_url( 'admin.php?page=gutenberghub-styles-manager' ),
			)
		);
	}

	/**
	 * Loads necessary admin assets.
	 *
	 * @param string $hook_suffix - Current page hook.
	 *
	 * @return void
	 */
	public function load_admin_assets( $hook_suffix ) {
		if ( sprintf( 'editorskit_page_%1$s', Gutenberghub_Styles_Manager_Core::$menu_slug ) === $hook_suffix ) {
			wp_enqueue_script(
				'gutenberghub-gsm-admin',
				EDITORSKIT_PLUGIN_URL . 'build/styles-manager-addon-admin.js',
				array(
					'lodash',
					'wp-element',
					'wp-api',
					'wp-components',
					'wp-data',
					'wp-core-data',
					'wp-server-side-render',
				),
				uniqid(),
				true
			);

			wp_localize_script(
				'gutenberghub-gsm-admin',
				'gutenberghubStylesManager',
				array(
					'newPost'     => admin_url( 'post.php' ),
					'exportNonce' => wp_create_nonce( 'gsm-export' ),
					'importNonce' => wp_create_nonce( 'gsm-import' ),
					'createStyle' => add_query_arg(
						array(
							'post_type' => static::$post_type,
						),
						admin_url( 'post-new.php' )
					),
				)
			);

			wp_enqueue_style(
				'gutenberghub-gsm-admin',
				EDITORSKIT_PLUGIN_URL . 'build/styles-manager-addon-admin-style.build.css',
				array(
					'wp-components',
				),
				uniqid(),
			);

		}

	}

	/**
	 * Register the custom post type.
	 *
	 * @since 1.0.0
	 */
	public function register() {
		$labels = array(
			'name'           => _x( 'Styles', 'Post type general name', 'gutenberghub-styles-manager' ),
			'singular_name'  => _x( 'Style', 'Post type singular name', 'gutenberghub-styles-manager' ),
			'menu_name'      => _x( 'Styles Manager', 'Admin Menu text', 'gutenberghub-styles-manager' ),
			'name_admin_bar' => _x( 'Style', 'Add New on Toolbar', 'gutenberghub-styles-manager' ),
		);

		$args = array(
			'labels'          => $labels,
			'public'          => true,
			'show_in_menu'    => false,
			'capability_type' => 'post',
			'has_archive'     => true,
			'show_in_rest'    => true,
			'supports'        => array( 'title', 'editor', 'custom-fields' ),
			'menu_position'   => 20,
			'menu_icon'       => 'dashicons-admin-customizer',
			'template_lock'   => 'all',
			'template'        => array(
				array(
					'gutenberghub/block-style-previewer',
					array(
						'taxonomy'  => isset( $_GET['tax'] ) ? $_GET['tax'] : '',
						'blockName' => isset( $_GET['block'] ) ? str_replace( '___', '/', $_GET['block'] ) : '',
					),
					array(),
				),
			),
		);

		\register_setting(
			'general',
			'_ek_is_styles_manager_cpt_flashed',
			array(
				'default'      => false,
				'show_in_rest' => false,
				'type'         => 'boolean',
			)
		);

		register_post_type( static::$post_type, $args );

		// Adding necessary metadata.
		register_post_meta(
			static::$post_type,
			'gsm_css',
			array(
				'default'      => '',
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
				// 'sanitize_callback' => 'sanitize_text_field',
			)
		);

		register_post_meta(
			static::$post_type,
			'gsm_js',
			array(
				'default'      => '',
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
				// 'sanitize_callback' => 'sanitize_text_field',
			)
		);

		register_post_meta(
			static::$post_type,
			'gsm_active',
			array(
				'default'      => true,
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'boolean',
				// 'sanitize_callback' => 'sanitize_text_field',
			)
		);

		// Flushing rewrite rules if we haven't already to address the issue where
		// Custom Post Type redirects to 404 page.
		if ( false === get_option( '_ek_is_styles_manager_cpt_flashed' ) ) {
			// This is an expensive operation, so making sure that it only runs once.
			flush_rewrite_rules( false );
			update_option( '_ek_is_styles_manager_cpt_flashed', true );
		}

	}

}

new Gutenberghub_Styles_Manager_Admin();
