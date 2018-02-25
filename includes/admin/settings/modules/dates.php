<?php
/**
 * Date Range Settings Module
 * Settings > Blocl Options :: Date Range
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for Date Range Options
 *
 * @since 1.0
 * @global $block_options
 * @return void
 */
if( !function_exists( 'blockopts_settings_dates' ) ):
	function blockopts_settings_dates(){ ?>
		<li class="blockopts-module-card blockopts-module-type-pro" data-module-id="dates">
			<div class="blockopts-module-card-content">
				<a href="https://block-options.com/" target="_blank" class="blockopts-pro-upsell"></a>
				<h2><?php _e( 'Date Range', 'block-options' );?></h2>
				<div class="blockopts-pro-label"><span class="dashicons dashicons-lock"></span></div>
				<p class="blockopts-module-desc">
					<?php _e( 'Restrict each Gutenberg editor blocks visibility on specific date range.', 'block-options' );?>
				</p>
			</div>
		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_dates', 120 );
endif;
?>
