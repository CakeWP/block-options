<?php
/**
 * REST API.
 *
 * @package GutenberghubStylesManager
 */

add_action(
	'rest_api_init',
	function() {
		require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/rest-api/fields.php';
		require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/rest-api/gutenberghub-styles-import-export-controller.php';
	}
);
