/**
 * Internal dependencies
 */
import { justify } from './justify';
import { backgroundColor } from './background-color';
import { markdown } from './markdown';
import { clear } from './clear';
import { uppercase } from './uppercase';
import { link } from './link';
import { alignment } from './alignment';
import { nbsp } from './nbsp';
import { abbreviation } from './abbreviation';
import { underline } from './underline';
import { increaseIndent } from './indent-increase';
import { decreaseIndent } from './indent-decrease';
import { charmap } from './charmap';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;
const { select } = wp.data;

const isDisabled = select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitLinkFormats' );

function registerEditorsKitFormats() {
	[
		justify,
		backgroundColor,
		markdown,
		clear,
		uppercase,
		alignment,
		nbsp,
		abbreviation,
		underline,
		increaseIndent,
		decreaseIndent,
		charmap,
		! isDisabled ? link : [],
	].forEach( ( { name, ...settings } ) => {
		if ( name ) {
			registerFormatType( name, settings );
		}
	} );
}

wp.domReady(
	registerEditorsKitFormats
);
