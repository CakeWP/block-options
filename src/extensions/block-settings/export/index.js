/**
 * Internal dependencies
 */
import './styles/editor.scss';
import ExportManager from './components/export';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-features-import-export', {
    icon: false,
	render: ExportManager,
} );