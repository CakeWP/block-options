/**
 * Internal dependencies
 */
import icon from './icon';
import CopyBlocks from './components/controls';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-copy', {
	icon: icon.copy,
	render: CopyBlocks,
} );
