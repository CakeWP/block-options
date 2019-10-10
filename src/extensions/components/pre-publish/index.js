/**
 * Internal dependencies
 */
import PrePublishCheck from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-pre-publish', {
	icon: false,
	render: PrePublishCheck,
} );
