/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import metadata from './block.json';

/**
 * Block constants
 */
const { name, category, attributes } = metadata;
const title = __('ShareABlock', 'block-options');
const description = __('Easily insert your downloads from shareablock.com', 'block-options');
const keywords = [
	__('template', 'block-options'),
	__('block patterns', 'block-options'),
	__('shareablock', 'block-options'),
];

const settings = {
	title,
	description,
	icon: 'layout',
	keywords,
	attributes,
	edit() {
		return null;
	},
	save() {
		return null;
	},
};
export { name, category, settings };