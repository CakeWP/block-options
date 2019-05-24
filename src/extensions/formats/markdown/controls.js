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
const { toggleFormat, applyFormat, getTextContent, slice, remove, __unstableUpdateFormats, toString } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;

class MarkdownControl extends Component {
	constructor() {
		super( ...arguments );
	}

	_experimentalMarkdown( record ,onChange){
		const BACKTICK = '*';
		const { start } = record;
		const text = getTextContent( record );
		
		const characterBefore = text.slice( start - 1, start );

		// Quick check the text for the necessary character.
		if ( characterBefore !== BACKTICK ) {
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
		record = applyFormat( record, { type: 'strong' }, startIndex, endIndex );
		
		onChange( { ...record, needsSelectionUpdate: false } );
		
		return record;
	}

	render(){
		const { value, onChange } = this.props;
		this._experimentalMarkdown( value, onChange ) ;

		return null;
	}

}

export default compose(
	withSelect( select => {
		const selectedBlock = select( 'core/editor' ).getSelectedBlock();
		if ( ! selectedBlock ) {
			return {};
		}
		return {
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
		};
	} ),
	withDispatch( dispatch => ( {
		updateBlockAttributes: dispatch( 'core/editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( props => 'core/paragraph' === props.blockName )
)( MarkdownControl );;