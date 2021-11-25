<?php
/**
 * Live previewer for editorskit
 *
 * @package   EditorsKit
 * @author    Zafar Kamal
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

/**
 * Handles all the live previewer assets loading
 */
class Editorskit_Live_Preview {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register' ) );
		add_action( 'admin_bar_menu', array( $this, 'load_responsive_options' ), 100, 1 );
		add_action( 'wp_enqueue_scripts', array( $this, 'load_assets' ) );
		add_action( 'body_class', array( $this, 'insert_previewer_class' ) );
	}

	/**
	 * Will merge editorskit previewer class.
	 *
	 * @param array $classes - body classes.
	 * @return array - body classes merged with editorskit previewer class.
	 */
	public function insert_previewer_class( $classes ) {

		if ( ! $this->is_editorskit_live_preview_sandbox() ) {
			$classes[] = 'editorskit-live-previewer';
		}

		return $classes;
	}

	/**
	 * Will check if the current post is editorskit live preview page.
	 *
	 * @return bool - True if live preview, otherwise false.
	 */
	public function is_editorskit_live_preview_sandbox() {

		$is_live_preview = get_query_var( 'editorskitsandbox', false );

		return 'true' === $is_live_preview;
	}

	/**
	 * All setup and assets should be registered here.
	 *
	 * @return void
	 */
	public function register() {

		global $wp;

		// Registering query variables.
		$wp->add_query_var( 'editorskitlivepreview' );
		$wp->add_query_var( 'editorskitpreviewdevice' );

		// Script that handles responsive previews.
		wp_register_script(
			'editorskit-live-preview',
			EDITORSKIT_PLUGIN_URL . 'scripts/editorskit-live-preview.js',
			array(),
			'initial',
			true
		);

		wp_register_style(
			'editorskit-live-preview',
			EDITORSKIT_PLUGIN_URL . 'styles/editorskit-live-preview.css',
			array(),
			'initial',
		);

	}

	/**
	 * All registered assets should be loaded here.
	 *
	 * @return void
	 */
	public function load_assets() {

		if ( ! is_admin() && is_preview() ) {
			wp_enqueue_script( 'editorskit-live-preview' );
			wp_enqueue_style( 'editorskit-live-preview' );
		}

	}


	/**
	 * Will render responsive menu options in the admin bar.
	 * This method is intended to be used with hook `admin_bar_menu`
	 *
	 * @param \WP_Admin_Bar $admin_bar - Admin bar.
	 * @return void
	 */
	public function load_responsive_options( \WP_Admin_Bar $admin_bar ) {

		if ( ! is_preview() || is_admin() ) {
			return;
		}

		$active_class = array(
			'class' => 'editorskit-active-responsive',
		);

		$current_preview_device = get_query_var( 'editorskitpreviewdevice' );

		$desktop_button = array(
			'id'    => 'editorskit-responsive-desktop',
			'title' => __( 'Desktop', 'block-options' ),
			'href'  => '#',
			'meta'  => 'desktop' === $current_preview_device ? $active_class : array(),
		);

		$admin_bar->add_node( $desktop_button );

		$tablet_button = array(
			'id'    => 'editorskit-responsive-tablet',
			'title' => __( 'Tablet', 'block-options' ),
			'href'  => '#',
			'meta'  => 'tablet' === $current_preview_device ? $active_class : array(),
		);

		$admin_bar->add_node( $tablet_button );

		$mobile_button = array(
			'id'    => 'editorskit-responsive-mobile',
			'title' => __( 'Mobile', 'block-options' ),
			'href'  => '#',
			'meta'  => 'mobile' === $current_preview_device ? $active_class : array(),
		);

		$admin_bar->add_node( $mobile_button );

	}
}

new Editorskit_Live_Preview();
