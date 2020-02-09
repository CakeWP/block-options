/**
 * External dependencies
 */
import classnames from 'classnames';
import has from 'lodash';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
const { hasBlockSupport } = wp.blocks;

const restrictedBlocks = [ 'core/freeform', 'core/shortcode', 'core/nextpage' ];
const blocksWithFullScreen = [ 'core/image', 'core/cover', 'core/group', 'core/columns', 'core/media-text' ];
const blocksWithFontSize = [ 'core/list' ];
const blocksWithBulletColor = [ 'core/list' ];
const blocksWithAnchor = [ 'core/spacer', 'core/separator' ];
const blocksWithBackgroundColor = [ 'core/columns', 'core/column' ];
const blocksWithFullWidth = [ 'core/button' ];
const blocksWithLinkToolbar = [ 'core/group', 'core/column', 'core/cover' ];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings ) {
	if ( typeof settings.attributes !== 'undefined' && ! restrictedBlocks.includes( settings.name ) ) {
		settings.attributes = Object.assign( settings.attributes, {
			editorskit: {
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
					unit_test: false,
				},
			},
		} );

		// for version 1 compatibility and migration.
		settings.attributes = Object.assign( settings.attributes, {
			blockOpts: { type: 'object' },
		} );

		// Add vertical full screen support.
		if ( blocksWithFullScreen.includes( settings.name ) ) {
			if ( ! settings.supports ) {
				settings.supports = {};
			}
			settings.supports = Object.assign( settings.supports, {
				hasHeightFullScreen: true,
			} );
		}

		if ( hasBlockSupport( settings, 'hasHeightFullScreen' ) ) {
			if ( typeof settings.attributes !== 'undefined' ) {
				if ( ! settings.attributes.isHeightFullScreen ) {
					settings.attributes = Object.assign( settings.attributes, {
						isHeightFullScreen: {
							type: 'boolean',
							default: false,
						},
					} );
				}
			}
		}

		// Add full width display support.
		if ( blocksWithFullWidth.includes( settings.name ) ) {
			if ( ! settings.supports ) {
				settings.supports = {};
			}
			settings.supports = Object.assign( settings.supports, {
				hasFullWidthDisplay: true,
			} );
		}

		if ( hasBlockSupport( settings, 'hasFullWidthDisplay' ) ) {
			if ( typeof settings.attributes !== 'undefined' ) {
				if ( ! settings.attributes.isFullWidth ) {
					settings.attributes = Object.assign( settings.attributes, {
						isFullWidth: {
							type: 'boolean',
							default: false,
						},
					} );
				}
			}
		}

		// Add custom font size picker on selected blocks.
		if ( blocksWithFontSize.includes( settings.name ) ) {
			if ( ! settings.attributes ) {
				settings.attributes = {};
			}
			settings.attributes = Object.assign( settings.attributes, {
				textColor: {
					type: 'string',
				},
				customTextColor: {
					type: 'string',
				},
				fontSize: {
					type: 'string',
				},
				customFontSize: {
					type: 'number',
				},
			} );
		}

		// Add Bullet Color
		if ( blocksWithBulletColor.includes( settings.name ) ) {
			if ( ! settings.attributes ) {
				settings.attributes = {};
			}
			settings.attributes = Object.assign( settings.attributes, {
				bulletColor: {
					type: 'string',
				},
			} );
		}

		// Add background color on selected blocks.
		if ( blocksWithBackgroundColor.includes( settings.name ) ) {
			if ( ! settings.attributes ) {
				settings.attributes = {};
			}
			settings.attributes = Object.assign( settings.attributes, {
				backgroundColor: {
					type: 'string',
				},
				customBackgroundColor: {
					type: 'string',
				},
			} );
		}

		//enable anchor to selected blocks
		if ( blocksWithAnchor.includes( settings.name ) ) {
			if ( ! settings.supports ) {
				settings.supports = {};
			}
			settings.supports = Object.assign( settings.supports, {
				anchor: true,
			} );
		}

		// Check if block has alignment attribute
		if ( has( settings, 'attributes.align' ) || has( settings, 'attributes.textAlign' ) ) {
			settings.attributes = Object.assign( settings.attributes, {
				hasAlignmentOption: {
					type: 'boolean',
					default: true,
				},
			} );
		}

		// Add LinkToolbar Support
		if ( blocksWithLinkToolbar.includes( settings.name ) || hasBlockSupport( settings, 'editorsKitLinkToolbar' ) ) {
			if ( typeof settings.attributes !== 'undefined' ) {
				settings.attributes = Object.assign( settings.attributes, {
					href: {
						type: 'string',
					},
					linkDestination: {
						type: 'string',
						default: 'none',
					},
					opensInNewTab: {
						type: 'boolean',
						default: false,
					},
					linkNoFollow: {
						type: 'boolean',
						default: false,
					},
					linkSponsored: {
						type: 'boolean',
						default: false,
					},
					hasAnimation: {
						type: 'boolean',
						default: false,
					},
				} );
			}
		}
	}

	return settings;
}

/**
 * Add custom EditorsKit attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withAttributes = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			attributes,
		} = props;

		if ( typeof attributes.editorskit === 'undefined' ) {
			attributes.editorskit = [];
		}

		return (
			<Fragment>
				<BlockEdit { ...props } />
			</Fragment>
		);
	};
}, 'withAttributes' );

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
	const {
		editorskit,
		isHeightFullScreen,
		isFullWidth,
		href,
		hasAnimation,
	} = attributes;

	if ( typeof editorskit !== 'undefined' && ! restrictedBlocks.includes( blockType.name ) ) {
		if ( typeof editorskit.id !== 'undefined' ) {
			extraProps.className = classnames( extraProps.className, editorskit.id );
		}

		if ( typeof editorskit.desktop !== 'undefined' && ! editorskit.desktop ) {
			extraProps.className = classnames( extraProps.className, 'editorskit-no-desktop' );
		}

		if ( typeof editorskit.tablet !== 'undefined' && ! editorskit.tablet ) {
			extraProps.className = classnames( extraProps.className, 'editorskit-no-tablet' );
		}

		if ( typeof editorskit.mobile !== 'undefined' && ! editorskit.mobile ) {
			extraProps.className = classnames( extraProps.className, 'editorskit-no-mobile' );
		}

		if ( typeof editorskit.tabletAlignment !== 'undefined' && editorskit.tabletAlignment ) {
			extraProps.className = classnames( extraProps.className, 'has-tablet-text-align-' + editorskit.tabletAlignment );
		}

		if ( typeof editorskit.mobileAlignment !== 'undefined' && editorskit.mobileAlignment ) {
			extraProps.className = classnames( extraProps.className, 'has-mobile-text-align-' + editorskit.mobileAlignment );
		}
	}

	if ( hasBlockSupport( blockType.name, 'hasHeightFullScreen' ) && isHeightFullScreen ) {
		extraProps.className = classnames( extraProps.className, 'h-screen' );
	}

	if ( hasBlockSupport( blockType.name, 'hasFullWidthDisplay' ) && isFullWidth ) {
		extraProps.className = classnames( extraProps.className, 'ek-w-full' );
	}

	if (
		( blocksWithLinkToolbar.includes( blockType.name ) ||
			hasBlockSupport( blockType.name, 'editorsKitLinkToolbar' ) ) &&
		typeof href !== 'undefined' &&
		href
	) {
		extraProps.className = classnames( extraProps.className, 'ek-linked-block' );

		if ( typeof hasAnimation !== 'undefined' && hasAnimation ) {
			extraProps.className = classnames( extraProps.className, 'ek-linked-block-animate' );
		}
	}

	return extraProps;
}

const addEditorBlockAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { name, attributes } = props;
		const { isHeightFullScreen, isFullWidth } = attributes;

		let wrapperProps 	= props.wrapperProps;
		let customData 	 	= {};

		if ( hasBlockSupport( name, 'hasHeightFullScreen' ) && isHeightFullScreen ) {
			customData = Object.assign( customData, { 'data-editorskit-h-screen': 1 } );
		}

		if ( hasBlockSupport( name, 'hasFullWidthDisplay' ) && isFullWidth ) {
			customData = Object.assign( customData, { 'data-editorskit-w-full': 1 } );
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

addFilter(
	'editor.BlockListBlock',
	'editorskit/addEditorBlockAttributes',
	addEditorBlockAttributes
);
