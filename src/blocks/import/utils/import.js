/**
 * External dependencies
 */
import { isString } from 'lodash';

/**
 * Internal dependencies
 */
import { readTextFile } from './file';

/**
 * Import a reusable block from a JSON file.
 *
 * @param {File}     file File.
 * @return {Promise} Promise returning the imported reusable block.
 */
async function importReusableBlock( file ) {
	const fileContent = await readTextFile( file );
	let parsedContent;
	try {
		parsedContent = JSON.parse( fileContent );
	} catch ( e ) {
		throw new Error( 'Invalid JSON file' );
	}

	if (
		parsedContent.__file !== 'wp_block' ||
		! parsedContent.title ||
		! parsedContent.content ||
		! isString( parsedContent.title ) ||
		! isString( parsedContent.content )
	) {
		return importCoreBlocks( parsedContent );
	}

	const postType = await wp.apiFetch( { path: `/wp/v2/types/wp_block` } );
	const reusableBlock = await wp.apiFetch( {
		path: `/wp/v2/${ postType.rest_base }`,
		data: {
			title: parsedContent.title,
			content: parsedContent.content,
			status: 'publish',
		},
		method: 'POST',
	} );

	if ( reusableBlock.id ) {
		return '<!-- wp:block {"ref":' + reusableBlock.id + '} /-->';
	}
	throw new Error( 'Invalid Reusable Block JSON file contents' );
}

function importCoreBlocks( parsedContent ) {
	if (
		parsedContent.__file !== 'core_block' ||
		! parsedContent.content ||
		! isString( parsedContent.content )
	) {
		throw new Error( 'Invalid JSON file' );
	}

	return parsedContent.content;
}

export default importReusableBlock;
