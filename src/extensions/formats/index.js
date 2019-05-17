/**
 * Internal dependencies
 */
import { underline } from './underline';
import { justify } from './justify';
import { textColor } from './colors/text-color';
import { backgroundColor } from './colors/background-color';

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
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
};
registerFormats();
