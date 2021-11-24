<?php
/**
 * Live previewer for editorskit
 *
 * @package   EditorsKit
 * @author    Zafar Kamal
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

/**
 * Handles all the live previewer assets loading
 */
class Editorskit_Live_Previewer {

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register' ) );
	}

	/**
	 * Will check if the current post is editorskit live preview page.
	 *
	 * @return bool - True if live preview, otherwise false.
	 */
	public function is_editorskit_live_preview() {
		return isset( $_GET['editorskitlivepreview'] ) && 'true' === $_GET['editorskitlivepreview'];
	}

	/**
	 * All assets should be registered here.
	 *
	 * @return void
	 */
	public function register() {
		if ( ! $this->is_editorskit_live_preview() ) {
			return;
		}

		// TODO: Do some magic.
	}

}

new Editorskit_Live_Previewer();
