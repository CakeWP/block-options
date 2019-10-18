/**
 * WordPress dependencies
 */
const { Fragment, Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect } = wp.data;
const { insert, getTextContent } = wp.richText;
const { RichTextShortcut } = wp.blockEditor;
const { withSpokenMessages } = wp.components;

const UNICODE = '\u00A0';

class Edit extends Component {
	render() {
		const {
			value,
			onChange,
		} = this.props;

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
	}
}

export default compose(
	withSelect( () => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitNonbreakingSpaceShortcuts' ),
		};
	} ),
	ifCondition( ( props ) => ! props.isDisabled ),
	withSpokenMessages,
)( Edit );
