<?php
/**
 * Scripts
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Load Scripts
 *
 * Enqueues the required scripts.
 *
 * @since 1.0
 * @return void
 */
if( !function_exists( 'blockopts_load_scripts' ) ){
    function blockopts_load_scripts(){
        $css_dir = BLOCKOPTS_PLUGIN_URL . 'dist/';
        wp_enqueue_style( 'blockopts-styles', $css_dir . 'blocks.style.build.css' , array(), null );
    }
    add_action( 'wp_enqueue_scripts', 'blockopts_load_scripts' );
    add_action( 'customize_controls_enqueue_scripts', 'blockopts_load_scripts' );
}

/**
 * Load Admin Scripts
 *
 * Enqueues the required admin scripts.
 *
 * @since 1.0
 * @global $block_options
 * @param string $hook Page hook
 * @return void
 */
if( !function_exists( 'blockopts_load_admin_scripts' ) ):
    function blockopts_load_admin_scripts( $hook ) {
        global $block_options;

        $js_dir  = BLOCKOPTS_PLUGIN_URL . 'assets/js/';
        $css_dir = BLOCKOPTS_PLUGIN_URL . 'assets/css/';

        // Use minified libraries if SCRIPT_DEBUG is turned off
        $suffix  = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '';

        wp_enqueue_style( 'blockopts-admin-styles', $css_dir . 'admin.css' , array(), null );

        if( in_array( $hook, apply_filters( 'blockopts_load_settings_scripts', array( 'settings_page_blockopts_plugin_settings' ) ) ) ){
            wp_register_script(
                'jquery-blockopts-settings',
                $js_dir .'settings'. $suffix .'.js',
                array( 'jquery' ),
                '',
                true
            );

            $translation = array(
                'save_settings'         => __( 'Save Settings', 'block-options' ),
                'close_settings'        => __( 'Close', 'block-options' ),
                'show_settings'         => __( 'Configure Settings', 'block-options' ),
                'hide_settings'         => __( 'Hide Settings', 'block-options' ),
                'show_description'      => __( 'Learn More', 'block-options' ),
                'hide_description'      => __( 'Hide Details', 'block-options' ),
                'show_information'      => __( 'Show Details', 'block-options' ),
                'activate'              => __( 'Enable', 'block-options' ),
                'deactivate'            => __( 'Disable', 'block-options' ),
                'successful_save'       => __( 'Settings saved successfully for %1$s.', 'block-options' ),
                'deactivate_btn'        => __( 'Deactivate License', 'block-options' ),
                'activate_btn'          => __( 'Activate License', 'block-options' ),
                'status_valid'          => __( 'Valid', 'block-options' ),
                'status_invalid'        => __( 'Invalid', 'block-options' ),
            );

            wp_enqueue_script( 'jquery-blockopts-settings' );
            wp_localize_script( 'jquery-blockopts-settings', 'blockopts', array( 'translation' => $translation, 'ajax_action' => 'blockopts_ajax_settings', 'ajax_nonce' => wp_create_nonce( 'blockopts-settings-nonce' ), ) );
        }

    }
    add_action( 'admin_enqueue_scripts', 'blockopts_load_admin_scripts', 100 );
endif;
?>
