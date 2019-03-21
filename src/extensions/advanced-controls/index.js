/**
 * External Dependencies
 */
import classnames from 'classnames';


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
						<ToggleControl
							label={ __( 'Devices Visibility' ) }
							checked={ !! editorskit.devices }
							onChange={ ( n ) => {
								//delete first
				            	delete editorskit.devices;
				            	var blockOptions = Object.assign( { devices: n }, editorskit );

				            	setAttributes( { editorskit: blockOptions } );
							} }
							help={ !! editorskit.devices ? __( 'Visible on selected devices only.' ) : __( 'Visible on all devices.' ) }
						/>

						<ToggleControl
							label={ __( 'Devices Visibility' ) }
							checked={ !! editorskit.state }
							onChange={ ( n ) => {
								//delete first
				            	delete editorskit.state;
				            	var blockOptions = Object.assign( { state: n }, editorskit );
				                setAttributes( { editorskit: blockOptions } );
							} }
							help={ !! editorskit.state ? __( 'Visible on selected devices only.' ) : __( 'Visible on all devices.' ) }
						/>
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