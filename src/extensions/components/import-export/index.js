/**
 * Internal dependencies
 */
import './styles/editor.scss';
import ImportExportManager from './components/manager';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-features-import-export', {
    icon: false,
	render: ImportExportManager,
} );