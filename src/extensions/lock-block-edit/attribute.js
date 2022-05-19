import { addFilter } from '@wordpress/hooks';

addFilter(
	'blocks.registerBlockType',
	'editorskit/block-locking-attributes',
	(settings) => {
		if (settings) {
			settings.attributes = Object.assign(settings.attributes, {
				editorskitEditingLock: {
					type: 'boolean',
					default: false,
				},
			});
		}

		return settings;
	}
);
