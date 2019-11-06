<?php
/**
 * Welcome Page Class
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
 */
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;
/**
 * BLOCKOPS_Welcome Class
 *
 * A general class for About and Credits page.
 *
 * @since 1.0
 */

if( !class_exists( 'BLOCKOPS_Welcome' ) ){
    class BLOCKOPS_Welcome{
		/**
		 * The base URL path (without trailing slash).
		 *
		 * @var string $_url
		 */
		private $_url;

		/**
		 * The Plugin version.
		 *
		 * @var string $_version
		 */
		private $_version;

		/**
		 * The Plugin version.
		 *
		 * @var string $_slug
		 */
		private $_slug;

        public function __construct() {
			$this->_version = EDITORSKIT_VERSION;
			$this->_slug    = 'editorskit';
			$this->_url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

			add_action( 'admin_enqueue_scripts', array($this, 'enqueue') );
			add_action( 'admin_menu', array($this, 'screen_page') );
			add_action( 'activated_plugin', array($this, 'redirect' ), 10, 2 );
		}

		function enqueue(){
			if ( !isset( $_GET['page'] ) || 'editorskit-getting-started' != $_GET['page'] )
			return;

			wp_enqueue_style(
				'editorskit-welcome',
				plugins_url( '/build/admin.build.css',
				dirname(__FILE__) ),
				array( 'wp-components' ),
				null
			);
			
			// Scripts.
			wp_enqueue_script(
				$this->_slug . '-admin',
				$this->_url . '/build/settings.js',
				array( 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-api', 'wp-hooks', 'wp-edit-post', 'lodash' ),
				time(),
				false
			);

			$global = array(
				'url'     => EDITORSKIT_PLUGIN_URL,
				'dir'     => EDITORSKIT_PLUGIN_DIR,
				'version' => $this->_version,
				'editor_settings' => apply_filters( 'block_editor_settings', array(), '' )
			);

			wp_add_inline_script( $this->_slug . '-admin', 'window.editorskitSettings = '. json_encode( $global ) .';', 'before' );
		}

		function screen_page(){
			add_submenu_page(
				'options-general.php',
				__( 'Getting started with EditorsKit', 'block-options' ),
				__( 'EditorsKit', 'block-options' ),
				apply_filters( 'blockopts_welcome_cap', 'manage_options' ),
				'editorskit-getting-started',
				array( $this, 'welcome_content' )
			);
		}

		function welcome_content(){ ?>
			<div class="editorskit-settings-wrap"></div>
		<?php }

		function redirect($plugin){
			if( ( $plugin == 'block-options/plugin.php' || $plugin=='editorskit/plugin.php' ) && !isset( $_GET['activate-multi'] ) ) {
				wp_redirect(admin_url('index.php?page=editorskit-getting-started'));
				die();
			}
		}
    }
    new BLOCKOPS_Welcome();
}

?>
