/**
 * Internal dependencies
 */
import CodeEditor from './components/code-editor';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-code-editor', {
	icon: false,
	render: CodeEditor,
} );
