<?php
/**
 * Add editor settings for EditorsKit features manager.
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
class EditorsKit_Features_Manager {



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
			self::$instance = new EditorsKit_Features_Manager();
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
	 * Filters the settings to pass to the block editor.
	 *
	 * @param array  $editor_settings The editor settings.
	 * @param object $post The post being edited.
	 *
	 * @return array Returns updated editors settings.
	 */
	public function block_editor_settings( $editor_settings, $post ) {

		if ( ! isset( $editor_settings['editorskit'] ) ) {
			$items = array(
				'acf'       => array(
					'name'  => 'acf',
					'label' => __( 'ACF Support', 'block-options' ),
					'value' => true,
				),
				'devices'   => array(
					'name'  => 'devices',
					'label' => __( 'Devices', 'block-options' ),
					'value' => true,
				),
				'userState' => array(
					'name'  => 'userState',
					'label' => __( 'User Login State', 'block-options' ),
					'value' => true,
				),
			);

			if ( defined( 'EDITORSKIT_ALLOW_EVAL' ) && true === EDITORSKIT_ALLOW_EVAL ) {
				$items['logic'] = array(
					'name'  => 'logic',
					'label' => __( 'Display Logic', 'block-options' ),
					'value' => true,
				);
			}

			$editor_settings['editorskit'] = array(
				'visibility' => array(
					'name'  => 'visibility',
					'label' => __( 'Visibility', 'block-options' ),
					'items' => $items,
				),
				'formats'    => array(
					'name'  => 'formats',
					'label' => __( 'Formats', 'block-options' ),
					'items' => array(
						'abbreviation'     => array(
							'name'  => 'abbreviation',
							'label' => __( 'Abbreviation', 'block-options' ),
							'value' => true,
						),
						'clearFormatting'  => array(
							'name'  => 'clearFormatting',
							'label' => __( 'Clear Formatting', 'block-options' ),
							'value' => true,
						),
						'highlight'        => array(
							'name'  => 'highlight',
							'label' => __( 'Highlighted Text Color', 'block-options' ),
							'value' => true,
						),
						'indent'           => array(
							'name'  => 'indent',
							'label' => __( 'Indents', 'block-options' ),
							'value' => true,
						),
						'justify'          => array(
							'name'  => 'justify',
							'label' => __( 'Justified Alignment', 'block-options' ),
							'value' => true,
						),
						'link'             => array(
							'name'  => 'link',
							'label' => __( 'Link with "rel" Attributes', 'block-options' ),
							'value' => true,
						),
						'nonbreakingSpace' => array(
							'name'  => 'nonbreakingSpace',
							'label' => __( 'Nonbreaking Space', 'block-options' ),
							'value' => true,
						),
						'charmap'          => array(
							'name'  => 'charmap',
							'label' => __( 'Special Characters', 'block-options' ),
							'value' => true,
						),
						'subscript'        => array(
							'name'  => 'subscript',
							'label' => __( 'Subscript', 'block-options' ),
							'value' => true,
						),
						'superscript'      => array(
							'name'  => 'superscript',
							'label' => __( 'Superscript', 'block-options' ),
							'value' => true,
						),
						'underline'        => array(
							'name'  => 'underline',
							'label' => __( 'Underline', 'block-options' ),
							'value' => true,
						),
						'uppercase'        => array(
							'name'  => 'uppercase',
							'label' => __( 'Uppercase', 'block-options' ),
							'value' => true,
						),
					),
				),
				'writing'    => array(
					'name'  => 'writing',
					'label' => __( 'Writing', 'block-options' ),
					'items' => array(
						'readingTime'    => array(
							'name'  => 'readingTime',
							'label' => __( 'Estimated Reading Time', 'block-options' ),
							'value' => true,
						),
						'headingLabel'   => array(
							'name'  => 'headingLabel',
							'label' => __( 'Heading Block Label', 'block-options' ),
							'value' => true,
						),
						'markdown'       => array(
							'name'  => 'markdown',
							'label' => __( 'Markdown', 'block-options' ),
							'value' => true,
						),
						'transformEmpty' => array(
							'name'  => 'transformEmpty',
							'label' => __( 'Transform 3 Empty Paragraphs to Spacer Block', 'block-options' ),
							'value' => true,
						),
					),
				),
				'options'    => array(
					'name'  => 'options',
					'label' => __( 'Block Options', 'block-options' ),
					'items' => array(
						'buttonFullwidth'    => array(
							'name'  => 'buttonFullwidth',
							'label' => __( 'Button Block Full Width', 'block-options' ),
							'value' => true,
						),
						'columnsBackground'  => array(
							'name'  => 'columnsBackground',
							'label' => __( 'Columns Block Background Color', 'block-options' ),
							'value' => true,
						),
						'navigator'          => array(
							'name'  => 'navigator',
							'label' => __( 'Block Navigator', 'block-options' ),
							'value' => true,
						),
						'export'             => array(
							'name'  => 'export',
							'label' => __( 'Export as JSON', 'block-options' ),
							'value' => true,
						),
						'linkBlockToolbar'   => array(
							'name'  => 'linkBlockToolbar',
							'label' => __( 'Link Toolbar for Cover, Group & Column', 'block-options' ),
							'value' => true,
						),
						'listBlockFontSize'  => array(
							'name'  => 'listBlockFontSize',
							'label' => __( 'List Block Font Size', 'block-options' ),
							'value' => true,
						),
						'listBlockTextColor' => array(
							'name'  => 'listBlockTextColor',
							'label' => __( 'List Block Text Color', 'block-options' ),
							'value' => true,
						),
						'mediaTextLayout'    => array(
							'name'  => 'mediaTextLayout',
							'label' => __( 'Media Text Block Layout', 'block-options' ),
							'value' => true,
						),
						'setAsFeatured'      => array(
							'name'  => 'setAsFeatured',
							'label' => __( 'Set Image Block as Featured', 'block-options' ),
							'value' => true,
						),
					),
				),
				'tools'      => array(
					'name'  => 'tools',
					'label' => __( 'Tools', 'block-options' ),
					'items' => array(
						'guidelines'          => array(
							'name'  => 'guidelines',
							'label' => __( 'Block Guide Lines', 'block-options' ),
							'value' => true,
						),
						'codeHighlight'       => array(
							'name'  => 'codeHighlight',
							'label' => __( 'Code Editor Syntax Highlight', 'block-options' ),
							'value' => true,
						),
						'customClassNames'    => array(
							'name'  => 'customClassNames',
							'label' => __( 'Custom Class Names', 'block-options' ),
							'value' => true,
						),
						'dragAndDropFeatured' => array(
							'name'  => 'dragAndDropFeatured',
							'label' => __( 'Drag and Drop Featured Image', 'block-options' ),
							'value' => true,
						),
						'height'              => array(
							'name'  => 'height',
							'label' => __( 'Editor Min-Height', 'block-options' ),
							'value' => true,
						),
						'gradientControls'    => array(
							'name'  => 'gradientControls',
							'label' => __( 'Gradient Controls', 'block-options' ),
							'value' => true,
						),
						'help'                => array(
							'name'  => 'help',
							'label' => __( 'Help, tips and tricks', 'block-options' ),
							'value' => true,
						),
						'toggleTitle'         => array(
							'name'  => 'toggleTitle',
							'label' => __( 'Toggle Title Visibility', 'block-options' ),
							'value' => true,
						),
						'scrollDown'          => array(
							'name'  => 'scrollDown',
							'label' => __( 'View Custom Fields', 'block-options' ),
							'value' => true,
						),
						'livePreviewWithResponsiveControls' => array(
							'name'  => 'livePreviewWithResponsiveControls',
							'label' => __( 'Live Preview with Responsive Controls', 'block-options' ),
							'value' => true,
						),
						'moveableSidebar'     => array(
							'name'  => 'moveableSidebar',
							'label' => __( 'Use Sidebar as Moveable Modal' ),
							'value' => true,
						),
					),
				),
				'shortcuts'  => array(
					'name'  => 'shortcuts',
					'label' => __( 'Shortcuts', 'block-options' ),
					'items' => array(
						'selectParent' => array(
							'name'  => 'selectParent',
							'label' => __( 'Select Parent Block', 'block-options' ),
							'value' => true,
						),
					),
				),
			);
		}

		return $editor_settings;
	}
}

EditorsKit_Features_Manager::register();
