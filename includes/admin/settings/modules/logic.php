<?php
/**
 * Widget Logic Settings Module
 * Settings > Vlock Options :: Display Logic
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for Display Logic Options
 *
 * @since 1.0
 * @global $block_options
 * @return void
 */
if( !function_exists( 'blockopts_settings_logic' ) ):
	function blockopts_settings_logic(){
	    global $block_options; ?>
		<li class="blockopts-module-card blockopts-module-card-no-settings <?php echo ( isset( $block_options['logic'] ) && $block_options['logic'] == 'activate' ) ? 'blockopts-module-type-enabled' : 'blockopts-module-type-disabled'; ?>" id="blockopts-module-card-logic" data-module-id="logic">
			<div class="blockopts-module-card-content">
				<h2><?php _e( 'Display Logic', 'block-options' );?></h2>
				<p class="blockopts-module-desc">
					<?php _e( 'Use WordPress PHP conditional tags to assign each blocks visibility.', 'block-options' );?>
				</p>

				<div class="blockopts-module-actions hide-if-no-js">
					<?php if( $block_options['logic'] == 'activate' ){ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Configure Settings', 'block-options' );?></button>
						<button class="button button-secondary blockopts-toggle-activation"><?php _e( 'Disable', 'block-options' );?></button>
					<?php }else{ ?>
						<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Learn More', 'block-options' );?></button>
						<button class="button button-primary blockopts-toggle-activation"><?php _e( 'Enable', 'block-options' );?></button>
					<?php } ?>

				</div>

			</div>

			<?php blockopts_modal_start( $block_options['logic'] ); ?>
				<span class="dashicons blockopts-dashicons blockopts-no-top dashicons-editor-code"></span>
				<h3 class="blockopts-modal-header"><?php _e( 'Display Logic', 'block-options' );?></h3>
				<p>
					<?php _e( 'Display Widget Logic will let you control where you want the widgets to appear using WordPress conditional tags.', 'block-options' );?>
				</p>
				<p>
					<?php _e( "<strong>Please note</strong> that the display logic you introduce is EVAL'd directly. Anyone who has access to edit widget appearance will have the right to add any code, including malicious and possibly destructive functions. There is an optional filter <code>block_options_logic_override</code> which you can use to bypass the EVAL with your own code if needed.", 'block-options' )?>
				</p>
				<p class="blockopts-settings-section">
					<?php _e( 'No additional settings available.', 'block-options' );?>
				</p>
			<?php blockopts_modal_end( $block_options['logic'] ); ?>

		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_logic', 60 );
endif;
?>
