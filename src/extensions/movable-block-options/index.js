import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

import DetachSwitchButton from './components/detach-button';

import './subscriptions/toggle-detach-sidebar';

// Rendering the history switcher
domReady( () => {
	setTimeout( () => {
		const headerElement = document.querySelector( '.edit-post-header-toolbar__left' );

		const rootElement = document.createElement( 'div' );

		rootElement.className = 'editorskit-history-button';
		render( <DetachSwitchButton />, rootElement );

		headerElement.append( rootElement );
	}, 0 );
} );
