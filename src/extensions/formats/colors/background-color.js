/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import InlineColorsToolbar from './controls';

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
	tagName: 'span',
	className: 'has-inline-background',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange, activeAttributes } ) {
		return null;
	},
};
