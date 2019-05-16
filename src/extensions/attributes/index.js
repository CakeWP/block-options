/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks; 
const { Fragment } = wp.element; 
const { createHigherOrderComponent } = wp.compose; 

const restrictedBlocks = [ 'core/freeform' ];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings ) {
	
	if( typeof settings.attributes !== 'undefined' && !restrictedBlocks.includes( settings.name ) ){
		settings.attributes = Object.assign( settings.attributes, {
			editorskit:{ 
				type: 'object',
				default: {
					devices: false,
					desktop: true,
					tablet: true,
					mobile: true,
					loggedin: true,
					loggedout: true,
					acf_visibility: '',
					acf_field: '',
					acf_condition: '',
					acf_value: '',
					migrated: false,
				},
			}
		} );

		//for version 1 compatibility and migration
		settings.attributes = Object.assign( settings.attributes, {
			blockOpts:{ type: 'object' }
		} );
	}

	return settings;
}

/**
 * Add custom EditorsKit attributes to selected blocks
 *
 * @param {function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withAttributes = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			clientId,
			attributes,
			setAttributes,
		} = props;

		if ( typeof attributes.editorskit === 'undefined' ) {
			attributes.editorskit = [];
		}

		//add unique selector
		if( typeof attributes.editorskit.id === 'undefined' && !restrictedBlocks.includes( name ) ){
			let d = new Date();

			const editorskit = Object.assign( { id: "editorskit-" + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds() }, attributes.editorskit );
			if( name.includes('acf') && typeof attributes.mode === 'undefined' ){
				//do nothing
			}else{
				setAttributes( { editorskit: editorskit } );
			}
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
			</Fragment>
		);
	};
}, 'withAttributes');

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyExtraClass(extraProps, blockType, attributes) {

	const { editorskit } = attributes;
	
	if ( typeof editorskit !== 'undefined' ) {

		if( typeof editorskit.id !== 'undefined' ){
			extraProps.className = classnames( extraProps.className, editorskit.id );
		}

		if( typeof editorskit.desktop !== 'undefined' && ! editorskit.desktop ){
			extraProps.className = classnames( extraProps.className, 'editorskit-no-desktop' );
		}

		if( typeof editorskit.tablet !== 'undefined' && ! editorskit.tablet ){
			extraProps.className = classnames( extraProps.className, 'editorskit-no-tablet' );
		}

		if( typeof editorskit.mobile !== 'undefined' && ! editorskit.mobile ){
			extraProps.className = classnames( extraProps.className, 'editorskit-no-mobile' );
		}
		
	}

	return extraProps;
}


addFilter(
	'blocks.registerBlockType',
	'editorskit/custom/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'editorskit/attributes',
	withAttributes
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);