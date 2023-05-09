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
const name = 'editorskit/color';

export const textColor = {
	name,
	title: __( 'Text Color', 'block-options' ),
	tagName: 'span',
	className: 'has-inline-color',
	attributes: {
		style: 'style',
		class: 'class',
	},
	edit: Edit,
};
