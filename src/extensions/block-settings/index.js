/**
 * Internal dependencies
 */
import './styles/editor.scss';
import BlockSettings from './components/modal';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-block-settings', {
    icon: 'visibility',
	render: BlockSettings,
} );