<?php
/**
 * User Login State Settings Module
 * Settings > Block Options :: User Login State
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for User Login State Visibility Options
 *
 * @since 1.0
 * @global $block_options
 * @return void
 */
if( !function_exists( 'blockopts_settings_state' ) ):
	function blockopts_settings_state(){
	    global $block_options; ?>
		<li class="blockopts-module-card blockopts-module-card-no-settings <?php echo ( $block_options['state'] == 'activate' ) ? 'blockopts-module-type-enabled' : 'blockopts-module-type-disabled'; ?>" id="blockopts-module-card-state" data-module-id="state">
			<div class="blockopts-module-card-content">
				<h2><?php _e( 'User Login State', 'block-options' );?></h2>
				<p class="blockopts-module-desc">
					<?php _e( 'Show blocks only for logged-in or logged-out users easily instead of display logic feature.', 'block-options' );?>
				</p>

				<div class="blockopts-module-actions hide-if-no-js">
					<?php if( $block_options['state'] == 'activate' ){ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Configure Settings', 'block-options' );?></button>
						<button class="button button-secondary blockopts-toggle-activation"><?php _e( 'Disable', 'block-options' );?></button>
					<?php }else{ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Learn More', 'block-options' );?></button>
						<button class="button button-primary blockopts-toggle-activation"><?php _e( 'Enable', 'block-options' );?></button>
					<?php } ?>

				</div>
			</div>

			<?php blockopts_modal_start( $block_options['state'] ); ?>
				<span class="dashicons blockopts-dashicons blockopts-no-top dashicons-admin-users"></span>
				<h3 class="blockopts-modal-header"><?php _e( 'Logged-in or Logged-out Users Restriction', 'block-options' );?></h3>
				<p>
					<?php _e( 'This feature will give you easier option to show specific blocks only for logged-in or logged-out users rather than using the Display Logic feature.', 'block-options' );?>
				</p>
				<p class="blockopts-settings-section">
					<?php _e( 'No additional settings available.', 'block-options' );?>
				</p>
			<?php blockopts_modal_end( $block_options['state'] ); ?>

		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_state', 45 );
endif;
?>
