/**
 * Internal dependencies
 */
import AddSelectedBlockClass from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-selected-block', {
	icon: false,
	render: AddSelectedBlockClass,
} );
