/**
 * This subscription will handle hot-reloading of the live preview to reflect
 * changes in the editor.
 */

import { subscribe, select } from '@wordpress/data';
import { updatePreview, reloadPreview } from '../helper';
import { debounce, isEqual, omit } from 'lodash';

function updateAndReloadPreview() {
	updatePreview().then( () => reloadPreview() );
}
const updateAndReloadPreviewDebounced = debounce( updateAndReloadPreview, 1500 );

// Hot reload happens automatically when any entity changes.
let lastEntityEdit = {};

subscribe( () => {
	const entityType = select( 'core/editor' ).getEditedPostAttribute( 'type' );
	const storedPreviewTabReference = select( 'editorskit/preview' ).getCurrentPreviewRef();
	const currentPostID = select( 'core/editor' ).getEditedPostAttribute( 'id' );

	let newEntityEdit = select( 'core' ).getEditedEntityRecord( 'postType', entityType, currentPostID );

	// Excluding metadata updates.
	newEntityEdit = omit( newEntityEdit, [ 'meta', 'date', 'date_gmt', 'modified', 'modified_gmt', 'status', 'generated_slug', '_links', 'slug', 'content' ] );

	if ( typeof storedPreviewTabReference.name !== 'undefined' && ! isEqual( newEntityEdit, lastEntityEdit ) ) {
		lastEntityEdit = newEntityEdit;
		updateAndReloadPreviewDebounced();
	}
} );
