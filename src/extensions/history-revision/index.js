import { render } from '@wordpress/element';
import HistoryRevisionProvider from './components/history-revision-provider';
import HistorySwitchButton from './components/history-header-button';

import './store';
import './subscriptions/update-undo-history';

// Rendering the history sidebar
window.addEventListener( 'load', () => {
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
} );

// Rendering the history switcher
window.addEventListener( 'load', () => {
	const headerElement = document.querySelector( '.edit-post-header__toolbar' );

	const rootElement = document.createElement( 'div' );

	rootElement.className = 'editorskit-history-button';
	render( <HistorySwitchButton />, rootElement );

	headerElement.append( rootElement );
} );
