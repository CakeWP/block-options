/**
 * Internal dependencies
 */
import BlockSettings from './components/modal';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

/**
 * Register Plugin
 */
const doOnClick = ( ) => {
    // To be called when the user clicks the menu item.
};

registerPlugin( 'editorskit-block-settings', {
    icon: 'visibility',
	render: BlockSettings,
} );