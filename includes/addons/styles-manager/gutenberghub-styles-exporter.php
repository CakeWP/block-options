<?php
/**
 * Styles Exporter.
 *
 * @package GutenberghubStylesManager
 */

/**
 * Handles the styles export.
 */
class GSM_Styles_Exporter {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'admin_init', array( $this, 'maybe_export' ) );
	}

	/**
	 * Maybe disposes the generated export file if requested.
	 *
	 * @return void
	 */
	public function maybe_export() {
		$nonce       = isset( $_GET['nonce'] ) ? sanitize_text_field( wp_unslash( $_GET['nonce'] ) ) : null;
		$is_verified = wp_verify_nonce( $nonce, 'gsm-export' );

		// Check 1: Exit if unverified.
		if ( ! $is_verified ) {
			return;
		}

		$should_export = isset( $_GET['export'] ) ? sanitize_text_field( wp_unslash( $_GET['export'] ) ) : false;

		// Check 2: Exit if not exporting.
		if ( 'true' !== $should_export && true !== $should_export ) {
			return;
		}

		$term_id = isset( $_GET['term'] ) ? sanitize_text_field( wp_unslash( $_GET['term'] ) ) : null;

		// Check 3: Exit if term id not valid.
		if ( is_null( $term_id ) ) {
			return;
		}

		$query = new WP_Query(
			array(
				'posts_per_page' => -1,
				'post_type'      => Gutenberghub_Styles_Manager_Admin::$post_type,
				'tax_query'      => array(
					array(
						'taxonomy' => Gutenberghub_Styles_Manager_Blocks::$taxonomy,
						'field'    => 'term_id',
						'terms'    => array( $term_id ),
					),
				),
			)
		);

		$term_details = get_term_by( 'id', $term_id, Gutenberghub_Styles_Manager_Blocks::$taxonomy );
		$export_data  = array(
			'term_details' => $term_details,
			'posts'        => array(),
		);

		$export_name = strtolower( $term_details->name ) . '.json';

		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				$post_id      = get_the_ID();
				$current_post = get_post( $post_id );

				$export_data['posts'][] = array(
					'title'    => $current_post->post_title,
					'css'      => get_post_meta( $post_id, 'gsm_css', true ),
					'js'       => get_post_meta( $post_id, 'gsm_js', true ),
					'content'  => $current_post->post_content,
					'isActive' => false,
				);
			}
		}
		wp_reset_postdata();

		// Set the headers for a JSON file download.
		header( 'Content-Type: application/json' );
		header( 'Content-Disposition: attachment; filename=' . $export_name );
		echo json_encode( $export_data, JSON_PRETTY_PRINT );
		exit;
	}


}

new GSM_Styles_Exporter();
