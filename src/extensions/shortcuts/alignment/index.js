/**
 * Internal dependencies
 */
import RegisterAlignmentShortcut from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-shortcuts--alignment', {
	icon: false,
	render: RegisterAlignmentShortcut,
} );
