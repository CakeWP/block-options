/**
 * Internal dependencies
 */
import ScrollDown from './components/scrolldown';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-scrolldown', {
	icon: false,
	render: ScrollDown,
} );
