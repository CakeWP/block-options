<?php
/**
 * Gutenberghub_Styles_Manager main Class
 *
 * @since 1.0.0
 * @package GutenberghubStylesManager
 */

if ( ! class_exists( 'GMS_Gutenberghub_Styles_Manager' ) ) {
	/**
	 * Main plugin class
	 */
	final class GMS_Gutenberghub_Styles_Manager {

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

				// Rest API.
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/rest-api/init.php';

				// Utils.
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/utils.php';

				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/gutenberghub-styles-manager-admin.php';
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/gutenberghub-styles-manager-core.php';
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/gutenberghub-styles-manager.php';
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/gutenberghub-styles-manager-blocks.php';
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/gutenberghub-styles-exporter.php';
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/gutenberghub-styles-importer.php';

				// Blocks.
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/blocks/gutenberghub-styles-manager-block.php';

				static::$loaded = true;
			}
		}

	}

	new GMS_Gutenberghub_Styles_Manager();

}
