/**
 * Internal dependencies
 */
import './styles/editor.scss';
import ManageAutoSave from './components/menu';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-editor-autosave', {
    icon: false,
	render: ManageAutoSave,
} );