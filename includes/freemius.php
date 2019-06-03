<?php
/**
 * Init Freemius SDK.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! function_exists( 'editorskit_sdk' ) ) {
    // Create a helper function for easy SDK access.
    function editorskit_sdk() {
        global $editorskit_sdk;

        if ( ! isset( $editorskit_sdk ) ) {
            // Include Freemius SDK.
            require_once plugin_dir_path( __DIR__ ) . '/vendor/freemius/start.php';

            $editorskit_sdk = fs_dynamic_init( array(
                'id'                  => '3859',
                'slug'                => 'block-options',
                'type'                => 'plugin',
                'public_key'          => 'pk_d79ca0343a73e035d571437156201',
                'is_premium'          => false,
                'has_addons'          => false,
                'has_paid_plans'      => false,
                'menu'                => array(
                    'first-path'     => 'index.php?page=editorskit-getting-started',
                    'account'        => false,
                    'contact'        => false,
                    'support'        => false,
                ),
            ) );
        }

        return $editorskit_sdk;
    }

    // Init Freemius.
    editorskit_sdk();
    // Signal that SDK was initiated.
    do_action( 'editorskit_sdk_loaded' );
}

?>