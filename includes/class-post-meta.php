<?php
/**
 * Register post meta.
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang from EditorsKit
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * EditorsKit_Post_Meta Class
 *
 * @since 1.6.0
 */
class EditorsKit_Post_Meta {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_filter( 'init', array( $this, 'register_meta' ) );
		add_filter( 'rest_pre_dispatch', array( $this, 'rest_pre_dispatch' ), 10, 3 );
	}

	/**
	 * Register meta.
	 */
	public function register_meta() {
		register_meta(
			'post', '_editorskit_title_hidden', array(
				'show_in_rest'  => true,
				'single'        => true,
				'type' 			=> 'boolean',
				'auth_callback' => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);

		register_meta(
			'post', '_editorskit_reading_time', array(
				'show_in_rest'  => true,
				'single'        => true,
				'type' 			=> 'number',
				'auth_callback' => function() {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}

	//fix REST API issue with blocks registered via PHP register_block_type
	function rest_pre_dispatch( $result, $server, $request ) {

	    if ( strpos( $request->get_route() , '/wp/v2/block-renderer') !== false ) {
	        if( isset( $request['attributes'] ) && isset( $request['attributes']['editorskit'] ) ){
		    	$attributes = $request['attributes'];
		    	unset( $attributes['editorskit'] );
		    	$request['attributes'] = $attributes;
		    }
	    }
	    
	    return $result;
	}
}

return new EditorsKit_Post_Meta();
