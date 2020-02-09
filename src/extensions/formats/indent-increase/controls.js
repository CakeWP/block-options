/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;

class IncreaseIndent extends Component {
	render() {
		const {
			selectedBlock,
			isBlockJustified,
			isDisabled,
			updateBlockAttributes,
		} = this.props;

		const { clientId, attributes } = selectedBlock;
		const { editorskit } = attributes;

		if ( isDisabled ) {
			return null;
		}

		const onToggle = () => {
			let indent = 0;

			if ( typeof editorskit !== 'undefined' && typeof editorskit.indent !== 'undefined' ) {
				indent = editorskit.indent;
			}

			delete editorskit.indent;

			const blockOptions = Object.assign( { indent: indent + 20 }, editorskit );

			updateBlockAttributes( clientId, { editorskit: blockOptions } );
		};

		return (
			<RichTextToolbarButton
				icon="editor-indent"
				title={ __( 'Indent Increase', 'block-options' ) }
				onClick={ onToggle }
				isActive={ isBlockJustified }
			/>
		);
	}
}

export default compose(
	withSelect( () => {
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
		if ( ! selectedBlock ) {
			return {};
		}
		return {
			selectedBlock,
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitIndentFormats' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( ( props ) => ! props.isDisabled ),
)( IncreaseIndent );
