/**
 * Internal dependencies
 */
import { underline } from './underline';
import { justify } from './justify';
import { textColor } from './colors/text-color';
import { backgroundColor } from './colors/background-color';
import { markdown } from './markdown';
import { subscript } from './subscript';
import { superscript } from './superscript';
import { clear } from './clear';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerFormats () {
	[
		underline,
		justify,
		textColor,
		backgroundColor,
		markdown,
		subscript,
		superscript,
		clear,
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
};
registerFormats();
