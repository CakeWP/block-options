/**
 * External Dependencies
 */
import classnames from 'classnames';


/**
 * Internal dependencies
 */
import './styles/editor.scss';
import DevicesOptions from './options/devices/';


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

const restrictedBlocks = [ 'core/block' ];

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
		} = attributes;
		

		
		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && !restrictedBlocks.includes( name ) &&
					<InspectorAdvancedControls>
						{ DevicesOptions( props ) }
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