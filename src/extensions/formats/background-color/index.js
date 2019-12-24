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
	title: __( 'Background Color', 'block-options' ),
	tagName: 'span',
	className: 'has-inline-background',
	attributes: {
		style: 'style',
		class: 'class',
	},
	edit: Edit,
};
