<?php
/**
 * Library Controller
 *
 * @package Gutenberghub_Template_Library
 */

/**
 * Library Resource Controller.
 */
class Gutenberghub_Template_Library_Controller extends WP_REST_Controller {

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
		$this->resource_name = 'library';
	}

	/**
	 * Registers necessary controller routes.
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->resource_name . '/categories',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_categories' ),
				'permission_callback' => array( $this, 'permissions_check' ),
			),
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->resource_name . '/templates',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_templates' ),
				'permission_callback' => array( $this, 'permissions_check' ),
			),
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
	 * Obtains the cloud categories.
	 *
	 * @param WP_REST_Request $request - Request.
	 */
	public function get_categories( $request ) {
		$connection_id = $request->get_param( 'connection_id' );
		$connection    = Gutenberghub_Template_Library_Connections::get_connection( $connection_id );

		$categories_uri = $connection['rest_url'] . 'wp/v2/terracloud-categories';

		// Obtaining every category.
		$categories_uri = add_query_arg(
			array(
				'per_page'   => 100,
				'uuid'       => wp_generate_uuid4(),
				'product_id' => explode( '||', $connection['product_id'] ),
			),
			$categories_uri
		);

		$response = wp_remote_get(
			$categories_uri,
			array(
				'headers' => array(
					'TerraCloud-Access-Key' => $connection['access_key'],
				),
			)
		);

		if ( is_wp_error( $response ) ) {
			return new WP_REST_Response(
				array(
					'message' => 'Something went wrong',
				),
				500
			);
		}

		$response_body   = wp_remote_retrieve_body( $response );
		$response_body   = json_decode( $response_body );
		$response_status = wp_remote_retrieve_response_code( $response );

		return new WP_REST_Response( $response_body, $response_status );
	}

	/**
	 * Obtains the cloud templates of an specific connection.
	 *
	 * @param WP_REST_Request $request - Request.
	 */
	public function get_templates( $request ) {
		$connection_id = $request->get_param( 'connection_id' );
		$keywords      = $request->has_param( 'keywords' ) ? $request->get_param( 'keywords' ) : array();
		$category_id   = $request->has_param( 'category' ) ? $request->get_param( 'category' ) : null;
		$page          = $request->has_param( 'page' ) ? $request->get_param( 'page' ) : 1;
		$per_page      = $request->has_param( 'per_page' ) ? $request->get_param( 'per_page' ) : 10;

		$connection = Gutenberghub_Template_Library_Connections::get_connection( $connection_id );

		$templates_uri = $connection['rest_url'] . 'wp/v2/terra-cloud';

		// Obtaining every category.
		$query_args = array(
			'per_page'   => $per_page,
			'page'       => $page,
			'uuid'       => wp_generate_uuid4(),
			'product_id' => explode( '||', $connection['product_id'] ),
		);

		if ( ! is_null( $category_id ) ) {
			$query_args['terra-category'] = $category_id;
		}

		if ( count( $keywords ) > 0 ) {
			$query_args['terra-keywords'] = $keywords;
		}

		$templates_uri = add_query_arg(
			$query_args,
			$templates_uri
		);

		$response = wp_remote_get(
			$templates_uri,
			array(
				'headers' => array(
					'TerraCloud-Access-Key' => $connection['access_key'],
				),
			)
		);

		if ( is_wp_error( $response ) ) {
			return new WP_REST_Response(
				array(
					'message' => 'Something went wrong',
				),
				500
			);
		}

		$response_body   = wp_remote_retrieve_body( $response );
		$response_status = wp_remote_retrieve_response_code( $response );

		return new WP_REST_Response(
			json_decode( $response_body ),
			$response_status,
			array(
				'X-WP-TotalPages' => wp_remote_retrieve_header( $response, 'X-WP-TotalPages' ),
			)
		);
	}
}

$gutenberghub_template_library_controller = new Gutenberghub_Template_Library_Controller();
$gutenberghub_template_library_controller->register_routes();
