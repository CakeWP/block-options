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
class EditorsKit_Render_Block {


	/**
	 * This plugin's instance.
	 *
	 * @var EditorsKit_Render_Block
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new EditorsKit_Render_Block();
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
	 * The block attributes.
	 *
	 * @var string $_attributes
	 */
	private $_attributes;

	/**
	 * The Constructor.
	 */
	private function __construct() {
		$this->_version 	= EDITORSKIT_VERSION;
		$this->_slug    	= 'editorskit';
		$this->_url     	= untrailingslashit( plugins_url( '/', dirname( __FILE__ ) ) );

		if( !is_admin() ){
			add_action( 'render_block', array( $this, 'render_block' ), 5, 2 );
		}
		
	}

	private function block_attributes( $block ){
		if ( isset( $block['attrs'] ) && isset( $block['attrs']['editorskit'] ) && is_array( $block['attrs'] ) ) {
			return $block['attrs']['editorskit'];
		}

		return [];
	}

	private function old_attributes( $block ){
		if ( isset( $block['attrs'] ) && isset( $block['attrs']['blockOpts'] ) && is_array( $block['attrs'] ) ) {
			return $block['attrs']['blockOpts'];
		}

		return [];
	}

	private function user_state_visibility( $block_content ){

		// add compatibility for previous version
		if( !isset( $this->_attributes['migrated'] ) || ( isset( $this->_attributes['migrated'] ) && ! $this->_attributes['migrated'] ) ){
			if( isset( $this->_attributes['old']['state'] ) && !empty( $this->_attributes['old']['state'] ) ){
				//do state action here
				if( $this->_attributes['old']['state'] == 'out' && is_user_logged_in() ){
					return '';
				}else if( $this->_attributes['old']['state'] == 'in' && !is_user_logged_in() ){
					return '';
				}
			}
		}

		if( isset( $this->_attributes['loggedin'] ) && ! $this->_attributes['loggedin']
			&& is_user_logged_in() 
		){
			return '';
		}

		if( isset( $this->_attributes['loggedout'] ) && ! $this->_attributes['loggedout']
			&& ! is_user_logged_in() 
		){
			return '';
		}

		return $block_content;
	}

	private function display_logic( $block_content ){
		if( isset( $this->_attributes['logic'] ) && !empty( $this->_attributes['logic'] ) ){
			//do display logic
			$logic = stripslashes( trim( $this->_attributes['logic'] ) );
			
			//allow override filters
            $logic = apply_filters( 'editorskit_logic_override', $logic );
            $logic = apply_filters( 'block_options_logic_override', $logic );
            if ( $logic === false ){
                return '';
            }
            if ( $logic === true ){
                return $block_content;
            }
            if ( stristr($logic,"return")===false ){
                $logic="return (" . html_entity_decode( $logic, ENT_COMPAT | ENT_HTML401 | ENT_QUOTES ) . ");";
            }
            if ( !eval( $logic ) ){
                return '';
            }
		}

		return $block_content;
	}

	private function acf_visibility( $block_content ){
		if( isset( $this->_attributes['acf_field'] ) && !empty( $this->_attributes['acf_field'] ) ){
			$acf = get_field_object( $this->_attributes['acf_field'] );
			if( $acf && is_array( $acf ) ){
				$acf_visibility    = isset( $this->_attributes['acf_visibility'] ) ? $this->_attributes['acf_visibility'] : 'hide';
				switch ( $this->_attributes['acf_condition'] ) {
					case 'equal':
						if( isset( $acf['value'] ) ){
							if( 'show' == $acf_visibility && $acf['value'] == $this->_attributes['acf_value'] ){
								$hidden = false;
							}else if( 'show' == $acf_visibility && $acf['value'] != $this->_attributes['acf_value'] ){
								$hidden = true;
							}else if( 'hide' == $acf_visibility && $acf['value'] == $this->_attributes['acf_value'] ){
								$hidden = true;
							}else if( 'hide' == $acf_visibility && $acf['value'] != $this->_attributes['acf_value'] ){
								$hidden = false;
							}
						}
					break;

					case 'not_equal':
						if( isset( $acf['value'] ) ){
							if( 'show' == $acf_visibility && $acf['value'] == $this->_attributes['acf_value'] ){
								$hidden = true;
							}else if( 'show' == $acf_visibility && $acf['value'] != $this->_attributes['acf_value'] ){
								$hidden = false;
							}else if( 'hide' == $acf_visibility && $acf['value'] == $this->_attributes['acf_value'] ){
								$hidden = false;
							}else if( 'hide' == $acf_visibility && $acf['value'] != $this->_attributes['acf_value'] ){
								$hidden = true;
							}
						}
					break;

					case 'contains':
						if( isset( $acf['value'] ) ){
							if( 'show' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) !== false ){
								$hidden = false;
							}else if( 'show' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) === false ){
								$hidden = true;
							}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) !== false ){
								$hidden = true;
							}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) === false ){
								$hidden = false;
							}
						}
					break;

					case 'not_contains':
						if( isset( $acf['value'] ) ){
							if( 'show' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) !== false ){
								$hidden = true;
							}else if( 'show' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) === false ){
								$hidden = false;
							}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) !== false ){
								$hidden = false;
							}else if( 'hide' == $acf_visibility && strpos( $acf['value'], $this->_attributes['acf_value'] ) === false ){
								$hidden = true;
							}
						}
					break;

					case 'empty':
						if( 'show' == $acf_visibility && empty( $acf['value'] ) ){
							$hidden = false;
						}else if( 'show' == $acf_visibility && !empty( $acf['value'] ) ){
							$hidden = true;
						}elseif( 'hide' == $acf_visibility && empty( $acf['value'] ) ){
							$hidden = true;
						}else if( 'hide' == $acf_visibility && !empty( $acf['value'] ) ){
							$hidden = false;
						}
					break;

					case 'not_empty':
						if( 'show' == $acf_visibility && empty( $acf['value'] ) ){
							$hidden = true;
						}else if( 'show' == $acf_visibility && !empty( $acf['value'] ) ){
							$hidden = false;
						}elseif( 'hide' == $acf_visibility && empty( $acf['value'] ) ){
							$hidden = false;
						}else if( 'hide' == $acf_visibility && !empty( $acf['value'] ) ){
							$hidden = true;
						}
					break;
					
					default:
						$hidden = false;
						break;
				}

				// //do return to bypass other conditions
	            $hidden = apply_filters( 'editorskit_visibility_acf', $hidden );
	            
	            if( $hidden ){
	                return '';
	            }
			}
		}

		return $block_content;
	}

	public function render_block( $block_content, $block ){
		$this->_attributes  		 = $this->block_attributes( $block );
		$this->_attributes[ 'old' ]  = $this->old_attributes( $block );
		$block_content				 = $this->user_state_visibility( $block_content );
		$block_content				 = $this->display_logic( $block_content );

		if( class_exists( 'ACF' ) ){
			$block_content		= $this->acf_visibility( $block_content );
		}
		
		return $block_content;
	}

}

EditorsKit_Render_Block::register();
