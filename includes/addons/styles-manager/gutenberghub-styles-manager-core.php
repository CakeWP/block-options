<?php
/**
 * Gutenberghub_Styles_Manager_Core Class
 *
 * This class is responsible for core features, including adding a new admin menu.
 *
 * @package GutenberghubStylesManager
 * @since   1.0.0
 */

/**
 * Core.
 */
class Gutenberghub_Styles_Manager_Core {

	/**
	 * Menu slug for the styles manager.
	 *
	 * @since  1.0.0
	 * @access public
	 * @var    string
	 */
	public static $menu_slug = 'gutenberghub-styles-manager';

	/**
	 * Constructor method.
	 */
	public function __construct() {
		add_action( 'after_editorskit_menu_registration', array( $this, 'add_styles_manager_menu' ) );
	}

	/**
	 * Adds the styles manager menu to the WordPress admin.
	 *
	 * @since 1.0.0
	 */
	public function add_styles_manager_menu() {
		add_submenu_page(
			'editorskit-getting-started',
			__( 'Styles Manager', 'gutenberghub-styles-manager' ),
			__( 'Styles Manager', 'gutenberghub-styles-manager' ),
			'manage_options',
			static::$menu_slug,
			array( $this, 'render_styles_manager_page' ),
		);
	}

	/**
	 * Render the styles manager admin page.
	 *
	 * @since 1.0.0
	 */
	public function render_styles_manager_page() {
		?>  
			<div id="gutenberghub-styles-manager-root"></div>
		<?php
	}
}

new Gutenberghub_Styles_Manager_Core();
