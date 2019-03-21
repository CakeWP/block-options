<?php
/**
 * Plugin Name: Block Options
 * Plugin URI: https://block-options.com/
 * Description: Additional block options for better block control.
 * Version: 1.3.3
 * Author: Phpbits Creative Studio
 * Author URI: https://phpbits.net/
 * Text Domain: block-options
 * Domain Path: languages
 *
 * @category Gutenberg
 * @author Jeffrey Carandang
 * @version 1.0
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
if ( ! class_exists( 'BLOCKOPTS_Block_Options' ) ) :

/**
 * Main BLOCKOPTS_Block_Options Class.
 *
 * @since  1.0
 */
final class BLOCKOPTS_Block_Options {
	/**
	 * @var BLOCKOPTS_Block_Options The one true BLOCKOPTS_Block_Options
	 * @since  1.0
	 */
	private static $instance;

	/**
	 * Main BLOCKOPTS_Block_Options Instance.
	 *
	 * Insures that only one instance of BLOCKOPTS_Block_Options exists in memory at any one
	 * time. Also prevents needing to define globals all over the place.
	 *
	 * @since  1.0
	 * @static
	 * @staticvar array $instance
	 * @uses BLOCKOPTS_Block_Options::setup_constants() Setup the constants needed.
	 * @uses BLOCKOPTS_Block_Options::includes() Include the required files.
	 * @uses BLOCKOPTS_Block_Options::load_textdomain() load the language files.
	 * @see BLOCKOPTS()
	 * @return object|BLOCKOPTS_Block_Options The one true BLOCKOPTS_Block_Options
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof BLOCKOPTS_Block_Options ) ) {
			self::$instance = new BLOCKOPTS_Block_Options;
			self::$instance->setup_constants();

			self::$instance->includes();
		}
		return self::$instance;
	}

	/**
	 * Setup plugin constants.
	 *
	 * @access private
	 * @since 4.1
	 * @return void
	 */
	private function setup_constants() {

		// Plugin version.
		if ( ! defined( 'BLOCKOPTS_PLUGIN_NAME' ) ) {
			define( 'BLOCKOPTS_PLUGIN_NAME', 'Block Options' );
		}

		// Plugin version.
		if ( ! defined( 'BLOCKOPTS_VERSION' ) ) {
			define( 'BLOCKOPTS_VERSION', '1.3.2' );
		}

		// Plugin Folder Path.
		if ( ! defined( 'BLOCKOPTS_PLUGIN_DIR' ) ) {
			define( 'BLOCKOPTS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
		}

		// Plugin Folder URL.
		if ( ! defined( 'BLOCKOPTS_PLUGIN_URL' ) ) {
			define( 'BLOCKOPTS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
		}

		// Plugin Root File.
		if ( ! defined( 'BLOCKOPTS_PLUGIN_FILE' ) ) {
			define( 'BLOCKOPTS_PLUGIN_FILE', __FILE__ );
		}
	}

	/**
	 * Include required files.
	 *
	 * @access private
	 * @since 4.1
	 * @return void
	 */
	private function includes() {
		global $block_options,  $pagenow;

		require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/register-settings.php';
		require_once BLOCKOPTS_PLUGIN_DIR . 'includes/scripts.php';
		require_once BLOCKOPTS_PLUGIN_DIR . 'includes/extras.php';

		$block_options = blockopts_get_settings();

		require_once BLOCKOPTS_PLUGIN_DIR . 'includes/block-options.php';

		if ( is_admin() ) {

			//run on activation
			require_once BLOCKOPTS_PLUGIN_DIR . 'includes/install.php';
			require_once BLOCKOPTS_PLUGIN_DIR . 'includes/welcome.php';

			//admin settings
			require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/display-settings.php';
			require_once BLOCKOPTS_PLUGIN_DIR . 'includes/ajax-functions.php';

			if( in_array( $pagenow, array( 'options-general.php' ) ) ){
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/general.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/devices.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/state.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/logic.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/sidebar-upsell_pro.php';

				//pro features
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/roles.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/dates.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/days.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/links.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/alignment.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/acf.php';
				require_once BLOCKOPTS_PLUGIN_DIR . 'includes/admin/settings/modules/more.php';
			}
		}
		
	}

}

endif; // End if class_exists check.


/**
 * The main function for that returns BLOCKOPTS_Block_Options
 *
 * The main function responsible for returning the one true BLOCKOPTS_Block_Options
 * Instance to functions everywhere.
 *
 * Use this function like you would a global variable, except without needing
 * to declare the global.
 *
 * Example: <?php $blockopts = BLOCKOPTS_Block_Options(); ?>
 *
 * @since 1.0
 * @return object|BLOCKOPTS_Block_Options The one true BLOCKOPTS_Block_Options Instance.
 */
function blockopts_init() {
	return BLOCKOPTS_Block_Options::instance();
}
// Get Plugin Running.
if( function_exists( 'is_multisite' ) && is_multisite() ){
	//loads on plugins_loaded action to avoid issue on multisite
	add_action( 'plugins_loaded', 'blockopts_init', apply_filters( 'blockopts_priority', 90 ) );
}else{
	blockopts_init();
}
?>
