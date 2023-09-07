<?php
/**
 * All routes should be registered here.
 *
 * @package Gutenberghub_Template_Library
 */

add_action(
	'rest_api_init',
	function() {
		require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/rest-api/controllers/gutenberghub-template-library-controller.php';
		require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/rest-api/controllers/gutenberghub-template-library-connections-controller.php';
	}
);
