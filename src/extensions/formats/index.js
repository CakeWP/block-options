/**
 * Internal dependencies
 */
import { underline } from './underline';
import { justify } from './justify';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerFormats () {
	[
		underline,
		justify,
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
};
registerFormats();
