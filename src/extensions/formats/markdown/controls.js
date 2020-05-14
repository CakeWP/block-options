/**
 * External dependencies
 */
import map from 'lodash/map';

/**
 * Internal dependencies
 */
import { getActiveFormats } from './get-active-formats';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { applyFormat, getTextContent, remove } = wp.richText;
const { withSpokenMessages } = wp.components;

class MarkdownControl extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			start: null,
			end: null,
		};
	}

	_experimentalMarkdown( record, onChange, markdown, format ) {
		const { start } = record;
		const text = getTextContent( record );

		// console.log( record );

		const checkMarkdown = text.slice( start - 1, start );
		// Quick check the text for the necessary character.
		if ( checkMarkdown !== markdown ) {
			return record;
		}

		const textBefore = text.slice( 0, start - 1 );
		const indexBefore = textBefore.lastIndexOf( markdown );

		if ( indexBefore === -1 ) {
			return record;
		}

		const startIndex = indexBefore;
		const endIndex = start - 2;

		if ( startIndex === endIndex ) {
			return record;
		}

		//return if text contains newline(↵)
		const characterInside = text.slice( startIndex, endIndex + 1 );
		const splitNewlines = characterInside.split( '\n' );

		if ( splitNewlines.length > 1 ) {
			return record;
		}

		//return if inside code format
		const activeFormats = getActiveFormats( record );
		if ( activeFormats.length > 0 ) {
			if ( activeFormats.filter( ( formatActive ) => formatActive.type === 'core/code' ) ) {
				return record;
			}
		}

		const characterBefore = text.slice( startIndex - 1, startIndex );

		//continue if character before is a letter
		if ( characterBefore.length === 1 && characterBefore.match( /[A-Z|a-z]/i ) ) {
			return record;
		}

		//do not apply markdown when next character is SPACE
		const characterAfter = text.slice( startIndex + 1, startIndex + 2 );
		if ( characterAfter === ' ' ) {
			return record;
		}

		record = remove( record, startIndex, startIndex + 1 );
		record = remove( record, endIndex, endIndex + 1 );
		record = applyFormat( record, { type: format }, startIndex, endIndex );

		// onSelectionChange( startIndex, endIndex );
		wp.data.dispatch( 'core/block-editor' ).stopTyping();

		this.setState( { start: startIndex, end: endIndex } );
		record.activeFormats = [];
		onChange( { ...record, needsSelectionUpdate: true } );

		return record;
	}

	render() {
		const { value, onChange } = this.props;
		const markdowns = {
			bold: {
				markdown: '*',
				format: 'core/bold',
			},
			italic: {
				markdown: '_',
				format: 'core/italic',
			},
			strikethrough: {
				markdown: '~',
				format: 'core/strikethrough',
			},
		};

		map( markdowns, ( markdown ) => {
			this._experimentalMarkdown( value, onChange, markdown.markdown, markdown.format );
		} );

		return null;
	}
}

export default compose(
	withSelect( ( select ) => {
		const { isFeatureActive } = select('core/edit-post');
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitMarkdownWriting' ),
			isIceberg: isFeatureActive('icebergWritingMode'),
		};
	} ),
	withDispatch( ( dispatch, {
		clientId,
		instanceId,
		identifier = instanceId,
	} ) => {
		const {
			selectionChange,
		} = dispatch( 'core/block-editor' );

		return {
			onSelectionChange( start, end ) {
				selectionChange( clientId, identifier, start, end );
			},
		};
	} ),
	ifCondition( ( props ) => ! props.isDisabled && ! props.isIceberg ),
	withSpokenMessages,
)( MarkdownControl );
