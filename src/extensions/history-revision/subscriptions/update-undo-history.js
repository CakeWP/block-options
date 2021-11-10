import { subscribe, select, dispatch } from '@wordpress/data';
import { isEqual, get } from 'lodash';

let initialUndoEdit;

subscribe( () => {
	const newUndoEdit = select( 'core' ).getUndoEdit();

	if ( ! isEqual( newUndoEdit, initialUndoEdit ) ) {
		initialUndoEdit = newUndoEdit;

		const isEditorskitAction = get( newUndoEdit, 'edits.meta.isEditorskitAction', false );

		console.log( newUndoEdit );

		if ( ! isEditorskitAction ) {
			dispatch( 'editorskit/history' ).addHistory( newUndoEdit );
		}
	}
} );
