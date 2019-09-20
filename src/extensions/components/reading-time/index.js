/**
 * Internal dependencies
 */
import ReadingTime from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-reading-time', {
	icon: false,
	render: ReadingTime,
} );
