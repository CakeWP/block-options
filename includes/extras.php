<?php
/**
 * Extra Functions
 *
 * Collections of extra functions to avoid repeatition
 *
 * @copyright   Copyright (c) 2018, Jeffrey Carandang
 * @since       1.0
 */
if( !function_exists( 'blockopts_sanitize_array' ) ){
    function blockopts_sanitize_array( &$array ) {
        foreach ($array as &$value) {
            if( !is_array($value) ) {
                // sanitize if value is not an array
                $value = sanitize_text_field( $value );
            }else{
                // go inside this function again
                blockopts_sanitize_array($value);
            }
        }

        return $array;
    }
}

if( !function_exists( 'blockopts_is_checked' ) ){
    function blockopts_is_checked( $array, $key ){
        return ( isset( $array[$key] ) && '1' == $array[$key] ) ? 'checked="checked"' : '';
    }
}

/*
 * Check if http or https available on link
 */
if( !function_exists( 'blockopts_addhttp' ) ){
    function blockopts_addhttp($url) {
        if (!preg_match("~^(?:f|ht)tps?://~i", $url)) {
            $url = "http://" . $url;
        }
        return $url;
    }
}

if( !function_exists( 'blockopts_get_reusable' ) ){
    function blockopts_get_reusable( $id ) {

        //require if throwing errors
        if ( ! function_exists( 'get_editable_roles' ) ) {
            require_once ABSPATH . 'wp-admin/includes/user.php';
        }

        global $wpdb;

        $blocks  = $wpdb->get_results("SELECT post_content FROM $wpdb->posts WHERE post_type = 'wp_block' AND ID = '$id' ORDER BY post_title ASC ");

        return apply_filters( 'blockopts_get_reusable_content', $blocks );
    }
}
?>