<?php
/**
 * Custom CSS classes with custom filter
 *
 * @package   EditorsKit
 * @author    Jeffrey Carandang from EditorsKit
 * @link      https://editorskit.com
 * @license   http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * EditorsKit_Custom_CSS_Classes Class
 *
 * @since 1.9.0
 */
class EditorsKit_Custom_CSS_Classes {

	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Features_Manager
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Custom_CSS_Classes();
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

		if ( function_exists( 'get_block_editor_settings' ) ) {
			add_filter( 'block_editor_settings_all', array( $this, 'block_editor_settings' ), 10, 2 );
		} else {
			add_filter( 'block_editor_settings', array( $this, 'block_editor_settings' ), 10, 2 );
		}
	}

	/**
	 * Add new block editor settings for custom classes.
	 *
	 * @param array  $editor_settings The editor settings.
	 * @param object $post The post being edited.
	 *
	 * @return array Returns updated editors settings.
	 */
	public function block_editor_settings( $editor_settings, $post ) {
		if ( ! isset( $editor_settings[ $this->slug . 'CustomClassNames' ] ) ) {
			$defaults = array(
				'ek-padding--sm',
				'sm:ek-padding--sm',
				'md:ek-padding--sm',
				'lg:ek-padding--sm',
				'ek-padding--md',
				'sm:ek-padding--md',
				'md:ek-padding--md',
				'lg:ek-padding--md',
				'ek-padding--lg',
				'sm:ek-padding--lg',
				'md:ek-padding--lg',
				'lg:ek-padding--lg',
				'ek-padding--xl',
				'sm:ek-padding-xl',
				'md:ek-padding-xl',
				'lg:ek-padding-xl',
				'ek-margin--sm',
				'sm:ek-margin--sm',
				'md:ek-margin--sm',
				'lg:ek-margin--sm',
				'ek-margin--md',
				'sm:ek-margin--md',
				'md:ek-margin--md',
				'lg:ek-margin--md',
				'ek-margin--lg',
				'sm:ek-margin--lg',
				'md:ek-margin--lg',
				'lg:ek-margin--lg',
				'ek-margin--xl',
				'sm:ek-margin-xl',
				'md:ek-margin-xl',
				'lg:ek-margin-xl',
				'ek-flex',
				'sm:ek-flex',
				'md:ek-flex',
				'lg:ek-flex',
				'ek-flex-initial',
				'sm:ek-flex-initial',
				'md:ek-flex-initial',
				'lg:ek-flex-initial',
				'ek-flex-1',
				'sm:ek-flex-1',
				'md:ek-flex-1',
				'lg:ek-flex-1',
				'ek-flex-auto',
				'sm:ek-flex-auto',
				'md:ek-flex-auto',
				'lg:ek-flex-auto',
				'ek-flex-none',
				'sm:ek-flex-none',
				'md:ek-flex-none',
				'lg:ek-flex-none',
				'ek-flex-no-wrap',
				'sm:ek-flex-no-wrap',
				'md:ek-flex-no-wrap',
				'lg:ek-flex-no-wrap',
				'ek-flex-wrap',
				'sm:ek-flex-wrap',
				'md:ek-flex-wrap',
				'lg:ek-flex-wrap',
				'ek-flex-wrap-reverse',
				'sm:ek-flex-wrap-reverse',
				'md:ek-flex-wrap-reverse',
				'lg:ek-flex-wrap-reverse',
				'ek-flex-row',
				'sm:ek-flex-row',
				'md:ek-flex-row',
				'lg:ek-flex-row',
				'ek-flex-row-reverse',
				'sm:ek-flex-row-reverse',
				'md:ek-flex-row-reverse',
				'lg:ek-flex-row-reverse',
				'ek-flex-col',
				'sm:ek-flex-col',
				'md:ek-flex-col',
				'lg:ek-flex-col',
				'ek-flex-col-reverse',
				'sm:ek-flex-col-reverse',
				'md:ek-flex-col-reverse',
				'lg:ek-flex-col-reverse',
				'ek-items-stretch',
				'sm:ek-items-stretch',
				'md:ek-items-stretch',
				'lg:ek-items-stretch',
				'ek-items-start',
				'sm:ek-items-start',
				'md:ek-items-start',
				'lg:ek-items-start',
				'ek-items-center',
				'sm:ek-items-center',
				'md:ek-items-center',
				'lg:ek-items-center',
				'ek-items-end',
				'sm:ek-items-end',
				'md:ek-items-end',
				'lg:ek-items-end',
				'ek-items-baseline',
				'sm:ek-items-baseline',
				'md:ek-items-baseline',
				'lg:ek-items-baseline',
				'ek-justify-start',
				'sm:ek-justify-start',
				'md:ek-justify-start',
				'lg:ek-justify-start',
				'ek-justify-center',
				'sm:ek-justify-center',
				'md:ek-justify-center',
				'lg:ek-justify-center',
				'ek-justify-end',
				'sm:ek-justify-end',
				'md:ek-justify-end',
				'lg:ek-justify-end',
				'ek-justify-between',
				'sm:ek-justify-between',
				'md:ek-justify-between',
				'lg:ek-justify-between',
				'ek-justify-around',
				'sm:ek-justify-around',
				'md:ek-justify-around',
				'lg:ek-justify-around',
				'ek-rounded-none',
				'ek-rounded-sm',
				'ek-rounded-md',
				'ek-rounded-lg',
				'ek-rounded-xl',
				'ek-rounded-full',
				'ek-align-slim',
				'ek-w-full',
				'sm:ek-w-full',
				'md:ek-w-full',
			);

			$editor_settings[ $this->slug . 'CustomClassNames' ] = apply_filters( 'editorskit_block_editor_classnames', $defaults );
		}

		return $editor_settings;
	}
}

EditorsKit_Custom_CSS_Classes::register();
