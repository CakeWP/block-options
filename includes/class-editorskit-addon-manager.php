<?php

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access' );
}

if ( ! class_exists( 'Editorskit_Addon_Manager' ) ) {
	/**
	 * Main plugin class
	 */
	final class Editorskit_Addon_Manager {
	
		/**
		 * Constructor
		 *
		 * @return void
		 */
		public function __construct() {
			require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/gutenberghub-template-library.php';
		}
	}

	new Editorskit_Addon_Manager();
}