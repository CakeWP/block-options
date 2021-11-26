import { select, dispatch } from '@wordpress/data';
import { invoke } from 'lodash';

export async function updatePreview() {
	const {
		getEditedPostAttribute,
	} = select( 'core/editor' );

	const {
		autosave,
		savePost,
	} = dispatch( 'core/editor' );

	// Checking if the current post is draft.
	const isDraft = [ 'draft', 'auto-draft' ].indexOf(
		getEditedPostAttribute( 'status' )
	) !== -1;

	if ( isDraft ) {
		await savePost( { isPreview: true } );
	} else {
		await autosave( { isPreview: true } );
	}

	return true;
}

export function reloadPreview() {
	const currentPreviewReference = select( 'editorskit/preview' ).getCurrentPreviewRef();

	if ( typeof currentPreviewReference.window === 'undefined' ) {
		return;
	}

	invoke( currentPreviewReference, 'window.location.reload' );
}
