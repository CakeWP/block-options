/**
 * Internal dependencies
 */
import SetAsFeaturedImage from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-set-as-featured-image', {
	icon: 'format-image',
	render: SetAsFeaturedImage,
} );
