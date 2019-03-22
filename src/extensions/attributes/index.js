
const { __ } = wp.i18n;
const { addFilter } = wp.hooks; 

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings ) {
	
	if( typeof settings.attributes !== 'undefined' ){
		settings.attributes = Object.assign( settings.attributes, {
			editorskit:{ 
				type: 'object',
				default: {
					devices: false,
					desktop: true,
					tablet: true,
					mobile: true,
				},
			}
		} );
	}

	return settings;
}



addFilter(
	'blocks.registerBlockType',
	'editorskit/custom/attributes',
	addAttributes
);