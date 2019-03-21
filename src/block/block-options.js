/**
 * BLOCK: block-options
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

/**
 * External Dependencies
 */

import classnames from 'classnames';

//  Import CSS.
import './style.scss';
import './editor.scss';
import './api/api.js';

/**
 * Internal dependencies
 */
import DevicesTitle from './options/devices/title';
import DevicesDesc from './options/devices/description';
import DevicesFields from './options/devices/fields';

import UserStateTitle from './options/user-state/title';
import UserStateDesc from './options/user-state/description';
import UserStateFields from './options/user-state/fields';

import ACFTitle from './options/acf/title';
import ACFDesc from './options/acf/description';
import ACFFields from './options/acf/fields';

import LogicTitle from './options/logic/title';
import LogicDesc from './options/logic/description';
import LogicFields from './options/logic/fields';


const { apiFetch }  = wp;
const { __ } = wp.i18n;
const { addFilter } = wp.hooks; 
const { registerBlockType } = wp.blocks; 
const { InspectorControls } = wp.editor; 
const { Fragment } = wp.element; 
const { createHigherOrderComponent } = wp.compose; 
const { Button, TextControl, SelectControl, CheckboxControl, TextareaControl, PanelRow, PanelBody, Dashicon, Popover, InspectorAdvancedControls } = wp.components; 
const { registerStore, withSelect } = wp.data;


/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
export const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return withSelect( ( select ) => {
		return {
			acf: select( 'block-options/acf' ).receiveACFields(),
		};
	} )( props => {
		const {
			clientId,
			attributes,
			setAttributes,
		} = props;

		var InitialOpen1		= false,
			HideDesc			= false,
			DisplayLogic		= '',
			UserLoginState		= '',
			ACF 				= '';

		if( typeof attributes.className === 'undefined' ){
			attributes.className = '';
		}

		if( typeof attributes.blockOpts === 'undefined' ){
			attributes.blockOpts = [];
		}

		//add unique selector
		if( typeof attributes.blockOpts.id === 'undefined' ){
			if( typeof attributes.blockOpts !== 'undefined' && typeof attributes.blockOpts.id !== 'undefined' && attributes.blockOpts.id != clientId ){
				attributes.className = attributes.className.replace( ' b' + attributes.blockOpts.id + ' ', '' );
			}

			if( typeof attributes.blockOpts !== 'undefined' && typeof attributes.blockOpts.id !== 'undefined' ){
				delete attributes.blockOpts.id;
			}

			setAttributes( { className: attributes.className + ' b'+ clientId + ' ' } );
			const blockOptions = Object.assign( { id: clientId }, attributes.blockOpts );
			setAttributes( { blockOpts: blockOptions } );
		} 

		if( typeof varblockOpts.settings !== 'undefined' && typeof varblockOpts.settings.general !== 'undefined' ){
			if( typeof varblockOpts.settings.general.opened !== 'undefined' && varblockOpts.settings.general.opened == '1' ){
				InitialOpen1 = true;
			}
			if( typeof varblockOpts.settings.general.hidedesc !== 'undefined' && varblockOpts.settings.general.hidedesc == '1' ){
				HideDesc = true;
			}
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ props.isSelected  && 
					<InspectorControls>
						<PanelBody
		                    title={ __( 'Block Options' ) }
		                    initialOpen={ InitialOpen1 }
		                >
		                    <PanelRow className="blockOpts-panel">
		                    	<div class="editor-block-inspector__card">
		                    		<div class="editor-block-inspector__card">
		                    			<div class="editor-block-icon">
		                    				<Dashicon icon="editor-bold" />
		                    			</div>
		                    			<div class="editor-block-inspector__card-content">
		                    				<div class="editor-block-inspector__card-description">{ __( 'Manage your blocks better using available options below. You can restrict visibilities and add custom display logic using WordPress conditional tags.' ) }</div>
		                    			</div>
		                    		</div>
		                    	</div>
		                        { DevicesTitle() }
		                        { DevicesDesc( HideDesc ) }
		                        { DevicesFields( props ) }

		                        { UserStateTitle() }
		                        { UserStateDesc( HideDesc ) }
		                        { UserStateFields( props ) }

		                        { ACFTitle() }
		                        { ACFDesc( HideDesc ) }
		                        { ACFFields( props ) }

		                        { LogicTitle() }
		                        { LogicDesc( HideDesc ) }
		                        { LogicFields( props ) }
		                    </PanelRow>
		                </PanelBody>

					</InspectorControls> 
				}
			</Fragment>
		);

		return <BlockEdit { ...props } />;
	});
}, 'withInspectorControl' );

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyBlockOptionsClass( extraProps, blockType, attributes ) {
	if( typeof attributes.blockOpts === 'undefined' ){
		attributes.blockOpts = [];
	}

	var blockOpts = attributes.blockOpts;
	
	if( typeof blockOpts.devices !== 'undefined' ){
		extraProps.className = classnames( extraProps.className, 'blockopts-' + blockOpts.devices );
	}

	if( typeof blockOpts.desktop !== 'undefined' && blockOpts.desktop == 'on' ){
		extraProps.className = classnames( extraProps.className, 'blockopts-desktop' );
	}

	if( typeof blockOpts.tablet !== 'undefined' && blockOpts.tablet == 'on' ){
		extraProps.className = classnames( extraProps.className, 'blockopts-tablet' );
	}

	if( typeof blockOpts.mobile !== 'undefined' && blockOpts.mobile == 'on' ){
		extraProps.className = classnames( extraProps.className, 'blockopts-mobile' );
	}

	return extraProps;
}

addFilter( 'blocks.registerBlockType', 'blockopts-attribute', addAttribute );
addFilter( 'editor.BlockEdit', 'block-options/with-inspector-controls', withInspectorControl );
addFilter(
  'blocks.getSaveContent.extraProps',
  'block-options/apply-classes',
  applyBlockOptionsClass
);