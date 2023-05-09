/**
 * Internal dependencies
 */
import HeadingLabel from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-heading-label', {
	icon: false,
	render: HeadingLabel,
} );
