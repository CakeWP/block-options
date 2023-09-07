<?php
/**
 * Admin Class.
 *
 * @package Gutenberghub_Template_Library
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access' );
}

/**
 * Main class for handling related assets and functionalities.
 */
class Gutenberghub_Template_Library_Assets {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'load_assets' ) );
	}

	/**
	 * All admin assets should be loaded here.
	 *
	 * @return void
	 */
	public function load_assets() {
		wp_enqueue_script(
			'gutenberghub-template-library-gutenberg-script',
			EDITORSKIT_PLUGIN_URL . 'build/template-library-addon.js',
			array(
				'wp-api',
				'wp-i18n',
				'wp-components',
				'wp-element',
				'wp-editor',
			),
			uniqid(),
			true
		);

		wp_enqueue_style(
			'gutenberghub-template-library-gutenberg-style',
			EDITORSKIT_PLUGIN_URL . 'build/template-library-addon.build.css',
			array(),
			uniqid()
		);

	}

}

new Gutenberghub_Template_Library_Assets();
