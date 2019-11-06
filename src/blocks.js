/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

// Extensions
/**
 * Internal dependencies
 */
import './extensions/attributes';
import './extensions/block-panel';
import './extensions/advanced-controls';
import './extensions/page-template';
import './extensions/disable-title';

//Components on Dropdown Menu
import './extensions/components/autosave';
import './extensions/components/guidelines';
import './extensions/components/editor-height';
import './extensions/components/markdown';
import './extensions/components/scroll-down';
import './extensions/components/manager';
import './extensions/components/code-editor';
import './extensions/components/heading-label';
import './extensions/components/featured-image';
import './extensions/components/reading-time';
import './extensions/components/help-tips';
import './extensions/components/selected-block';

//Block Settings
import './extensions/block-settings';

// Formats
import './extensions/formats/';

//Block Toolbar
import './extensions/block-toolbar';

// Block Transformation
import './extensions/transform/empty-paragraphs';

// Styles
import './extensions/block-styles/';

// Shortcuts
import './extensions/shortcuts/select-parent-block';

// Register Blocks
import * as importBlock from './blocks/import';

export function registerBlocks() {
	[
		importBlock,
	].forEach( ( block ) => {
		if ( ! block ) {
			return;
		}

		const { name, settings } = block;

		registerBlockType( `editorskit/${ name }`, { category: 'common', ...settings } );
	} );
}
registerBlocks();
