import { subscribe, select, dispatch } from '@wordpress/data';
import { isEqual } from 'lodash';

let initialUndoEdit;

subscribe( () => {
	const newUndoEdit = select( 'core' ).getUndoEdit();

	if ( ! isEqual( newUndoEdit, initialUndoEdit ) ) {
		initialUndoEdit = newUndoEdit;
		dispatch( 'editorskit/history' ).addHistory( newUndoEdit );
	}
} );
