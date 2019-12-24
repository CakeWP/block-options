/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import ToolbarControls from './components/controls';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;

const allowedBlocks = [ 'core/cover' ];

/**
 * Filters registered block settings, extending attributes with settings
 *
 * @param {Object} settings Original block settings.
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings ) {
	// Use Lodash's assign to gracefully handle if attributes are undefined
	if ( allowedBlocks.includes( settings.name ) ) {
		settings.attributes = Object.assign( settings.attributes, {
			verticalAlignment: {
				type: 'string',
			},
		} );
	}

	return settings;
}

/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ props.isSelected && allowedBlocks.includes( props.name ) && <ToolbarControls { ...{ ...props } } /> }
			</Fragment>
		);
	};
}, 'withControls' );

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyExtraClass( extraProps, blockType, attributes ) {
	const { verticalAlignment } = attributes;

	if ( allowedBlocks.includes( blockType.name ) && verticalAlignment ) {
		extraProps.className = classnames( extraProps.className, 'is-vertically-aligned-' + verticalAlignment );
	}

	return extraProps;
}

const addEditorBlockAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { name, attributes } = props;
		const { verticalAlignment } = attributes;

		let wrapperProps = props.wrapperProps;
		let customData = {};

		if ( allowedBlocks.includes( name ) && verticalAlignment ) {
			if ( verticalAlignment === 'top' ) {
				customData = Object.assign( customData, { 'data-editorskit-is-vertically-top': 1 } );
			} else if ( verticalAlignment === 'bottom' ) {
				customData = Object.assign( customData, { 'data-editorskit-is-vertically-bottom': 1 } );
			}
		}

		wrapperProps = {
			...wrapperProps,
			...customData,
		};

		return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
	};
}, 'addEditorBlockAttributes' );

addFilter(
	'blocks.registerBlockType',
	'editorskit/cover/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'editorskit/cover-vertical-alignment',
	withControls
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/cover/applyExtraClass',
	applyExtraClass
);

addFilter(
	'editor.BlockListBlock',
	'editorskit/cover/addEditorBlockAttributes',
	addEditorBlockAttributes
);
