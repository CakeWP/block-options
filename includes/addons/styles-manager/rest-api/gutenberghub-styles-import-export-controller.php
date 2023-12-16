<?php
/**
 * GutenbergHub Styles Import/Export Controller.
 *
 * @package GutenberghubStylesManager
 */

/**
 * Main Controller.
 */
class GutenbergHub_Styles_Import_Export_Controller extends WP_REST_Controller {

	/**
	 * Namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'gutenberghub-styles/v1';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'import-export';

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->register_routes();
	}

	/**
	 * Register routes.
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/export',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'export_styles' ),
				'permission_callback' => array( $this, 'permission_check' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/import',
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'import_styles' ),
				'permission_callback' => array( $this, 'permission_check' ),
			)
		);
	}

	/**
	 * Permission check callback.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return true|WP_Error
	 */
	public function permission_check( $request ) {
		$nonce = $request->get_param( 'nonce' );

		if ( ! wp_verify_nonce( $nonce, 'gsm-import' ) ) {
			return new WP_Error( 'rest_forbidden', 'Sorry, you are not allowed to do that due to invalid nonce.', array( 'status' => 403 ) );
		}

		if ( ! current_user_can( 'edit_posts' ) ) {
			return new WP_Error( 'rest_forbidden', 'Sorry, you are not allowed to do that.', array( 'status' => 403 ) );
		}

		return true;
	}


	/**
	 * Export styles callback.
	 *
	 * @return WP_REST_Response
	 */
	public function export_styles() {
		// Your export logic goes here.
		return new WP_REST_Response( array( 'message' => 'Export endpoint hit.' ), 200 );
	}

	/**
	 * Import styles callback.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response
	 */
	public function import_styles( $request ) {
		$files = $request->get_file_params();

		if ( ! isset( $files['json'] ) ) {
			return new WP_REST_Response( array( 'message' => 'No file provided.' ), 400 );
		}

		$file_type = wp_check_filetype( $files['json']['name'] );

		if ( 'json' !== $file_type['ext'] ) {
			return new WP_REST_Response( array( 'message' => 'Invalid file type. Only JSON files are allowed.' ), 400 );
		}

		require_once ABSPATH . 'wp-admin/includes/file.php';

		global $wp_filesystem;
		WP_Filesystem();
		$upload_dir  = wp_upload_dir();
		$destination = trailingslashit( $upload_dir['path'] ) . $files['json']['name'];
		move_uploaded_file( $files['json']['tmp_name'], $destination );
		$content = $wp_filesystem->get_contents( $destination );

		$import_data = json_decode( $content, true );

		if ( null === $import_data ) {
			return new WP_REST_Response( array( 'message' => 'Invalid JSON.' ), 400 );
		}

		$importer = new GutenbergHub_Styles_Importer();
		return $importer->import_block_styles( $import_data );
	}

}

new GutenbergHub_Styles_Import_Export_Controller();
