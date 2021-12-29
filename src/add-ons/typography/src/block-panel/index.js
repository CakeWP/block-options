/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import TypographySettings from './typography';
import applyFontStyle from './apply-style';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { compose, createHigherOrderComponent } = wp.compose;
const { hasBlockSupport, getBlockType } = wp.blocks;

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings ) {
	if ( typeof settings.attributes !== 'undefined' && ! hasBlockSupport( settings, 'disableEditorsKitTypography' ) ) {
		settings.attributes = Object.assign( settings.attributes, {
			editorskit_typography: {
				type: 'object',
				default: {
					name: '',
					family: '',
					weight: '',
				},
			},
		} );
	}

	return settings;
}

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
		return {
			select,
		};
	} )
);

const withBlockPanel = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		const {
			name,
			isSelected,
		} = props;

		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ isSelected && ! hasBlockSupport( name, 'disableEditorsKitTypography' ) &&
					<TypographySettings { ...props } />
				}
			</Fragment>
		);
	} );
}, 'withBlockPanel' );

const withTypographySettings = createHigherOrderComponent( ( BlockListBlock ) => {
	return enhance( ( { select, ...props } ) => {
		let wrapperProps = props.wrapperProps;
		let customData = {};
		const blockType = getBlockType( props.name );

		if ( blockType.getEditWrapperProps ) {
			wrapperProps = {
				...wrapperProps,
				...blockType.getEditWrapperProps( blockType.attributes ),
			};
		}

		if ( ! hasBlockSupport( props.name, 'disableEditorsKitTypography' ) ) {
			const { editorskit_typography } = props.attributes;

			if ( typeof editorskit_typography !== 'undefined' && typeof editorskit_typography.family !== 'undefined' && '' !== editorskit_typography.family ) {
				customData = Object.assign( customData, { 'data-ek-typography': 1 } );
			}

			wrapperProps = {
				style: applyFontStyle( props.attributes, props.name, wrapperProps ),
				...customData,
			};
		}

		return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
	} );
}, 'withTypographySettings' );


const isDisabled = wp.data.select('core/edit-post').isFeatureActive('disableEditorsKitTypography');

if ( !isDisabled ) {
	
	addFilter(
		'blocks.registerBlockType',
		'editorskit/typography/attributes',
		addAttributes
	);


	addFilter(
		'editor.BlockEdit',
		'editorskit/typography/block-panel',
		withBlockPanel
	);

	addFilter(
		'editor.BlockListBlock',
		'editorskit/typography/withTypographySettings',
		withTypographySettings,
		10
	);

}
