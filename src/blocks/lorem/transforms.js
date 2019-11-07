/**
 * External dependencies
 */
import { loremIpsum } from 'react-lorem-ipsum';

/**
 * WordPress dependencies
 */
const { createBlock } = wp.blocks;
const { select, dispatch } = wp.data;

const transforms = {
	from: [
		{
			type: 'prefix',
			prefix: ':lorem',
			transform() {
				return createBlock( 'core/paragraph', {
					content: loremIpsum(),
				} );
			},
		},
		...[ 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( ( columns ) => ( {
			type: 'prefix',
			prefix: Array( columns + 1 ).join( ':' ) + 'lorem',
			transform() {
				const toSelect = [];
				const blockIndex = select( 'core/block-editor' ).getBlockInsertionPoint();
				const selectedBlock = select( 'core/block-editor' ).getSelectedBlockClientId();

				for ( let i = 1; i <= columns; i++ ) {
					const created = createBlock( 'core/paragraph', {
						content: loremIpsum(),
					} );

					dispatch( 'core/block-editor' ).insertBlocks( created, ( parseInt( blockIndex.index ) + i ) - 1 );

					if ( typeof created !== 'undefined' ) {
						toSelect.push( created.clientId );
					}
				}
				dispatch( 'core/block-editor' ).removeBlock( selectedBlock );

				return dispatch( 'core/block-editor' ).multiSelect( toSelect[ 0 ], toSelect.reverse()[ 0 ] );
			},
		} ) ),
		{
			type: 'prefix',
			prefix: ':hlorem',
			transform() {
				return createBlock( 'core/heading', {
					content: loremIpsum( { avgSentencesPerParagraph: 1, startWithLoremIpsum: false, avgWordsPerSentence: 6 } )[ 0 ].split( '.' )[ 0 ],
				} );
			},
		},
		...[ 2, 3, 4, 5, 6, 7, 8, 9, 10 ].map( ( columns ) => ( {
			type: 'prefix',
			prefix: Array( columns + 1 ).join( ':' ) + 'hlorem',
			transform() {
				const toSelect = [];
				const blockIndex = select( 'core/block-editor' ).getBlockInsertionPoint();
				const selectedBlock = select( 'core/block-editor' ).getSelectedBlockClientId();

				for ( let i = 1; i <= columns; i++ ) {
					const created = createBlock( 'core/heading', {
						content: loremIpsum( { avgSentencesPerParagraph: 1, startWithLoremIpsum: false, avgWordsPerSentence: 6 } )[ 0 ].split( '.' )[ 0 ],
					} );

					dispatch( 'core/block-editor' ).insertBlocks( created, ( parseInt( blockIndex.index ) + i ) - 1 );

					if ( typeof created !== 'undefined' ) {
						toSelect.push( created.clientId );
					}
				}
				dispatch( 'core/block-editor' ).removeBlock( selectedBlock );

				return dispatch( 'core/block-editor' ).multiSelect( toSelect[ 0 ], toSelect.reverse()[ 0 ] );
			},
		} ) ),
	],
};

export default transforms;
