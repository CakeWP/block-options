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
		 * Editorskit Addon Settings Group.
		 *
		 * @var string $settings_group
		 */
		public $settings_group = 'editorskit-addons';

		/**
		 * Constructor
		 *
		 * @return void
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'register_addon_settings' ) );

			$this->load_addons();
		}


		/**
		 * Loads addons.
		 *
		 * @return void
		 */
		public function load_addons() {
			require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'template-library/gutenberghub-template-library.php';

			if ( $this->is_addon_active( 'editorskit-addon-styles-manager' ) ) {
				require_once EDITORSKIT_PLUGIN_ADDON_PATH . 'styles-manager/gutenberghub-styles-manager-main.php';
			}
		}

		/**
		 * Obtains the addon status.
		 *
		 * @param string $key - Addon name.
		 *
		 * @return bool - True if active, otherwise false.
		 */
		public static function is_addon_active( $key ) {
			$status = get_option( $key, true );

			if ( true !== $status && '1' !== $status ) {
				return false;
			}

			return true;
		}

		/**
		 * Register the addons settings.
		 *
		 * @return void
		 */
		public function register_addon_settings() {

			// Addon 1: Template Library.
			register_setting(
				$this->settings_group,
				'editorskit-addon-template-library',
				array(
					'default'      => true,
					'show_in_rest' => true,
					'type'         => 'boolean',
				)
			);
			// Addon 1: Styles Manager.
			register_setting(
				$this->settings_group,
				'editorskit-addon-styles-manager',
				array(
					'default'      => true,
					'show_in_rest' => true,
					'type'         => 'boolean',
				)
			);
		}

	}

	new Editorskit_Addon_Manager();
}
