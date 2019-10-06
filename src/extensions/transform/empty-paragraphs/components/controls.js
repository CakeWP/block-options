/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { createBlock } = wp.blocks;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { withSpokenMessages } = wp.components;

class TransformControls extends Component {
	render() {
		const { getBlocks, getBlockIndex, createSpacer } = this.props;
		const isValid = getBlockIndex - 3;

		if ( isValid < 0 ) {
			return null;
		}
		const getFirst = getBlocks[ isValid ];
		const getSecond = getBlocks[ isValid + 1 ];
		const getThird = getBlocks[ isValid + 2 ];
		const getFourth = getBlocks[ isValid + 3 ];
		if ( getFirst.name !== 'core/paragraph' || getSecond.name !== 'core/paragraph' || getThird.name !== 'core/paragraph' || getFourth.name !== 'core/paragraph' ) {
			return null;
		}

		if ( ! isEmpty( getFirst.attributes.content ) || ! isEmpty( getSecond.attributes.content ) || ! isEmpty( getThird.attributes.content ) || ! isEmpty( getFourth.attributes.content ) ) {
			return null;
		}

		createSpacer( getFirst.clientId, getSecond.clientId, getThird.clientId, getFourth.clientId );

		return null;
	}
}

export default compose(
	withSelect( () => {
		const selectedId = select( 'core/block-editor' ).getSelectedBlockClientId();
		return {
			getBlocks: select( 'core/block-editor' ).getBlocks(),
			getBlockIndex: select( 'core/block-editor' ).getBlockIndex( selectedId ),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitTransformEmptyWriting' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		createSpacer( getFirst, getSecond, getThird, getFourth ) {
			const { selectBlock, replaceBlock, removeBlocks } = dispatch( 'core/block-editor' );
			const createSpacer = createBlock( 'core/spacer', {} );
			removeBlocks( [ getFirst, getSecond, getThird ] );
			replaceBlock( getFourth, createSpacer );
			selectBlock( createSpacer.clientId );
		},
	} ) ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
)( TransformControls );
