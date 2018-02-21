<?php
/**
 * Devices Settings Module
 * Settings > Block Options :: Devices Visibility
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for Devices Visibility Options
 *
 * @since 1.0
 * @global $block_options
 * @return void
 */
if( !function_exists( 'blockopts_settings_devices' ) ):
	function blockopts_settings_devices(){
	    global $block_options; ?>
		<li class="blockopts-module-card blockopts-module-card-no-settings <?php echo ( $block_options['devices'] == 'activate' ) ? 'blockopts-module-type-enabled' : 'blockopts-module-type-disabled'; ?>" id="blockopts-module-card-devices" data-module-id="devices">
			<div class="blockopts-module-card-content">
				<h2><?php _e( 'Devices Visibility', 'block-options' );?></h2>
				<p class="blockopts-module-desc">
					<?php _e( 'Show or hide specific WordPress editor blocks on desktop, tablet and/or mobile screen sizes.', 'block-options' );?>
				</p>

				<div class="blockopts-module-actions hide-if-no-js">
					<?php if( $block_options['devices'] == 'activate' ){ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Configure Settings', 'block-options' );?></button>
						<button class="button button-secondary blockopts-toggle-activation"><?php _e( 'Disable', 'block-options' );?></button>
					<?php }else{ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Learn More', 'block-options' );?></button>
						<button class="button button-primary blockopts-toggle-activation"><?php _e( 'Enable', 'block-options' );?></button>
					<?php } ?>

				</div>
			</div>

			<?php blockopts_modal_start( $block_options['devices'] ); ?>
				<span class="dashicons blockopts-dashicons blockopts-no-top dashicons-smartphone"></span>
				<h3 class="blockopts-modal-header"><?php _e( 'Devices Visibility Restriction', 'block-options' );?></h3>
				<p>
					<?php _e( 'This feature will allow you to display different block for each devices. You can restrict visibility on desktop, tablet and/or mobile device screen sizes at ease via checkboxes.', 'block-options' );?>
				</p>
				<p class="blockopts-settings-section">
					<?php _e( 'No additional settings available.', 'block-options' );?>
				</p>
			<?php blockopts_modal_end( $block_options['devices'] ); ?>

		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_devices', 30 );
endif;
?>
