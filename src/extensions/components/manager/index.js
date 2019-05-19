/**
 * Internal dependencies
 */
// import './styles/editor.scss';
import FeaturesManager from './components/manager';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-features-manager', {
    icon: false,
	render: FeaturesManager,
} );