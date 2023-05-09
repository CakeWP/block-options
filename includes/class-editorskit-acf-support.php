<?php
/**
 * Load assets for our blocks.
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load general assets for our blocks.
 *
 * @since 1.0.0
 */
class EditorsKit_ACF_Support {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_ACF_Support
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_ACF_Support();
		}
	}

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $url
	 */
	private $url;

	/**
	 * The Plugin version.
	 *
	 * @var string $version
	 */
	private $version;

	/**
	 * The Plugin version.
	 *
	 * @var string $slug
	 */
	private $slug;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->version = EDITORSKIT_VERSION;
		$this->slug    = 'editorskit';
		$this->url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_action(
			'rest_api_init',
			function () {
				if ( class_exists( 'ACF' ) ) {
					register_rest_route(
						'editorskit/v1',
						'/acf',
						array(
							'methods'             => 'GET',
							'permission_callback' => array( $this, 'permissions' ),
							'callback'            => array( $this, 'api' ),
						)
					);
				} else {
					register_rest_route(
						'editorskit/v1',
						'/acf',
						array(
							'methods'             => 'GET',
							'permission_callback' => array( $this, 'permissions' ),
							'callback'            => function () {
								return (object) array();
							},
						)
					);
				}
			}
		);
	}

	/**
	 * REST API data.
	 *
	 * @param mixed $data The api response.
	 *
	 * @return object Returns new api response.
	 */
	public function api( $data ) {
		$fields = array();
		if ( function_exists( 'acf_get_field_groups' ) ) {

			$groups = acf_get_field_groups();
			if ( is_array( $groups ) ) {

				foreach ( $groups as $group ) {

					$fields_group = acf_get_fields( $group );
					if ( ! empty( $fields_group ) ) {

						foreach ( $fields_group as $k => $fg ) {
							$fields[ $fg['key'] ] = $fg['label'];
						}
					}
				}
			}
		} else {
			$groups = apply_filters( 'acf/get_field_groups', array() ); // phpcs:ignore
			if ( is_array( $groups ) ) {
				foreach ( $groups as $group ) {
					$fields_group = apply_filters( 'acf/field_group/get_fields', array(), $group['id'] ); // phpcs:ignore
					if ( ! empty( $fields_group ) ) {
						foreach ( $fields_group as $k => $fg ) {
							$fields[ $fg['key'] ] = $fg['label'];
						}
					}
				}
			}
		}

		return (object) array_reverse( $fields );
	}

	/**
	 * Permissions callback for requests
	 *
	 * Checks if user is logged in.
	 *
	 * @since 0.1.0
	 *
	 * @return bool
	 */
	public function permissions() {
		return is_user_logged_in();
	}

}

EditorsKit_ACF_Support::register();
