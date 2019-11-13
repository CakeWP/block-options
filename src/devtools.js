/**
 * Dev Tools
 *
 */

/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

// Register Blocks
import * as lorem from './blocks/lorem';

export function registerBlocks() {
	[
		lorem,
	].forEach( ( block ) => {
		if ( ! block ) {
			return;
		}

		const { name, settings } = block;

		registerBlockType( `editorskit/${ name }`, { category: 'common', ...settings } );
	} );
}
registerBlocks();
