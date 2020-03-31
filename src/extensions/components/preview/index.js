/**
 * Internal dependencies
 */
import CustomizerPreview from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-customizer-preview', {
	icon: false,
	render: CustomizerPreview,
} );
