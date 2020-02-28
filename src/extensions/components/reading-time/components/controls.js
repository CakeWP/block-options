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
const { __ } = wp.i18n;
const { withSelect, withDispatch, select, subscribe } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Component } = wp.element;
const { hasBlockSupport } = wp.blocks;
const { withSpokenMessages } = wp.components;

const mediaBlocks = [ 'core/image', 'core/gallery', 'core/cover' ];

let saveUnsubscribe;

/**
 * Render plugin
 */
class ReadingTime extends Component {
	constructor() {
		super( ...arguments );
		this.updateMeta = this.updateMeta.bind( this );
		this.calculateReadingTime = this.calculateReadingTime.bind( this );
		this.handleButtonClick = this.handleButtonClick.bind( this );

		this.state = {
			readingTime: 0,
		};
	}
	componentDidMount() {
		this.updateMeta();
		document.addEventListener( 'mousedown', this.handleButtonClick );
	}

	componentWillUnmount() {
		document.removeEventListener( 'mousedown', this.handleButtonClick );
	}

	handleButtonClick( event ) {
		const button = document.querySelector( '.table-of-contents button' ).getAttribute( 'aria-expanded' );
		if ( document.querySelector( '.table-of-contents' ).contains( event.target ) && button === 'false' ) {
			const estimated = this.calculateReadingTime();

			const checkExist = setInterval( function() {
				if ( document.querySelector( '.table-of-contents__popover' ) ) {
					document.querySelector( '.table-of-contents__counts' ).insertAdjacentHTML( 'beforeend',
						`<li class="table-of-contents__count table-of-contents__wordcount">${ __( 'Reading Time', 'block-options' ) }<span class="table-of-contents__number">${ estimated } min</span></li>`
					);
					clearInterval( checkExist );
				}
			}, 100 ); // check every 100ms
		}
	}
	calculateReadingTime() {
		const { content, blocks } = this.props;
		const words = wordcount( content, 'words', {} );

		let estimated = ( words / 275 ) * 60; //get time on seconds
		if ( blocks ) {
			let i = 12;
			map( blocks, ( block ) => {
				if ( mediaBlocks.includes( block.name ) || hasBlockSupport( block.name, 'editorsKitWordCount' ) ) {
					estimated = estimated + i;
					if ( i > 3 ) {
						i--;
					}
				}
			} );
		}
		estimated = estimated / 60; //convert to minutes

		//do not show zero
		if ( estimated < 1 ) {
			estimated = 1;
		}

		return parseInt( estimated.toFixed() );
	}

	updateMeta() {
		const { updateReadingTime } = this.props;

		let wasSavingPost = select( 'core/editor' ).isSavingPost();
		let wasAutosavingPost = select( 'core/editor' ).isAutosavingPost();

		// First remove any existing subscription in order to prevent multiple saves
		if ( saveUnsubscribe ) {
			saveUnsubscribe();
		}

		saveUnsubscribe = subscribe( () => {
			const isSavingPost = select( 'core/editor' ).isSavingPost();
			const isAutosavingPost = select( 'core/editor' ).isAutosavingPost();

			// Save metaboxes on save completion, except for autosaves that are not a post preview.
			const shouldTriggerSave =
				wasSavingPost &&
				! isSavingPost &&
				! wasAutosavingPost;

			// Save current state for next inspection.
			wasSavingPost = isSavingPost;
			wasAutosavingPost = isAutosavingPost;

			if ( shouldTriggerSave ) {
				const calculatedTime = this.calculateReadingTime();

				updateReadingTime( calculatedTime );

				if ( calculatedTime !== this.state.readingTime ) {
					this.setState( { readingTime: calculatedTime } );
					wp.data.dispatch( 'core/editor' ).savePost();
				}
			}
		} );

		// return unssubscribe;
	}

	render() {
		return null;
	}
}

export default compose( [
	withSelect( () => ( {
		content: select( 'core/editor' ).getEditedPostAttribute( 'content' ),
		blocks: select( 'core/editor' ).getEditedPostAttribute( 'blocks' ),
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitReadingTimeWriting' ),
	} ) ),
	withDispatch( ( dispatch ) => {
		return {
			updateReadingTime( estimated ) {
				dispatch( 'core/editor' ).editPost( {
					meta: {
						_editorskit_reading_time: estimated,
					},
				} );
			},
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
] )( ReadingTime );
