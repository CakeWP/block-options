import { subscribe, select } from '@wordpress/data';
import { get, isEqual } from 'lodash';

import { dragElement } from '../create-draggable-element';

const makeSidebarDraggable = ( sidebarElement ) => {
	const postMetadata = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
	const initialPosition = JSON.parse( get( postMetadata, '_editorskit_block_options_position', '{}' ) );

	sidebarElement.classList.add( 'editorskit-is-detached' );

	if ( get( initialPosition, 'left', false ) ) {
		sidebarElement.style.left = initialPosition.left;
	}

	if ( get( initialPosition, 'top', false ) ) {
		sidebarElement.style.top = initialPosition.top;
	}

	dragElement( sidebarElement, '.edit-post-sidebar__panel-tabs' );
};

const removeSidebarDragging = ( sidebarElement ) => {
	if ( ! sidebarElement ) {
		return;
	}
	sidebarElement.classList.remove( 'editorskit-is-detached' );
	sidebarElement.setAttribute( 'style', '' );
	dragElement( sidebarElement, '.edit-post-sidebar__panel-tabs', true );
};

let initialDetachStatus;

subscribe( () => {
	const newPostMetadata = select( 'core/editor' ).getEditedPostAttribute( 'meta' );

	const newDetachStatus = get( newPostMetadata, '_editorskit_is_block_options_detached' );

	// toggling the detached sidebar.
	const sidebarElement = document.querySelector( '.interface-interface-skeleton__sidebar' );

	if ( ( ! isEqual( initialDetachStatus, newDetachStatus ) ) && sidebarElement && sidebarElement.querySelector( '.components-panel__header.edit-post-sidebar__panel-tabs' ) ) {
		initialDetachStatus = newDetachStatus;

		if ( newDetachStatus ) {
			makeSidebarDraggable( sidebarElement );
		} else {
			removeSidebarDragging( sidebarElement );
		}
	}
} );

let initialEditorSidebarStatus;

subscribe( () => {
	const newEditorSidebarStatus = select( 'core/edit-post' ).isEditorSidebarOpened();
	const newPostMetadata = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
	const newDetachStatus = get( newPostMetadata, '_editorskit_is_block_options_detached' );

	const sidebarElement = document.querySelector( '.interface-interface-skeleton__sidebar' );

	if ( ! isEqual( initialEditorSidebarStatus, newEditorSidebarStatus ) && sidebarElement ) {
		initialEditorSidebarStatus = newEditorSidebarStatus;

		if ( newEditorSidebarStatus === false ) {
			removeSidebarDragging( sidebarElement );
		}

		if ( newEditorSidebarStatus && newDetachStatus ) {
			// waiting for the sidebar handle to appear.
			const observer = new MutationObserver( ( mutation, me ) => {
				const handle = sidebarElement.querySelector( '.edit-post-sidebar__panel-tabs' );

				if ( handle ) {
					makeSidebarDraggable( sidebarElement );
					me.disconnect();
				}
			} );

			observer.observe( sidebarElement, {
				childList: true,
			} );
		}
	}
} );
