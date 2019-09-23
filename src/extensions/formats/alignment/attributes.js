/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { hasBlockSupport } = wp.blocks;

const allowedBlocks = ['core/image', 'core/gallery'];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttributes(settings) {
	if (typeof settings.attributes !== 'undefined' ) {
		if (allowedBlocks.includes(settings.name) || hasBlockSupport(settings.name, 'editorsKitCaptionAlignment' ) ){
			settings.attributes = Object.assign(settings.attributes, {
				captionAlignment: {
					type: 'string',
				},
			});
		}
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'editorskit/alignment/attributes',
	addAttributes
);
