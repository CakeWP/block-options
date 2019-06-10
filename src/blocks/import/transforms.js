/**
 * External dependencies
 */
import { includes } from 'lodash';

/**
 * WordPress dependencies
 */
const { createBlobURL } = wp.blob;
const { createBlock } = wp.blocks;

const transforms = {
	from: [
		{
			type: 'files',
			isMatch( files ) {
				return files[0].type == 'application/json';
			},
			transform: ( files ) => {
				const blocks = [];

				blocks.push( createBlock( 'editorskit/import', {
					file: files,
				} ) );

				return blocks;
			},
		},
	],
};

export default transforms;