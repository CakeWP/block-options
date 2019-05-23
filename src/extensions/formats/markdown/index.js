import showdown from 'showdown';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const { toggleFormat, applyFormat, getTextContent, slice, remove } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;

function applyMarkdown( value ) {
	var noMorePsExt = {
	  type: 'output',
	  filter: function(text, converter) {
	    var re = /<\/?p[^>]*>/ig;
	    text = text.replace(re, '');
	    return text;
	  }
	};

	const converter = new showdown.Converter( {
		noHeaderId: true,
		tables: true,
		strikethrough: true,
		underline: true,
		emoji: true,
		extensions: [noMorePsExt],
	} );
	value.start = 0;
	value.text = converter.makeHtml( value.text );

	return value;
} 


/**
 * Block constants
 */
const name = 'editorskit/markdown';

export const markdown = {
	name,
	title: __( 'Underline' ),
	tagName: 'p',
	className: 'md',
	attributes: {
		style: 'style',
	},
	edit: class EditorsKitMarkdown extends Component {
		constructor() {
			super( ...arguments );
		}

		test( record , onChange){
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
			record = onChange( applyFormat( record, { type: 'strong' }, startIndex, endIndex ) );
			console.log( record );
			return record;
		}

		render(){
			const { value, onChange } = this.props;
			this.test( value, onChange ) ;
			
			return null;
		}
	},
};
