/**
 * Internal dependencies
 */
import { underline } from './underline';
import { justify } from './justify';
import { textColor } from './text-color';
import { backgroundColor } from './background-color';
import { markdown } from './markdown';
import { subscript } from './subscript';
import { superscript } from './superscript';
import { clear } from './clear';
import { uppercase } from './uppercase';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerFormats() {
	[
		underline,
		justify,
		textColor,
		backgroundColor,
		markdown,
		subscript,
		superscript,
		clear,
		uppercase,
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
}
registerFormats();
