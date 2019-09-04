/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;

class JustifyControl extends Component {
	render() {
		const {
			blockId,
			isBlockJustified,
			isDisabled,
			updateBlockAttributes,
		} = this.props;

		if ( isDisabled ) {
			return null;
		}

		const onToggle = () => {
			updateBlockAttributes( blockId, { align: isBlockJustified ? null : 'justify' } );
		};
		return (
			<RichTextToolbarButton
				icon="editor-justify"
				title={ __( 'Justify', 'block-options' ) }
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
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
			isBlockJustified: 'justify' === get( selectedBlock, 'attributes.align' ),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitJustifyFormats' ),
			formatTypes: select( 'core/rich-text' ).getFormatTypes(),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( ( props ) => {
		const checkFormats = props.formatTypes.filter( ( formats ) => formats.name === 'wpcom/justify' );
		return 'core/paragraph' === props.blockName && checkFormats.length === 0;
	} )
)( JustifyControl );
