<?php
/**
 * Links Settings Module
 * Settings > Block Options :: More
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for Custom Links Options
 *
 * @since 1.0
 * @return void
 */
if( !function_exists( 'blockopts_settings_more' ) ):
	function blockopts_settings_more(){ ?>
		<li class="blockopts-module-card" data-module-id="links">
			<div class="blockopts-module-card-content">
				<a href="https://www.facebook.com/groups/1306393256173179/" target="_blank" class="blockopts-pro-upsell"></a>
				<h2><?php _e( 'Suggest a Feature', 'block-options' );?></h2>
				<div class="blockopts-pro-label" style="background: transparent; color: #b3b0b0;"><span class="dashicons dashicons-redo"></span></div>
				<p class="blockopts-module-desc">
					<?php _e( 'Want a features that are not available on the lists yet? We\'ll be very happy to hear it.', 'block-options' );?>
				</p>
			</div>
		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_more', 240 );
endif;
?>
