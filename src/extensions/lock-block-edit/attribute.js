import { addFilter } from '@wordpress/hooks';

addFilter(
	'blocks.registerBlockType',
	'editorskit/block-locking-attributes',
	(settings) => {
		if (settings) {
			settings.attributes = Object.assign(settings.attributes, {
				editorskitEditingLockSettings: {
					type: 'boolean',
					default: false,
				},
				editorskitEditingLockToolbar: {
					type: 'boolean',
					default: false,
				},
			});
		}

		return settings;
	}
);
