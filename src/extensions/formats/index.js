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
import { link } from './link';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;
const { select } = wp.data;

const isDisabled = select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitLinkFormats' );

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
		! isDisabled ? link : [],
	].forEach( ( { name, ...settings } ) => {
		if ( name ) {
			registerFormatType( name, settings );
		}
	} );
}

registerFormats();
