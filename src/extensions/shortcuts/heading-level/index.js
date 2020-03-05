/**
 * Internal dependencies
 */
import RegisterHeadingShortcuts from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-shortcuts--heading', {
	icon: false,
	render: RegisterHeadingShortcuts,
} );
