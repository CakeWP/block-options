/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
import { count as wordcount } from '@wordpress/wordcount';
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { withSelect } = wp.data;
const { compose } = wp.compose;
const { Component } = wp.element;
const { hasBlockSupport } = wp.blocks;
const { withSpokenMessages } = wp.components;

const mediaBlocks = [ 'core/image', 'core/gallery', 'core/cover' ];

/**
 * Render plugin
 */
class ReadingTime extends Component {
	constructor() {
		super( ...arguments );
		this.handleButtonClick = this.handleButtonClick.bind( this );
	}
	componentDidMount() {
		document.addEventListener( 'mousedown', this.handleButtonClick );
	}

	componentWillUnmount() {
		document.removeEventListener( 'mousedown', this.handleButtonClick );
	}

	handleButtonClick( event ) {
		const { content, blocks } = this.props;
		const words = wordcount( content, 'words', {} );
		const button = document.querySelector( '.table-of-contents button' ).getAttribute( 'aria-expanded' );
		if ( document.querySelector( '.table-of-contents' ).contains( event.target ) && button === 'false' ) {
			let estimated = ( words / 275 ) * 60; //get time on seconds
			if ( blocks ) {
				let i = 12;
				map( blocks, ( block ) => {
					if ( mediaBlocks.includes( block.name ) || hasBlockSupport( block, 'hasWordCount' ) ) {
						estimated = estimated + i;
						if ( i > 3 ) {
							i--;
						}
					}
				} );
			}
			estimated = estimated / 60; //convert to minutes
			let checkExist = setInterval( function() {
				if ( document.querySelector( '.table-of-contents__popover' ) ) {
					document.querySelector( '.table-of-contents__counts' ).insertAdjacentHTML( 'beforeend',
						`<li class="table-of-contents__count table-of-contents__wordcount">Est. Reading Time<span class="table-of-contents__number">${ estimated.toFixed() } min</span></li>`
					);
					clearInterval( checkExist );
				}
			}, 100 ); // check every 100ms
		}
	}

	render() {
		return null;
	}
}

export default compose( [
	withSelect( ( select ) => ( {
		content: select( 'core/editor' ).getEditedPostAttribute( 'content' ),
		blocks: select( 'core/editor' ).getEditedPostAttribute( 'blocks' ),
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitHeadingLabelWriting' ),
	} ) ),
	withSpokenMessages,
] )( ReadingTime );
