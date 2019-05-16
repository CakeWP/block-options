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
const { RichTextToolbarButton } = wp.editor;

class JustifyControl extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			openPopover: false,
		};
	}

	render() {

		const {
			name,
			isActive,
			value,
			onChange,
			activeAttributes,
			blockId,
			blockName,
			isBlockJustified,
			updateBlockAttributes,
		} = this.props;
		
		const onToggle = () => {
			updateBlockAttributes( blockId, { align: isBlockJustified ? null : 'justify' } );
		};
		return (
			<RichTextToolbarButton
				icon="editor-justify"
				title={ __( 'Justify' ) }
				onClick={ onToggle }
				isActive={ isBlockJustified }
			/>
		);
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
			isBlockJustified: 'justify' === get( selectedBlock, 'attributes.align' ),
		};
	} ),
	withDispatch( dispatch => ( {
		updateBlockAttributes: dispatch( 'core/editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( props => 'core/paragraph' === props.blockName )
)( JustifyControl );;