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

// Styles
import './styles/style.scss';

// Extensions
import './extensions/attributes';
import './extensions/advanced-controls';
import './extensions/page-template';
import './extensions/disable-title';

//Components on Dropdown Menu
import './extensions/components/guidelines';
import './extensions/components/autosave';
import './extensions/components/markdown';
import './extensions/components/manager';

//Block Settings
import './extensions/block-settings';

// Formats
import './extensions/formats/';

// Styles
import './extensions/block-styles/';

// Register Blocks
import * as importBlock from './blocks/import';

export function registerBlocks () {
	[
		importBlock,
	].forEach( ( block ) => {

		if ( ! block ) {
			return;
		}

		const { name, icon, settings } = block;

		registerBlockType( `editorskit/${ name }`, { category: 'common', ...settings } );
	} );
};
registerBlocks();
