<?php
/**
 * ACF Settings Module
 * Settings > Block Options :: ACF Support
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for Custom ACF Options
 *
 * @since 1.0
 * @return void
 */
if( !function_exists( 'blockopts_settings_acf' ) ):
	function blockopts_settings_acf(){ 
		global $block_options; 
		//avoid issue after update
        if( !isset( $block_options['acf'] ) ){
            $block_options['acf'] = '';
        }?>
		<li class="blockopts-module-card blockopts-module-card-no-settings <?php echo ( isset( $block_options['acf'] ) && $block_options['acf'] == 'activate' ) ? 'blockopts-module-type-enabled' : 'blockopts-module-type-disabled'; ?>" id="blockopts-module-card-acf" data-module-id="acf">
			<div class="blockopts-module-card-content">
				<h2><?php _e( 'Advanced Custom Fields Support', 'block-options' );?></h2>
				<p class="blockopts-module-desc">
					<?php _e( 'Extends block options visibility using Advanced Custom Fields Plugin.', 'block-options' );?>
				</p>

				<div class="blockopts-module-actions hide-if-no-js">
					<?php if( $block_options['acf'] == 'activate' ){ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Configure Settings', 'block-options' );?></button>
						<button class="button button-secondary blockopts-toggle-activation"><?php _e( 'Disable', 'block-options' );?></button>
					<?php }else{ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Learn More', 'block-options' );?></button>
						<button class="button button-primary blockopts-toggle-activation"><?php _e( 'Enable', 'block-options' );?></button>
					<?php } ?>

				</div>

			</div>

			<?php blockopts_modal_start( $block_options['acf'] ); ?>
				<span class="dashicons blockopts-dashicons blockopts-no-top dashicons-editor-textcolor"></span>
				<h3 class="blockopts-modal-header"><?php _e( 'Advanced Custom Fields Support', 'block-options' );?></h3>
				<p>
					<?php _e( 'Enabling this feature will give you more visibility options for each block and assign condition using ACF field.', 'block-options' );?>
				</p>
				<p class="blockopts-settings-section">
					<?php _e( 'No additional settings available.', 'block-options' );?>
				</p>
			<?php blockopts_modal_end( $block_options['acf'] ); ?>

		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_acf', 65 );
endif;
?>
