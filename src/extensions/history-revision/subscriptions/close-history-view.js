import { subscribe, select, dispatch } from '@wordpress/data';
import { isEqual } from 'lodash';

/**
 * Subscription to automatically close history view.
 * When inserter view or list view toggles.
 *
 */

let initialInserterViewStatus = false;
let initialListViewStatus = false;

subscribe( () => {
	const newListViewStatus = select( 'core/edit-post' ).isListViewOpened();
	const newInserterViewStatus = select( 'core/edit-post' ).isInserterOpened();

	if ( ! isEqual( newListViewStatus, initialListViewStatus ) || ! isEqual( initialInserterViewStatus, newInserterViewStatus ) ) {
		initialInserterViewStatus = newInserterViewStatus;
		initialListViewStatus = newListViewStatus;

		dispatch( 'editorskit/history' ).setIsHistoryViewOpened( false );
	}
} );
