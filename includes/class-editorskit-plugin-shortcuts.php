<?php
/**
 * Editorskit Plugin Shortcuts
 *
 * @package Editorskit
 */

/**
 * Responsible for adding necessary links and plugin shortcuts in the WordPress.
 */
class Editorskit_Plugin_Shortcuts {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_filter( 'plugin_action_links', array( $this, 'merge_plugin_link' ), 10, 2 );
	}

	/**
	 * Merges the necessary plugin links in the plugin row.
	 *
	 * @param string[] $links - Current links.
	 * @param string   $plugin_filename - Plugin file name.
	 *
	 * @return string[] - Modified links.
	 */
	public function merge_plugin_link( $links, $plugin_filename ) {
		if ( $plugin_filename === plugin_basename( EDITORSKIT_PLUGIN_FILE ) ) {
			$settings_link = sprintf(
				'<a href="%1$s">%2$s</a>',
				admin_url( 'options-general.php?page=editorskit-getting-started' ),
				__( 'Settings', 'block-options' )
			);

			$support_link = sprintf(
				'<a href="%1$s" style="font-weight:bold;" target="__blank">%2$s</a>',
				'https://www.buymeacoffee.com/munirkamal',
				__( 'Show Support', 'block-options' )
			);

			array_unshift( $links, $support_link, $settings_link );
		}

		return $links;
	}

};

new Editorskit_Plugin_Shortcuts();
