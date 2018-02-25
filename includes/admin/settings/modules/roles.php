<?php
/**
 * Roles Settings Module
 * Settings > Block Options :: User Roles Restriction
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Card Module for User Roles Restriction
 *
 * @since 1.0
 * @global $widget_options
 * @return void
 */
if( !function_exists( 'blockopts_settings_roles' ) ):
	function blockopts_settings_roles(){ ?>
		<li class="blockopts-module-card blockopts-module-type-pro" data-module-id="roles">
			<div class="blockopts-module-card-content">
				<a href="https://block-options.com/" target="_blank" class="blockopts-pro-upsell"></a>
				<h2><?php _e( 'User Roles Restriction', 'block-options' );?></h2>
				<div class="blockopts-pro-label"><span class="dashicons dashicons-lock"></span></div>
				<p class="blockopts-module-desc">
					<?php _e( 'Restrict each blocks visibility for each user roles at ease via checkboxes.', 'block-options' );?>
				</p>
			</div>
		</li>
	    <?php
	}
	add_action( 'blockopts_module_cards', 'blockopts_settings_roles', 90 );
endif;
?>
