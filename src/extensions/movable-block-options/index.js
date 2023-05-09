import domReady from '@wordpress/dom-ready';
import { registerPlugin } from '@wordpress/plugins';

import DetachSwitchButton from './components/detach-button';

import './subscriptions/toggle-detach-sidebar';

// Rendering the history switcher
domReady( () => {
	registerPlugin( 'editorskit-detach-block-options', {
		render: DetachSwitchButton,
	} );
} );
