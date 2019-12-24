/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { createBlock } = wp.blocks;

const allowedBlocks = [ 'core/cover' ];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addTransforms( settings ) {
	if ( typeof settings.transforms !== 'undefined' !== 'undefined' && allowedBlocks.includes( settings.name ) ) {
		const transforms = settings.transforms;

		if ( typeof transforms.from === 'undefined' ) {
			transforms.from = [];
		}

		const convertToCovert = {
			type: 'block',
			blocks: [ 'core/group' ],
			__experimentalConvert( block ) {
				if ( typeof block.attributes.backgroundColor !== 'undefined' ) {
					block.attributes.overlayColor = block.attributes.backgroundColor;
				}
				if ( typeof block.attributes.customBackgroundColor !== 'undefined' ) {
					block.attributes.customOverlayColor = block.attributes.customBackgroundColor;
				}

				// Failing to create new block references causes the original blocks
				// to be replaced in the switchToBlockType call thereby meaning they
				// are removed both from their original location and within the
				// new cover block.
				const groupInnerBlocks = block.innerBlocks.map( ( innerBlock ) => {
					return createBlock( innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks );
				} );

				return createBlock( 'core/cover', block.attributes, groupInnerBlocks );
			},
		};

		transforms.from.push( convertToCovert );

		settings.transforms = transforms;
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'editorskit/transform/group',
	addTransforms
);
