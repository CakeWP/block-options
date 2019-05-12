/**
 * Internal dependencies
 */
import { underline } from './underline';
import { textColor } from './colors/text-color';
import { backgroundColor } from './colors/background-color';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerFormats () {
	[
		underline,
		textColor,
		backgroundColor,
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
};
registerFormats();
