<?php
/**
 * Gutenberghub Template Library Connections Model.
 *
 * @package Gutenberghub_Template_Library
 */

/**
 * Connections.
 */
class Gutenberghub_Template_Library_Connections {

	/**
	 * The option name used to store connections in the database.
	 *
	 * @var string
	 */
	private static $option_name = 'gutenberghub-template-library-connections';

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->register();
	}

	/**
	 * Registers the necessary connections store.
	 */
	public function register() {
		register_setting(
			'general',
			self::$option_name,
			array(
				'type'         => 'array',
				'description'  => 'Stores the Gutenberghub Template Library connections.',
				'show_in_rest' => true,
				'default'      => array(),
			)
		);
	}

	/**
	 * Get all available connections.
	 *
	 * @param bool $hide_key - Should hide the access key?.
	 *
	 * @return array Array of connection objects.
	 */
	public static function get_connections( $hide_key = true ) {
		$connections = get_option( self::$option_name, array() );

		if ( $hide_key ) {
			// Hide the access_key when returning the connections.
			foreach ( $connections as &$connection ) {
				unset( $connection['access_key'] );
			}
		}

		return $connections;
	}

	/**
	 * Add a new connection.
	 *
	 * @param string     $connection_uri The connection URI.
	 * @param string     $access_key The access key.
	 * @param int|string $product_id Gutenberghub's Product id.
	 * @param array      $metadata Any additional metadata.
	 *
	 * @return array|false The newly created connection or false on failure.
	 */
	public static function add_connection( $connection_uri, $access_key, $product_id, $metadata = array() ) {
		$connections = self::get_connections( false );

		// Generate a unique ID for the new connection.
		$connection_id = wp_generate_uuid4();

		$new_connection = array(
			'id'             => $connection_id,
			'connection_uri' => $connection_uri,
			'access_key'     => $access_key,
			'product_id'     => $product_id,
			'metadata'       => $metadata,
		);

		// Merging cloud details.
		$processed_connection = self::process_connection( $connection_uri, $access_key, $product_id );

		if ( false === $processed_connection || is_null( $processed_connection ) ) {
			return false;
		}

		$new_connection = array_merge( $new_connection, $processed_connection );

		$connections[] = $new_connection;
		update_option( self::$option_name, $connections );

		return $new_connection;
	}

	/**
	 * Processes the connection, by actually pinging the cloud and retrieving details.
	 *
	 * @param string     $connection_uri - Connection uri.
	 * @param string     $access_key - Connection Access key.
	 * @param int|string $product_id - Gutenberghub's Product id.
	 *
	 * @return array|false - Processed details, otherwise false.
	 */
	public static function process_connection( $connection_uri, $access_key, $product_id ) {

		$ping_uri = add_query_arg(
			array(
				'uuid'               => wp_generate_uuid4(),
				'terracloud-details' => true,
				'product_id'         => $product_id,
				'terracloud-key'     => rawurlencode( $access_key ),
			),
			$connection_uri
		);

		$response = wp_remote_get(
			$ping_uri,
			array(
				'method'  => 'GET',
				'headers' => array(
					'Accept'       => 'application/json',
					'Content-Type' => 'application/json',
				),
			)
		);

		if ( is_wp_error( $response ) ) {
			return false;
		}

		$response_body = json_decode( wp_remote_retrieve_body( $response ), true );

		return $response_body;
	}

	/**
	 * Delete a connection by its unique ID.
	 *
	 * @param string $connection_id The ID of the connection to delete.
	 * @return bool True on successful deletion, false if the connection was not found.
	 */
	public static function delete_connection( $connection_id ) {
		$connections = self::get_connections( false );

		foreach ( $connections as $index => $connection ) {
			if ( $connection['id'] === $connection_id ) {
				unset( $connections[ $index ] );
				update_option( self::$option_name, array_values( $connections ) ); // Re-index the array
				return true;
			}
		}

		return false;
	}

	/**
	 * Obtains a specific connection.
	 *
	 * @param string $connection_id The ID of the connection to obtain.
	 * @return false|array Connection if found, otherwise false.
	 */
	public static function get_connection( $connection_id ) {
		$is_multi_connection = self::is_multi_connection( $connection_id );

		$connections = $is_multi_connection ? self::get_merged_connections( false ) : self::get_connections( false );
		$connection  = false;

		foreach ( $connections as $index => $current_connection ) {
			if ( $current_connection['id'] === $connection_id ) {
				$connection = $current_connection;
				break;
			}
		}

		return $connection;
	}

	/**
	 * Checks if the given connection is a multi connection.
	 *
	 * @param   string $connection_id - Connection id to check.
	 * @return  bool True if multi connections, otherwise false.
	 */
	public static function is_multi_connection( $connection_id ) {
		return false !== stripos( $connection_id, '||' );
	}

	/**
	 * Get all available connections (merges the same connection).
	 *
	 * @param bool $hide_key - Hides the access key.
	 *
	 * @return array
	 */
	public static function get_merged_connections( $hide_key = true ) {
		$connections        = self::get_connections( $hide_key );
		$merged_connections = array();

		foreach ( $connections as $connection ) {
			$is_already_connected = isset( $merged_connections[ $connection['connection_uri'] ] );

			if ( $is_already_connected ) {
				$previously_merged_connection = $merged_connections[ $connection['connection_uri'] ];

				$connection_override = array(
					'isMultiple' => true,
					'hideKey'    => $hide_key,
					'id'         => join(
						'||',
						array_merge(
							explode( '||', $previously_merged_connection['id'] ),
							array(
								$connection['id'],
							)
						)
					),
					'product_id' => join(
						'||',
						array_merge(
							explode( '||', $previously_merged_connection['product_id'] ),
							array(
								$connection['product_id'],
							)
						)
					),
				);

				if ( false === $hide_key ) {
					$connection_override['access_key'] = join(
						'||',
						array_merge(
							explode( '||', $previously_merged_connection['access_key'] ),
							array(
								$connection['access_key'],
							)
						)
					);
				}

				$merged_connections[ $connection['connection_uri'] ] = array_merge(
					$previously_merged_connection,
					$connection_override
				);

			} else {
				$merged_connections[ $connection['connection_uri'] ] = $connection;
			}
		}

		return array_values( $merged_connections );
	}
}
