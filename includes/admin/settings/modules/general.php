<?php
/**
 * General Settings Module
 * Settings > Vlock Options :: Settings
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
if( !function_exists( 'blockopts_settings_general' ) ):
	function blockopts_settings_general(){
	    global $block_options;

	    $general = ( isset( $block_options['settings']['general'] ) ) ? $block_options['settings']['general'] : array();?>
		<li class="blockopts-module-card blockopts-module-type-enabled" id="blockopts-module-card-general" data-module-id="general">
			<div class="blockopts-module-card-content">
				<h2><?php _e( 'Settings', 'block-options' );?></h2>
				<p class="blockopts-module-desc">
					<?php _e( 'Enable expanded toggle view of Block Options section on the settings tab.', 'block-options' );?>
				</p>

				<div class="blockopts-module-actions hide-if-no-js">
					<button class="button button-secondary blockopts-toggle-settings"><?php _e( 'Configure Settings', 'block-options' );?></button>

				</div>

			</div>

			<?php blockopts_modal_start( $block_options['general'] ); ?>
				<span class="dashicons blockopts-dashicons blockopts-no-top dashicons-admin-generic"></span>
				<h3 class="blockopts-modal-header"><?php _e( 'General Settings', 'block-options' );?></h3>
				<p>
					<?php _e( 'Turn <strong>Block Options</strong> toggle as expanded. This will give you easy access to block options\' features and manage them better.', 'block-options' );?>
				</p>

				<table class="form-table widgetopts-settings-section">
					<tr>
						<th scope="row">
							<label for="widgetopts-general-opened"><?php _e( 'Show Options', 'block-options' );?></label>
						</th>
						<td>
							<input type="checkbox" id="widgetopts-general-opened" name="general[opened]" <?php echo blockopts_is_checked( $general, 'opened' ) ?> value="1" />
							<label for="widgetopts-general-opened"><?php _e( 'Enable Initial Open', 'block-options' );?></label>
							<p class="description">
								<?php _e( 'Check this option if you want block options expanded automatically.', 'block-options' );?>
							</p>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<label for="widgetopts-general-hidedesc"><?php _e( 'Hide Descriptions', 'block-options' );?></label>
						</th>
						<td>
							<input type="checkbox" id="widgetopts-general-hidedesc" name="general[hidedesc]" <?php echo blockopts_is_checked( $general, 'hidedesc' ) ?> value="1" />
							<label for="widgetopts-general-hidedesc"><?php _e( 'Hide Descriptions on each field', 'block-options' );?></label>
							<p class="description">
								<?php _e( 'By default, each option has descriptions and instructions for you to easily understand how it works. If you are familiar with the features and want to have less space and hide the descriptions just check this option.', 'block-options' );?>
							</p>
						</td>
					</tr>
				</table>
			<?php blockopts_modal_end( $block_options['general'], false ); ?>

		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_general', 10 );
endif;
?>
