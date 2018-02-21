<?php
/**
 * Admin Options Page
 * Settings > Block Options
 *
 * @copyright   Copyright (c) 2017, Jeffrey Carandang
 * @since       1.0
*/
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Creates the admin submenu pages under the Settings menu and assigns their
 *
 * @since 1.0
 * @return void
 */
if( !function_exists( 'blockopts_add_options_link' ) ):
	function blockopts_add_options_link() {
		add_options_page(
			__( 'Block Options', 'block-options' ),
			__( 'Block Options', 'block-options' ),
			'manage_options',
			'blockopts_plugin_settings',
			'blockopts_options_page'
		);
	}
	add_action( 'admin_menu', 'blockopts_add_options_link', 10 );
endif;

/**
 * Options Page
 *
 * Renders the options page contents.
 *
 * @since 1.0
 * @return void
 */
if( !function_exists( 'blockopts_options_page' ) ):
	function blockopts_options_page(){
	     $view = 'grid'; //define so that we can add more views later on
	     ?>
	     <div class="wrap">
			<h1>
				<?php _e( 'Block Options', 'block-options' ); ?>
				<a href="<?php echo esc_url( apply_filters( 'block_options_support_url', 'https://wordpress.org/support/plugin/block-options/' ) ); ?>" target="_blank" class="page-title-action"><?php _e( 'Support', 'block-options' ); ?></a>
				<!-- <a href="<?php echo esc_url( apply_filters( 'block_options_upgrade_url', 'http://block-options.com/?utm_source=wordpressadmin&utm_medium=block&utm_campaign=blockoptsproupgrade' ) ); ?>" target="_blank" class="page-title-action"><?php _e( 'Upgrade', 'block-options' ); ?></a> -->
			</h1>

			<div id="blockopts-settings-messages-container"></div>
			<div class="blockopts-settings-desc">
				<?php _e( 'Enable or disable any Block options tabs using this option. Some features has settings configuration that you can take advantage of to get the most out of Extended Block Options on fully managing your widgets.', 'block-options' );?>
			</div>
			<div class="blockopts-badge blockopts-badge-settings">
				<span class="blockopts-mascot"></span>
			</div>

			<div id="poststuff" class="blockopts-poststuff">
				<div id="post-body" class="metabox-holder columns-2 hide-if-no-js">
					<div id="postbox-container-2" class="postbox-container">

						<div class="blockopts-module-cards-container <?php echo $view; ?> hide-if-no-js">
							<form enctype="multipart/form-data" method="post" action="/wp-admin/admin.php?page=blockopts_plugin_settings" id="blockopts-module-settings-form">
								<ul class="blockopts-module-cards">
									<?php echo do_action( 'blockopts_module_cards' );?>
								</ul>
							</form>
						</div>
						<div class="blockopts-modal-background"></div>
					</div>

					<div id="postbox-container-1" class="postbox-container">
						<?php echo do_action( 'blockopts_module_sidebar' );?>
					</div>

				</div>
			</div>
		</div>
	     <?php
	 }
 endif;

 /**
  * Modal Wrapper
  *
  * Create callable modal wrappers to avoid writing same code again
  *
  * @since 4.0
  * @return void
  */
if( !function_exists( 'blockopts_modal_start' ) ):
	function blockopts_modal_start( $option = null ){ ?>
		<div class="blockopts-module-settings-container">
			<div class="blockopts-modal-navigation">
				<button class="dashicons blockopts-close-modal"></button>
			</div>
			<div class="blockopts-module-settings-content-container">
				<div class="blockopts-module-settings-content">
	<?php }
endif;

if( !function_exists( 'blockopts_modal_end' ) ):
	function blockopts_modal_end( $option = null, $features = true ){ ?>
				</div>
			</div>
			<div class="blockopts-list-content-footer hide-if-no-js">
				<button class="button button-primary align-left blockopts-module-settings-save"><?php _e( 'Save Settings', 'block-options' );?></button>
				<button class="button button-secondary align-left blockopts-module-settings-cancel"><?php _e( 'Cancel', 'block-options' );?></button>
			</div>
			<div class="blockopts-modal-content-footer">
				<?php if( $option == 'activate' ){ ?>
					<button class="button button-secondary align-right blockopts-toggle-activation"><?php _e( 'Disable', 'block-options' );?></button>
				<?php }else{ ?>
					<?php if( $features ): ?>
						<button class="button button-primary align-right blockopts-toggle-activation"><?php _e( 'Enable', 'block-options' );?></button>
					<?php endif; ?>
				<?php } ?>
				<button class="button button-primary align-left blockopts-module-settings-save"><?php _e( 'Save Settings', 'block-options' );?></button>
			</div>
		</div>
	<?php }
endif; ?>
