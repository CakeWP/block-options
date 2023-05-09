/**
 * Internal dependencies
 */
import FeaturesManagerModal from './components/';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-features-manager', {
	icon: false,
	render: FeaturesManagerModal,
} );
