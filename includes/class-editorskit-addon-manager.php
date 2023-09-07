<?php
/**
 * Editorskit addon manage.
 *
 * @package   EditorsKit
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct access' );
}

if ( ! class_exists( 'Editorskit_Addon_Manager' ) ) {
	/**
	 * Main plugin class
	 */
	final class Editorskit_Addon_Manager {


		/**
		 * Editorskit Addons.
		 *
		 * @var array $addons
		 */
		public $addons = array();

		/**
		 * Constructor
		 *
		 * @return void
		 */
		public function __construct() {
			require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/gutenberghub-template-library.php';

			// add_action( 'init', array( $this, 'register_addon_settings' ) );

			$this->addons = array(
				'template_library' => array(
					'title'       => __( 'Template Library', 'editor_plus' ),
					'description' => __( 'This addons add template library.', 'editor_plus' ),
				),
			);
			$this->get_addon_settings();
		}

		/**
		 * Register the addons settings
		 */
		public function register_addon_settings() {
			foreach ( $this->addons as $name => $data ) {
				$slug        = 'editorskit_' . $name;
				$enable_slug = 'editorskit_' . $name . '__enabled';

				register_setting(
					$slug,
					$enable_slug,
					array(
						'type'         => 'boolean',
						'show_in_rest' => true,
						'default'      => true,
					)
				);
			};
		}
		/**
		 * Get the all the registered settings with status by the extension manager
		 *
		 * @return array - Settings.
		 */
		public function get_addon_settings() {
			$settings = array();

			foreach ( $this->addons as $name => $data ) {
				$slug        = 'editorskit_' . $name;
				$enable_slug = 'editorskit_' . $name . '__enabled';

				$settings[ $name ]['enabled'] = get_option( $enable_slug );
			}
			// var_dump( get_option( 'editorskit_template_library__enabled' ) );

			return $settings;
		}
	}

	new Editorskit_Addon_Manager();
}
