/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { toggleFormat, applyFormat, getTextContent, slice, remove, __unstableUpdateFormats, apply, __unstableGetActiveFormats } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { withSpokenMessages } = wp.components;

class MarkdownControl extends Component {
	constructor() {
		super( ...arguments );
	}

	_experimentalMarkdown( record ,onChange){
		const BACKTICK = '*';
		const { start, end } = record;
		const { isCaretWithinFormattedText, onEnterFormattedText, onExitFormattedText } = this.props;
		const text = getTextContent( record );
		const activeFormats = __unstableGetActiveFormats( record );
		
		const characterBefore = text.slice( start - 1, start );

		// Quick check the text for the necessary character.
		if ( characterBefore !== BACKTICK ) {

			if( start == 0 ){
				this.props.onSelectionChange( start, end );
			}

			if ( ! isCaretWithinFormattedText && activeFormats.length ) {
				onEnterFormattedText();
			} else if ( isCaretWithinFormattedText && ! activeFormats.length ) {
				onExitFormattedText();
			}

			if ( activeFormats.length > 0 ) {
				// this.recalculateBoundaryStyle();
			}
			
			return record;
		}

		const textBefore = text.slice( 0, start - 1 );
		const indexBefore = textBefore.lastIndexOf( BACKTICK );

		if ( indexBefore === -1 ) {
			return record;
		}

		const startIndex = indexBefore;
		const endIndex = start - 2;
		
		if ( startIndex === endIndex ) {
			return record;
		}

		record = remove( record, startIndex, startIndex + 1 );
		record = remove( record, endIndex, endIndex + 1 );
		record = applyFormat( record, { type: 'core/bold' }, startIndex, endIndex );
		
		onChange( { ...record, needsSelectionUpdate: false } );
		
		return record;
	}

	render(){
		const { value, onChange, onSelectionChange } = this.props;
		this._experimentalMarkdown( value, onChange ) ;

		return ( <Fragment></Fragment> );
	}

}

export default compose(
	withSelect( ( select, {
		clientId,
		instanceId,
		identifier = instanceId,
		isSelected,
	} ) => {
		const selectedBlock = select( 'core/editor' ).getSelectedBlock();
		const { isCaretWithinFormattedText } = select( 'core/block-editor' );
		if ( ! selectedBlock ) {
			return {};
		}
		return {
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
			blockContent: get( selectedBlock, 'attributes.content' ),
			isCaretWithinFormattedText: isCaretWithinFormattedText(),
		};
	} ),
	withDispatch( ( dispatch, {
		clientId,
		instanceId,
		identifier = instanceId,
	} ) => {

		const {
			selectionChange,
			enterFormattedText,
			exitFormattedText,
		} = dispatch( 'core/block-editor' );

		return{
			updateBlockAttributes: dispatch( 'core/editor' ).updateBlockAttributes,
			onEnterFormattedText: enterFormattedText,
			onExitFormattedText: exitFormattedText,
			onSelectionChange( start, end ) {
				selectionChange( clientId, identifier, start, end );
			}
		};
	}  ),
	ifCondition( props => 'core/paragraph' === props.blockName ),
	withSpokenMessages,
)( MarkdownControl );;