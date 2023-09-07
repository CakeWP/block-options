import { parse } from '@wordpress/blocks';
import { dispatch } from '@wordpress/data';

/**
 * Inserts the provided resource into the gutenberg editor.
 *
 * @param {string} shortcode - Resource shortcode.
 */
function insertResource( shortcode ) {
	const blocks = parse( shortcode );
	const { insertBlocks } = dispatch( 'core/block-editor' );

	insertBlocks( blocks );
}

export default insertResource;
