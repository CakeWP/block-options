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
			if ( !isset( $_GET['page'] ) || 'block-opts-getting-started' != $_GET['page'] )
			return;

			wp_enqueue_style( 'block-opts-welcome', plugins_url( '/assets/css/welcome.css' , dirname(__FILE__) ) , array(), null );
		}

		function screen_page(){
			add_dashboard_page(
				__( 'Getting started with Block Options', 'block-options' ),
				__( 'Getting started with Block Options', 'block-options' ),
				apply_filters( 'blockopts_welcome_cap', 'manage_options' ),
				'block-opts-getting-started',
				array( $this, 'welcome_content' )
			);
		}

		function welcome_head(){
			$selected = isset( $_GET['page'] ) ? $_GET['page'] : 'block-opts-getting-started';
			?>
			<h1><?php _e( 'Welcome to Block Options', 'block-options' ); ?></h1>
			<div class="about-text">
				<?php _e( 'Congratulations! You\'ve just unlocked features on managing your Editor Blocks better.', 'block-options' ); ?>
			</div>
			<div class="blockopts-badge">
				<span class="blockopts-mascot"></span>
				<span class="version"><?php _e( 'Version', 'block-options' );?> <?php echo BLOCKOPTS_VERSION; ?></span>
			</div>
			<h2 class="nav-tab-wrapper">
				<a class="nav-tab <?php echo $selected == 'block-opts-getting-started' ? 'nav-tab-active' : ''; ?>" href="<?php echo esc_url( admin_url( add_query_arg( array( 'page' => 'block-opts-getting-started' ), 'index.php' ) ) ); ?>">
					<?php _e( 'Getting Started', 'block-options' ); ?>
				</a>
			</h2>
			<?php
		}

		function welcome_content(){ ?>
			<div class="wrap about-wrap blockopts-about-wrap">
				<?php $this->welcome_head(); ?>
				<p class="about-description">
					<?php _e( 'Use the tips and instructions below to get started, then you will be up and running in no time. ', 'block-options' ); ?>
				</p>

				<div class="feature-section two-col">
					<div class="col">
						<h3><?php _e( 'Take full control over your Editor Blocks!' , 'block-options' ); ?></h3>
						<p><?php printf( __( 'Block Options is your all-in-on plugin to take over your Gutenberg Editor Blocks like it was built as WordPress core functionality. You can follow the tutorial on the right to see how the plugin works but in reality it\'s so easy and integrated elegantly on each widgets. To manage the plugin settings page just go to  <a href="%s">Settings > Block Options</a>. Otherwise just go on and create new post or page and experience how easy it is to use Block Options\' features.', 'block-options' ), esc_url( admin_url( 'options-general.php?page=blockopts_plugin_settings' ) ) ); ?>
					</div>
					<div class="col">
						<div class="feature-video">
							<iframe width="495" height="278" src="https://www.youtube.com/embed/_C1dXFz-uaA" frameborder="0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		<?php }

		function redirect($plugin){
			if($plugin=='block-options/plugin.php') {
				wp_redirect(admin_url('index.php?page=block-opts-getting-started'));
				die();
			}
		}
		function remove_menu(){
		    remove_submenu_page( 'index.php', 'block-opts-getting-started' );
		}
    }
    new BLOCKOPS_Welcome();
}

?>
