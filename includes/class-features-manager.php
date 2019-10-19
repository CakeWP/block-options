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
		$this->_version 	= EDITORSKIT_VERSION;
		$this->_slug    	= 'editorskit';
		$this->_url     	= untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		add_filter( 'block_editor_settings', array( $this, 'block_editor_settings' ), 10, 2 );
	}

	public function block_editor_settings( $editor_settings, $post ){
		if( !isset( $editor_settings[ $this->_slug ] ) ){
			$editor_settings[ $this->_slug ] = array(
				'visibility' => array(
					'name'  => 'visibility',
					'label' => __( 'Visibility', $this->_slug ),
					'items' => array(
						'acf' 		 => array(
							'name'  => 'acf',
							'label' => __( 'ACF Support', $this->_slug ),
							'value' => true,
						),
						'devices'	 => array(
							'name'  => 'devices',
							'label' => __( 'Devices', $this->_slug ),
							'value' => true,
						),
						'logic' 	 => array(
							'name'  => 'logic',
							'label' => __( 'Display Logic', $this->_slug ),
							'value' => true,
						),
						'userState' => array(
							'name'  => 'userState',
							'label' => __( 'User Login State', $this->_slug ),
							'value' => true,
						),
					)
				),
				'formats' => array(
					'name'  => 'formats',
					'label' => __( 'Formats', $this->_slug ),
					'items' => array(
						'clearFormatting'	=> array(
							'name'  => 'clearFormatting',
							'label' => __( 'Clear Formatting', $this->_slug ),
							'value' => true,
						),
						'highlight'	=> array(
							'name'  => 'highlight',
							'label' => __( 'Highlighted Text Color', $this->_slug ),
							'value' => true,
						),
						'justify'	=> array(
							'name'  => 'justify',
							'label' => __( 'Justified Alignment', $this->_slug ),
							'value' => true,
						),
						'link'	=> array(
							'name'  => 'link',
							'label' => __( 'Link with "rel" Attributes', $this->_slug ),
							'value' => true,
						),
						'nonbreakingSpace' 	 => array(
							'name'  => 'nonbreakingSpace',
							'label' => __( 'Nonbreaking Space', $this->_slug ),
							'value' => true,
						),
						'subscript'	=> array(
							'name'  => 'subscript',
							'label' => __( 'Subscript', $this->_slug ),
							'value' => true,
						),
						'superscript'	=> array(
							'name'  => 'superscript',
							'label' => __( 'Superscript', $this->_slug ),
							'value' => true,
						),
						'colors'	=> array(
							'name'  => 'colors',
							'label' => __( 'Text Color', $this->_slug ),
							'value' => true,
						),
						'underline'	=> array(
							'name'  => 'underline',
							'label' => __( 'Underline', $this->_slug ),
							'value' => true,
						),
						'uppercase'	=> array(
							'name'  => 'uppercase',
							'label' => __( 'Uppercase', $this->_slug ),
							'value' => true,
						),
					)
				),
				'writing' => array(
					'name'  => 'writing',
					'label' => __( 'Writing', $this->_slug ),
					'items' => array(
						'readingTime'	=> array(
							'name'  => 'readingTime',
							'label' => __( 'Estimated Reading Time', $this->_slug ),
							'value' => true,
						),
						'headingLabel'	=> array(
							'name'  => 'headingLabel',
							'label' => __( 'Heading Block Label', $this->_slug ),
							'value' => true,
						),
						'markdown'	=> array(
							'name'  => 'markdown',
							'label' => __( 'Markdown', $this->_slug ),
							'value' => true,
						),
						'transformEmpty'	=> array(
							'name'  => 'transformEmpty',
							'label' => __( 'Transform 4 Empty Paragraphs to Spacer Block', $this->_slug ),
							'value' => true,
						),
					)
				),
				'options' => array(
					'name'  => 'options',
					'label' => __( 'Block Options', $this->_slug ),
					'items' => array(
						'copy' 	 => array(
							'name'  => 'copy',
							'label' => __( 'Copy Selected Block(s)', $this->_slug ),
							'value' => true,
						),
						'navigator' 	 => array(
							'name'  => 'navigator',
							'label' => __( 'Block Navigator', $this->_slug ),
							'value' => true,
						),
						'export' 	 => array(
							'name'  => 'export',
							'label' => __( 'Export as JSON', $this->_slug ),
							'value' => true,
						),
						'mediaTextLayout' => array(
							'name'  => 'mediaTextLayout',
							'label' => __( 'Media Text Block Layout', $this->_slug ),
							'value' => true,
						),
						'mediaTextLink' => array(
							'name'  => 'mediaTextLink',
							'label' => __( 'Media Text Block Link', $this->_slug ),
							'value' => true,
						),
						'setAsFeatured' => array(
							'name'  => 'setAsFeatured',
							'label' => __( 'Set Image Block as Featured', $this->_slug ),
							'value' => true,
						),
					)
				),
				'tools' => array(
					'name'  => 'tools',
					'label' => __( 'Tools', $this->_slug ),
					'items' => array(
						'guidelines' => array(
							'name'  => 'guidelines',
							'label' => __( 'Block Guide Lines', $this->_slug ),
							'value' => true,
						),
						'codeHighlight' => array(
							'name'  => 'codeHighlight',
							'label' => __( 'Code Editor Syntax Highlight', $this->_slug ),
							'value' => true,
						),
						'customClassNames' 	 => array(
							'name'  => 'customClassNames',
							'label' => __( 'Custom Class Names', $this->_slug ),
							'value' => true,
						),
						'dragAndDropFeatured' => array(
							'name'  => 'dragAndDropFeatured',
							'label' => __( 'Drag and Drop Featured Image', $this->_slug ),
							'value' => true,
						),
						'height' => array(
							'name'  => 'height',
							'label' => __( 'Editor Min-Height', $this->_slug ),
							'value' => true,
						),
						'autosave' 	 => array(
							'name'  => 'autosave',
							'label' => __( 'Toggle Auto Save', $this->_slug ),
							'value' => true,
						),
						'help' 	 => array(
							'name'  => 'help',
							'label' => __( 'Help, tips and tricks', $this->_slug ),
							'value' => true,
						),
						'toggleTitle' 	 => array(
							'name'  => 'toggleTitle',
							'label' => __( 'Toggle Title Visibility', $this->_slug ),
							'value' => true,
						),
						'scrollDown' => array(
							'name'  => 'scrollDown',
							'label' => __( 'View Custom Fields', $this->_slug ),
							'value' => true,
						),
					)
				),
				'shortcuts' => array(
					'name'  => 'shortcuts',
					'label' => __( 'Shortcuts', $this->_slug ),
					'items' => array(
						'selectParent' 	 => array(
							'name'  => 'selectParent',
							'label' => __( 'Select Parent Block', $this->_slug ),
							'value' => true,
						)
					)
				),
			);
		}

		return $editor_settings;
	}

}

EditorsKit_Features_Manager::register();
