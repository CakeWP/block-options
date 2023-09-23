<?php
/**
 * GutenbergHub Styles Importer.
 *
 * @package GutenberghubStylesManager
 */

/**
 * Handles the styles import.
 */
class GutenbergHub_Styles_Importer {

	/**
	 * Validate import data.
	 *
	 * @param array $import_data Styles data to be validated.
	 * @return array|WP_Error The validated data if valid, WP_Error otherwise.
	 */
	private function validate_import( $import_data ) {
		if ( ! is_array( $import_data ) ) {
			return new WP_Error( 'invalid_data_format', 'Invalid export data format.' );
		}

		if ( ! isset( $import_data['term_details']['slug'] ) || empty( $import_data['term_details']['slug'] ) ) {
			return new WP_Error( 'missing_term_slug', 'Invalid export data format.' );
		}

		if ( ! term_exists( $import_data['term_details']['slug'], Gutenberghub_Styles_Manager_Blocks::$taxonomy ) ) {
			return new WP_Error( 'invalid_term_slug', 'Please make sure the associated block is active for these exported style(s).' );
		}

		if ( ! isset( $import_data['posts'] ) || ! is_array( $import_data['posts'] ) ) {
			return new WP_Error( 'missing_posts_data', 'Invalid export data format.' );
		}

		foreach ( $import_data['posts'] as $post ) {
			if ( ! isset( $post['title'], $post['css'], $post['js'], $post['isActive'] ) ) {
				return new WP_Error( 'invalid_post_data', 'Invalid export data format.' );
			}
		}

		return $import_data;
	}

	/**
	 * Imports block styles.
	 *
	 * @param array $import_data Styles data to be imported.
	 * @return WP_REST_Response
	 */
	public function import_block_styles( $import_data ) {

		$validated_data = $this->validate_import( $import_data );

		if ( is_wp_error( $validated_data ) ) {
			return new WP_REST_Response( array( 'message' => $validated_data->get_error_message() ), 400 );
		}

		// Fetch term by slug and handle if not exists.
		$term_details = get_term_by( 'slug', $import_data['term_details']['slug'], Gutenberghub_Styles_Manager_Blocks::$taxonomy );
		if ( ! $term_details ) {
			return new WP_REST_Response( array( 'message' => __( 'Please first install the block for these styles.', 'gutenberghub-styles-manager' ) ), 400 );
		}

		// Start importing.
		$posts = $import_data['posts'];
		foreach ( $posts as $post ) {
			$post_id = wp_insert_post(
				array(
					'post_title'   => $post['title'],
					'post_status'  => 'publish',
					'post_type'    => Gutenberghub_Styles_Manager_Admin::$post_type,
					'post_content' => $post['content'],
				)
			);

			if ( is_wp_error( $post_id ) ) {
				// Handle the error.
				continue;
			}

			// Update metadata.
			update_post_meta( $post_id, 'gsm_css', $post['css'] );
			update_post_meta( $post_id, 'gsm_js', $post['js'] );
			update_post_meta( $post_id, 'gsm_active', false );

			// Assign the term.
			wp_set_object_terms( $post_id, array( $term_details->term_id ), Gutenberghub_Styles_Manager_Blocks::$taxonomy );
		}

		return new WP_REST_Response(
			array(
				'updatedTerm' => $term_details,
				'message'     => __( 'Successfully imported styles.', 'gutenberghub-styles-manager' ),
			),
			200
		);
	}
}
