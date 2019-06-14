/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import './styles/style.scss';
import Edit from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextShortcut, __unstableRichTextInputEvent } = wp.blockEditor;


/**
 * Block constants
 */
const name = 'editorskit/background';

export const backgroundColor = {
	name,
	title: __( 'Background Color' ),
	tagName: 'mark',
	className: 'has-inline-background',
	attributes: {
		style: 'style',
	},
	edit: Edit,
};
