<?php
/**
 * Connections.
 *
 * @package Gutenberghub_Template_Library
 */

/**
 * Controller.
 */
class Gutenberghub_Template_Connections_Controller extends WP_REST_Controller {

	/**
	 * Resource name.
	 *
	 * @var string
	 */
	public $resource_name;

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->namespace     = 'gutenberghub-template-library/v1';
		$this->resource_name = 'connections';
	}

	/**
	 * Registers necessary controller routes.
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->resource_name,
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_connections' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_connection' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->resource_name . '/(?P<id>[a-f\d-]+)',
			array(
				'args' => array(
					'id' => array(
						'validate_callback' => 'rest_validate_request_arg',
					),
				),
				array(
					'methods'             => WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_connection' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
			)
		);
	}

	/**
	 * Check permissions for the request.
	 *
	 * @param WP_REST_Request $request The request object.
	 * @return bool|WP_Error
	 */
	public function permissions_check( $request ) {
		if ( ! current_user_can( 'edit_posts' ) ) {
			return new WP_Error( 'rest_forbidden', esc_html__( 'You are not allowed to access this resource.', 'gutenberghub-template-library' ), array( 'status' => rest_authorization_required_code() ) );
		}

		$nonce = $request->get_header( 'X-WP-Nonce' );
		if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
			return new WP_Error( 'rest_invalid_nonce', esc_html__( 'Invalid nonce.', 'gutenberghub-template-library' ), array( 'status' => 403 ) );
		}

		return true;
	}

	/**
	 * Get all available connections.
	 *
	 * @param WP_REST_Request $request The request object.
	 * @return WP_REST_Response
	 */
	public function get_connections( WP_REST_Request $request ) {

		$show_merged = $request->has_param( 'merge' ) ? $request->get_param( 'merge' ) : true;
		$connections = Gutenberghub_Template_Library_Connections::get_merged_connections();

		if ( false === $show_merged || 'false' === $show_merged ) {
			$connections = Gutenberghub_Template_Library_Connections::get_connections();
		}

		return rest_ensure_response( $connections );
	}

	/**
	 * Create a new connection.
	 *
	 * @param WP_REST_Request $request The request object.
	 * @return WP_REST_Response|WP_Error
	 */
	public function create_connection( WP_REST_Request $request ) {
		$connection_uri = $request->get_param( 'connection_uri' );
		$access_key     = $request->get_param( 'access_key' );
		$product_id     = $request->get_param( 'product_id' );

		$additional_metadata = $request->has_param( 'metadata' ) ? $request->get_param( 'metadata' ) : array();

		if ( empty( $connection_uri ) || empty( $access_key ) | empty( $product_id ) ) {
			return new WP_Error( 'empty_fields', 'Connection URI, Access Key and Product ID are required.', array( 'status' => 400 ) );
		}

		$new_connection = Gutenberghub_Template_Library_Connections::add_connection( $connection_uri, $access_key, $product_id, $additional_metadata );

		if ( false !== $new_connection ) {
			return rest_ensure_response( $new_connection );
		}

		return new WP_REST_Response(
			array(
				'message' => 'Something went wrong',
			),
			500
		);
	}

	/**
	 * Delete a connection.
	 *
	 * @param WP_REST_Request $request The request object.
	 * @return WP_REST_Response|WP_Error
	 */
	public function delete_connection( WP_REST_Request $request ) {
		$connection_id = $request->get_param( 'id' );

		if ( empty( $connection_id ) ) {
			return new WP_Error( 'empty_id', 'Connection ID is required.', array( 'status' => 400 ) );
		}

		$result = Gutenberghub_Template_Library_Connections::delete_connection( $connection_id );

		if ( $result ) {
			return rest_ensure_response( array( 'message' => 'Connection deleted successfully.' ) );
		} else {
			return new WP_Error( 'not_found', 'Connection not found.', array( 'status' => 404 ) );
		}
	}
}

// Instantiate the controller and register routes.
$gutenberghub_template_library_connections_controller = new Gutenberghub_Template_Connections_Controller();
$gutenberghub_template_library_connections_controller->register_routes();
