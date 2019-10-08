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

			wp_enqueue_style( 'editorskit-welcome', plugins_url( '/build/admin.build.css' , dirname(__FILE__) ) , array(), null );
		}

		function screen_page(){
			add_dashboard_page(
				__( 'Getting started with EditorsKit', 'block-options' ),
				__( 'Getting started with EditorsKit', 'block-options' ),
				apply_filters( 'blockopts_welcome_cap', 'manage_options' ),
				'editorskit-getting-started',
				array( $this, 'welcome_content' )
			);
		}

		function welcome_content(){ ?>
			<div class="wrap about-wrap editorskit-about-wrap">
				<div class="getting-started__content">
					<h1><?php echo esc_html__( 'Get started with EditorsKit.', 'block-options' ); ?></h1>
					
					<p><strong><?php echo esc_html__( 'Thank you for choosing EditorsKit!', 'block-options' ); ?></strong></p>
					
					<p><?php echo esc_html__( 'You have just enabled set of useful tools that will help you manage each blocks and improve your content workflow with the new editor.', 'block-options' ); ?></p>
					
					<p><strong><?php echo esc_html__( 'Here is the video on how the plugin works:', 'block-options' ); ?></strong></p>

					<iframe width="560" height="380" src="https://www.youtube.com/embed/QWgO4lAJAlE" frameborder="0" allowfullscreen></iframe>

					<p>
						<?php
						echo sprintf(
							esc_html__( 'If you have any questions or suggestion, let us know through %1$sTwitter%4$s or our %2$sFacebook community %4$s. Also, %3$ssubscribe to our newsletter%4$s if you want to stay up to date with what\'s new and upcoming at EditorsKit.', 'block-options' ), '<a href="https://twitter.com/editorskit" target="_blank">', '<a href="https://www.facebook.com/groups/1306393256173179/" target="_blank">', '<a href="https://editorskit.com/" target="_blank">', '</a>'
						);
						?>
					</p>

					<p><?php echo esc_html__( 'Happy building!', 'block-options' ); ?></p>

					<p><img src="<?php echo esc_url( EDITORSKIT_PLUGIN_URL . 'build/images/logo-800.png' ); ?>" alt="<?php echo esc_attr__( 'EditorsKit Team', 'block-options' ); ?>"></p>

				</div>
			</div>
		<?php }

		function redirect($plugin){
			if( ( $plugin == 'block-options/plugin.php' || $plugin=='editorskit/plugin.php' ) && !isset( $_GET['activate-multi'] ) ) {
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
