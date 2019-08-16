/**
 * External dependencies
 */
import { get } from 'lodash';

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
const name = 'editorskit/color';

export const textColor = {
	name,
	title: __( 'Text Color' ),
	tagName: 'span',
	className: 'has-inline-color',
	attributes: {
		style: 'style',
	},
	edit: Edit,
};
