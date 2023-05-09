/**
 * Internal dependencies
 */
import MarkdownFormatting from './components/menu';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-markdown-formatting', {
	icon: false,
	render: MarkdownFormatting,
} );
