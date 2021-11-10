import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';

import HistoryRevisionProvider from './components/history-revision-provider';
import HistorySwitchButton from './components/history-header-button';

import './store';
import './subscriptions/update-undo-history';
import './subscriptions/close-history-view';

// Rendering the history sidebar
domReady( () => {
	setTimeout( () => {
		const skeletenBody = document.querySelector( '#editor .interface-interface-skeleton__body' );

		if ( skeletenBody ) {
			const rootElement = document.createElement( 'div' );

			rootElement.className = 'interface-interface-skeleton__secondary-sidebar';
			rootElement.id = 'editorskit-history-revision-root';

			skeletenBody.prepend( rootElement );

			const historyRevisionRoot = document.querySelector( '#editorskit-history-revision-root' );

			if ( historyRevisionRoot ) {
				render( <HistoryRevisionProvider />, historyRevisionRoot );
			}
		}
	}, 0 );
} );

// Rendering the history switcher
domReady( () => {
	setTimeout( () => {
		const headerElement = document.querySelector( '.edit-post-header-toolbar__left' );

		const rootElement = document.createElement( 'div' );

		rootElement.className = 'editorskit-history-button';
		render( <HistorySwitchButton />, rootElement );

		headerElement.append( rootElement );
	}, 0 );
} );
