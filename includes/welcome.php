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
        public function __construct() {
			add_action( 'admin_enqueue_scripts', array($this, 'enqueue') );
			add_action( 'admin_menu', array($this, 'screen_page') );
			add_action( 'activated_plugin', array($this, 'redirect' ), 10, 2 );
			add_action( 'admin_head', array($this, 'remove_menu' ) );
		}

		function enqueue(){
			if ( !isset( $_GET['page'] ) || 'editorskit-getting-started' != $_GET['page'] )
			return;

			wp_enqueue_style( 'editorskit-welcome', plugins_url( '/dist/css/editorskit-getting-started.min.css' , dirname(__FILE__) ) , array(), null );
		}

		function screen_page(){
			add_dashboard_page(
				__( 'Getting started with EditorsKit', 'editorskit' ),
				__( 'Getting started with EditorsKit', 'editorskit' ),
				apply_filters( 'blockopts_welcome_cap', 'manage_options' ),
				'editorskit-getting-started',
				array( $this, 'welcome_content' )
			);
		}

		function welcome_content(){ ?>
			<div class="wrap about-wrap editorskit-about-wrap">
				<div class="getting-started__content">
					<h1><?php echo esc_html__( 'Thanks for choosing EditorsKit, the page building block options for the new WordPress block editor.', 'editorskit' ); ?></h1>
				</div>
			</div>
		<?php }

		function redirect($plugin){
			if($plugin=='block-options/plugin.php') {
				wp_redirect(admin_url('index.php?page=editorskit-getting-started'));
				die();
			}
		}
		function remove_menu(){
		    remove_submenu_page( 'index.php', 'editorskit-getting-started' );
		}
    }
    new BLOCKOPS_Welcome();
}

?>
