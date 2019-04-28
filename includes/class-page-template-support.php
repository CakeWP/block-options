<?php
/**
 * Add theme support for template body class
 * 
 * @package   EditorsKit
 * @author    Jeffrey Carandang
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */


/*
	add_theme_support('editorskit-template-body-class', array(
		'page-templates/landing.php' => array(
			'default' 	=> '500px',
			'wide' 		=> '900px',
			'full' 		=> '1200px',
		)
	));
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
class EditorsKit_Page_Template_Support {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Page_Template_Support
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Page_Template_Support();
		}
	}

	/**
	 * The base URL path (without trailing slash).
	 *
	 * @var string $_url
	 */
	private $_url;

	/**
	 * The Plugin version.
	 *
	 * @var string $_version
	 */
	private $_version;

	/**
	 * The Plugin version.
	 *
	 * @var string $_slug
	 */
	private $_slug;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->_version = EDITORSKIT_VERSION;
		$this->_slug    = 'editorskit';
		$this->_url     = untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_action( 'after_setup_theme', array( $this, 'theme_support' ), 100 );
	}

	/**
	 * Support custom theme support for editorskit-template-body-class
	 *
	 * @access public
	 */
	public function theme_support() {

		if( current_theme_supports('editorskit-template-body-class') ){
			$theme_support = get_theme_support( 'editorskit-template-body-class' );
			if( $theme_support ){
				add_filter( 'admin_body_class', array( $this, 'body_class_support' ) );

				if( is_array( $theme_support ) && !empty( $theme_support ) ){
					global $pagenow;

					if( !empty( $pagenow ) && in_array( $pagenow, array( 'post-new.php', 'post.php', 'edit.php' ) ) ){
						add_action( 'admin_head', array( $this, 'template_width_css' ), 100 );
					}
					
				}
			}
		}
	}

	public function body_class_support( $classes ){
		global $post;

		$classes .= 'editorskit-body-class-on ';

		if( isset( $post->ID ) ){
			$template = str_replace( '/', '-', get_page_template_slug( $post->ID ) );

			if( empty( $template ) ){
				$template = 'default';
			}

			$classes .= 'page-template-' . str_replace( '.', '-', $template );
		}

		return $classes;
	}

	public function template_width_css(){
		$theme_support  = get_theme_support( 'editorskit-template-body-class' );
		$selector  		= ' .editor-styles-wrapper .wp-block';
		$style 	   		= '<style id="editorskit-body-class" type="text/css" media="screen">';

		foreach ( $theme_support as $templates ) {
			if( is_array( $templates ) && !empty( $templates ) ){
				foreach ( $templates as $template => $sizes ) {
					$selected = str_replace( '/', '-', $template );
					$block = '.page-template-' . str_replace( '.', '-', $selected ) . $selector;

					if( is_array( $sizes ) && !empty( $sizes ) ){
						foreach ( $sizes as $size => $width ) {
							if( $size == 'default' ){
								$style .= $block . '{ max-width: '. $width .'; }';
							}else{
								$style .= $block . '[data-align="'. $size  .'"]{ max-width: '. $width .'; }';
							}
						}
					}
				}
			}
		}

		echo $style .= '</style>';
	}

}

EditorsKit_Page_Template_Support::register();
