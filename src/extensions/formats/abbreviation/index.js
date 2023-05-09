/**
 * Internal dependencies
 */
import Edit from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/abbreviation';

export const abbreviation = {
	name,
	title: __( 'Abbreviation', 'block-options' ),
	tagName: 'abbr',
	className: null,
	attributes: {
		title: 'title',
		lang: 'lang',
	},
	edit: Edit,
};
