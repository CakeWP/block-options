/**
 * Internal dependencies
 */
import TransformControls from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-empty-to-spacer', {
	icon: false,
	render: TransformControls,
} );
