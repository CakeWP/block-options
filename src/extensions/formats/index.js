/**
 * Internal dependencies
 */
import { underline } from './underline';
import { textColor } from './colors/text-color';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerFormats () {
	[
		underline,
		textColor,
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
};
registerFormats();
