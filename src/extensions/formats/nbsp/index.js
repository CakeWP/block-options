/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { insert, getTextContent } = wp.richText;
const { RichTextShortcut } = wp.blockEditor;

/**
 * Block constants
 */
const name = 'editorskit/nbsp';
const UNICODE = '\u00A0';

export const nbsp = {
	name,
	title: __( 'Nonbreaking Space', 'block-options' ),
	tagName: 'span',
	className: 'nbsp',
	edit( { value, onChange } ) {
		const onToggle = () => {
			const beforeText = getTextContent( value ).slice( 0, value.start );
			const previousLineSeparatorIndex = beforeText.lastIndexOf( UNICODE );
			const previousLineSeparatorFormats = value.replacements[ previousLineSeparatorIndex ];
			let replacements = [ , ]; // eslint-disable-line no-sparse-arrays

			if ( previousLineSeparatorFormats ) {
				replacements = [ previousLineSeparatorFormats ];
			}

			const valueToInsert = {
				formats: [ , ], // eslint-disable-line no-sparse-arrays
				replacements,
				text: UNICODE,
			};

			const record = insert( value, valueToInsert, value.start, value.end );

			onChange( { ...record, needsSelectionUpdate: true } );
		};

		return (
			<Fragment>
				<RichTextShortcut
					type="primaryShift"
					character="SPACE"
					onUse={ onToggle }
				/>
			</Fragment>
		);
	},
};
