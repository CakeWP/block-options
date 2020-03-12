/**
 * Internal dependencies
 */
import GradientControls from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-gradient-controls', {
	icon: false,
	render: GradientControls,
} );
