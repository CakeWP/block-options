<?php
/**
 * Settings > Block Options
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Create Metabox for Purchase Validation
 *
 * @since 1.0
 * @return void
 */
if( !function_exists( 'blockopts_settings_upgrade_pro' ) ):
	function blockopts_settings_upgrade_pro(){ ?>
		<div id="blockopts-sidebar-widget-support" class="postbox blockopts-sidebar-widget" style="border-color: #ffb310; border-width: 3px;">
			<h3 class="hndle ui-sortable-handle"><span><?php _e( 'Thank you for your Feedback', 'block-options' );?></span></h3>
			<div class="inside">
				<p>
					<?php _e( 'We are currently collecting feedback since Gutenberg WordPress Editor is not available on the core features yet. If you encounter any issues or have any suggestions please let us know. Thank you very much!', 'block-options' );?>
				</p>
				<p>
					<a class="button-primary" href="https://www.facebook.com/groups/1306393256173179/" target="_blank"><?php _e( 'Submit your Feedback', 'block-options' );?></a>
				</p>
			</div>
		</div>
	    <?php
	}
	add_action( 'blockopts_module_sidebar', 'blockopts_settings_upgrade_pro', 10 );
endif;

?>
