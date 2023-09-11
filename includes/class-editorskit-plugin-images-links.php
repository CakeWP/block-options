<?php
/**
 * Editorskit Plugin Images
 *
 * @package Editorskit
 */

/**
 * Responsible for creating images links.
 */
class Editorskit_Plugin_Images_Links {

	/**
	 * The Plugin version.
	 *
	 * @var string $slug
	 */
		private $slug;

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->slug = 'editorskit';
		$this->plugin_image_links();
	}
	/**
	 * Generates Plugins images.
	 */
	public function plugin_image_links() {

		$template_banner = EDITORSKIT_PLUGIN_URL . 'images/templates.png';
		$block_banner    = EDITORSKIT_PLUGIN_URL . 'images/blocks.png';

		// Localize data to pass variables to JavaScript.
		wp_localize_script(
			$this->slug . '-admin',
			'editorskitData',
			array(
				'templateBanner' => $template_banner,
				'blockBanner'    => $block_banner,
			)
		);
	}
};

new Editorskit_Plugin_Images_Links();
