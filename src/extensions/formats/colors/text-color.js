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
const { select } = wp.data;
const { toggleFormat, removeFormat, applyFormat } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut, BlockControls } = wp.editor;
const { __unstableRichTextInputEvent } = wp.blockEditor;
const { Dropdown, IconButton, Toolbar, ColorPalette, Button, Popover } = wp.components;
const { compose, withState } = wp.compose;

/**
 * Block constants
 */
const name = 'editorskit/textcolor';

export const textColor = {
	name,
	title: __( 'Text Color' ),
	tagName: 'span',
	className: 'inline-color',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange } ) {
		return (
			<Fragment>
				<InlineColorsToolbar name={ name } isActive={ isActive } value={ value } onChange={ onChange }  />
			</Fragment>
		);

	},
};
