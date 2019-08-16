/**
 * Internal dependencies
 */
import DisableTitle from './controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-disable-title', {
	icon: false,
	render: DisableTitle,
} );
