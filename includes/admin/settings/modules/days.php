<?php
/**
 * Days Visibility Settings Module
 * Settings > Blocl Options :: Days Visibility
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for Days Visibility Options
 *
 * @since 1.0
 * @global $block_options
 * @return void
 */
if( !function_exists( 'blockopts_settings_days' ) ):
	function blockopts_settings_days(){ ?>
		<li class="blockopts-module-card blockopts-module-type-pro" data-module-id="dates">
			<div class="blockopts-module-card-content">
				<a href="https://block-options.com/" target="_blank" class="blockopts-pro-upsell"></a>
				<h2><?php _e( 'Days Visibility', 'block-options' );?></h2>
				<div class="blockopts-pro-label"><span class="dashicons dashicons-lock"></span></div>
				<p class="blockopts-module-desc">
					<?php _e( 'Restrict each Gutenberg editor blocks visibility on specific days in a week.', 'block-options' );?>
				</p>
			</div>
		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_days', 150 );
endif;
?>
