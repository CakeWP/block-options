<?php
/**
 * Editorskit Block Locking
 *
 * @since   1.33.7
 * @author  zafarKamal
 * @package Editorskit
 */

/**
 * Class that filters block type args to also include editorskit block locking attributes.
 */
class Editorskit_Block_Locking {

	/**
	 * Additional locking attributes
	 *
	 * @var array
	 */
	private $locking_attributes = array(
		'editorskitEditingLockSettings' => array( 'type' => 'boolean' ),
		'editorskitEditingLockToolbar'  => array( 'type' => 'boolean' ),
	);

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {

		/**
		 * We need to attach the locking attributes in block type registry.
		 * because the SSR renderer controller, does not allow any additional parameters to be included in the
		 * request params, therefore adding these resolves the client side dynamic block breaking issues.
		 *
		 * @see https://github.com/WordPress/wordpress-develop/blob/2648a5f984b8abf06872151898e3a61d3458a628/src/wp-includes/rest-api/endpoints/class-wp-rest-block-renderer-controller.php#L68
		 */
		add_filter(
			'register_block_type_args',
			function( $args, $block_type_name ) {

				if ( ! isset( $args['attributes'] ) ) {
					$args['attributes'] = array();
				}

				$args['attributes'] = array_merge( $args['attributes'], $this->locking_attributes );

				return $args;
			},
			10,
			2
		);

	}

}

new Editorskit_Block_Locking();
