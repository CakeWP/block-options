/**
 * Internal dependencies
 */
import icon from './icon';
import SidebarPanel from './components/panel';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-typography-panel', {
	icon: icon.typography,
	render: SidebarPanel,
} );
