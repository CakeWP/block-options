/**
 * Internal dependencies
 */
import EditorMinHeight from './components/height';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-editor-height', {
	icon: false,
	render: EditorMinHeight,
} );
