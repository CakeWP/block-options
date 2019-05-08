/**
 * External Dependencies
 */
import classnames from 'classnames';


/**
 * Internal dependencies
 */
import './styles/editor.scss';
import DevicesOptions from './options/devices/';
import UserStateOptions from './options/state/';


/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { withSelect, select } = wp.data;
const { InspectorAdvancedControls }	= wp.editor;
const { compose, createHigherOrderComponent } = wp.compose;
const { ToggleControl } = wp.components;

const restrictedBlocks = [ 'core/block', 'core/freeform' ];

/**
 * Add custom CoBlocks attributes to selected blocks
 *
 * @param {function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			clientId,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			editorskit,
			blockOpts,
		} = attributes;
		
		//compatibility with version 1
		if( typeof editorskit !== 'undefined' && ! editorskit.migrated && blockOpts ){
			props.attributes.editorskit = Object.assign( props.attributes.editorskit, {
				devices: false,
				desktop: ( ( blockOpts.devices == 'show' && blockOpts.desktop != 'on' ) || ( blockOpts.devices == 'hide' && blockOpts.desktop == 'on' )  ) ? false : true,
				tablet: ( ( blockOpts.devices == 'show' && blockOpts.tablet != 'on' ) || ( blockOpts.devices == 'hide' && blockOpts.tablet == 'on' )  ) ? false : true,
				mobile: ( ( blockOpts.devices == 'show' && blockOpts.mobile != 'on' ) || ( blockOpts.devices == 'hide' && blockOpts.mobile == 'on' )  ) ? false : true,
				loggedin: ( blockOpts.state == 'out' && blockOpts.state != 'in'  ) ? false : true,
				loggedout: ( blockOpts.state == 'in' && blockOpts.state != 'out'  ) ? false : true,
				acf_visibility: ( blockOpts.acf_visibility ) ? blockOpts.acf_visibility : '',
				acf_field: ( blockOpts.acf_field ) ? blockOpts.acf_field : '',
				acf_condition: ( blockOpts.acf_condition ) ? blockOpts.acf_condition : '',
				acf_value: ( blockOpts.acf_value ) ? blockOpts.acf_value : '',
				logic: ( blockOpts.logic ) ? blockOpts.logic : '',
				migrated: true,
			});

			//remove unnecessary classes
			if( !props.attributes.className ){
				props.attributes.className = '';
			}
			var newClassNames = props.attributes.className.replace( 'b' + blockOpts.id, '' ).replace( 'blockopts-show', '' ).replace( 'blockopts-hide', '' ).replace( 'blockopts-desktop', '' ).replace( 'blockopts-tablet', '' ).replace( 'blockopts-mobile', '' );
				newClassNames = newClassNames.trim();
			props.attributes.className = newClassNames;
			
			setAttributes( { editorskit: props.attributes.editorskit, className : newClassNames } );
		}
		
		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && !restrictedBlocks.includes( name ) &&
					<InspectorAdvancedControls>
						{ DevicesOptions( props ) }
						{ UserStateOptions( props ) }
					</InspectorAdvancedControls>
				}

			</Fragment>
		);
	};
}, 'withAdvancedControls');

addFilter(
	'editor.BlockEdit',
	'editorskit/advanced',
	withAdvancedControls
);