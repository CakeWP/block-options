/**
 * Internal dependencies
 */
import './styles/editor.scss';
import BlockGuideLines from './components/menu';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'editorskit-block-guidelines', {
    icon: false,
	render: BlockGuideLines,
} );