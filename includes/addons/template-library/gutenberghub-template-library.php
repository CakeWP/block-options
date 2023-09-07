<?php

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access' );
}

if ( ! class_exists( 'Gutenberghub_Template_Library' ) ) {
	/**
	 * Main plugin class
	 */
	final class Gutenberghub_Template_Library {
		/**
		 * Var to make sure we only load once
		 *
		 * @var boolean $loaded
		 */
		public static $loaded = false;

		/**
		 * Constructor
		 *
		 * @return void
		 */
		public function __construct() {
			if ( ! static::$loaded ) {
				// Models.
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/models/gutenberghub-template-library-connections.php';

				// Rest Api.
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/rest-api/routes.php';
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/gutenberghub-template-library-assets.php';

				static::$loaded = true;
			}
		}
	}

	new Gutenberghub_Template_Library();
}
