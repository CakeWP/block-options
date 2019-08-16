/**
 * Internal dependencies
 */
import Edit from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Block constants
 */
const name = 'editorskit/background';

export const backgroundColor = {
	name,
	title: __( 'Background Color' ),
	tagName: 'span',
	className: 'has-inline-background',
	attributes: {
		style: 'style',
	},
	edit: Edit,
};
