/**
 * Internal dependencies
 */
import ListTextSettings from './list-settings';
import applyStyle from './apply-style';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { compose, createHigherOrderComponent } = wp.compose;

const blocksWithFontSize = [ 'core/list' ];
const blocksWithBackgroundColor = [ 'core/columns', 'core/column' ];

/**
 * Override the default block element to add	wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const enhance = compose(
	/**
	 * For blocks whose block type doesn't support `multiple`, provides the
	 * wrapped component with `originalBlockClientId` -- a reference to the
	 * first block of the same type in the content -- if and only if that
	 * "original" block is not the current one. Thus, an inexisting
	 * `originalBlockClientId` prop signals that the block is valid.
	 *
	 */
	withSelect( ( select ) => {
		const { fontSizes, colors } = select( 'core/block-editor' ).getSettings();

		return {
			fontSizes,
			colors,
			selected: select( 'core/block-editor' ).getSelectedBlock(),
			select,
			isDisabledListTextSettings: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitDevicesVisibility' ),
		};
	} )
);

const withTextSettings = createHigherOrderComponent( ( BlockListBlock ) => {
	return enhance( ( { select, ...props } ) => {
		let wrapperProps = props.wrapperProps;
		let customData = {};
		const attributes = select( 'core/block-editor' ).getBlock( props.clientId ).attributes;
		const blockName = select( 'core/block-editor' ).getBlockName( props.clientId );

		if ( blocksWithFontSize.includes( blockName ) || blocksWithBackgroundColor.includes( blockName ) || ( typeof attributes.editorskit !== 'undefined' && typeof attributes.editorskit.indent !== 'undefined' && attributes.editorskit.indent ) ) {
			const { customFontSize, fontSize, bulletColor, editorskit } = attributes;

			if ( customFontSize || fontSize ) {
				customData = Object.assign( customData, { 'data-custom-fontsize': 1 } );
			}

			if ( bulletColor ) {
				customData = Object.assign( customData, { 'data-custom-bulletcolor': 1 } );
			}

			if (
				typeof editorskit !== 'undefined' &&
				typeof editorskit.indent !== 'undefined' &&
				editorskit.indent
			) {
				customData = Object.assign( customData, { 'data-ek-indent': 1 } );
			}

			wrapperProps = {
				...wrapperProps,
				style: applyStyle( attributes, blockName, props ),
				...customData,
			};
		}

		return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
	} );
}, 'withTextSettings' );

/**
 * Add custom EditorsKit attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withBlockPanel = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		const {
			name,
			isSelected,
			isDisabledListTextSettings,
		} = props;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ isSelected && ! isDisabledListTextSettings && blocksWithFontSize.includes( name ) &&
					<ListTextSettings { ...props } />
				}
			</Fragment>
		);
	} );
}, 'withBlockPanel' );

/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function applyTextSettings( extraProps, blockType, attributes ) {
	if ( blocksWithFontSize.includes( blockType.name ) || blocksWithBackgroundColor.includes( blockType.name ) || ( typeof attributes.editorskit !== 'undefined' && typeof attributes.editorskit.indent !== 'undefined' && attributes.editorskit.indent ) ) {
		if ( typeof extraProps.style !== 'undefined' ) {
			extraProps.style = Object.assign( extraProps.style, applyStyle( attributes, blockType.name ) );
		} else {
			extraProps.style = applyStyle( attributes, blockType.name );
		}

		const { customFontSize, fontSize, textColor, backgroundColor, bulletColor, editorskit } = attributes;

		if ( fontSize ) {
			extraProps.className = classnames( extraProps.className, 'has-' + fontSize + '-font-size' );
		} else if ( customFontSize ) {
			extraProps.className = classnames( extraProps.className, 'has-custom-size' );
		}

		if ( textColor ) {
			extraProps.className = classnames( extraProps.className, 'has-' + textColor + '-color' );
		}

		if ( backgroundColor ) {
			extraProps.className = classnames( extraProps.className, 'has-' + backgroundColor + '-background-color' );
		}

		if ( bulletColor ) {
			extraProps.className = classnames( extraProps.className, 'has-list-bullet-color' );
		}

		if (
			typeof editorskit !== 'undefined' &&
			typeof editorskit.indent !== 'undefined' &&
			editorskit.indent
		) {
			extraProps.className = classnames( extraProps.className, 'has-ek-indent' );
		}
	}

	return extraProps;
}

addFilter(
	'editor.BlockEdit',
	'editorskit/block-panel',
	withBlockPanel
);

addFilter(
	'editor.BlockListBlock',
	'editorskit/withTextSettings',
	withTextSettings
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyTextSettings',
	applyTextSettings
);
