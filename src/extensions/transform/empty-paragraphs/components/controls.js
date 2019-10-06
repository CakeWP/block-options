/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { createBlock } = wp.blocks;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { withSpokenMessages, Modal, Button } = wp.components;

class TransformControls extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isOpen: false,
		};
	}

	render() {
		const { getBlocks, getBlockIndex, createSpacer } = this.props;
		const isValid = getBlockIndex - 3;

		const closeModal = () => (
			this.setState({ isOpen: false })
		);

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

		return(
			<Fragment>
				<Modal
					title={__('Enable Shortcut', 'block-options')}
					onRequestClose={() => closeModal()}
					focusOnMount={true}
					closeLabel={__('Close', 'block-options')}
					icon={null}
					className="editorskit-modal-component components-modal--editorskit-transform-empty"
				>
					<p>{__('Do you want to automatically transform four(4) consecutive empty paragraphs into Spacer Block?', 'block-options') }</p>
					<Button isPrimary isLarge onClick={
						() => {
							createSpacer(getFirst.clientId, getSecond.clientId, getThird.clientId, getFourth.clientId);
						}
					} >
						{__('Yes', 'block-options')}
					</Button>
					&nbsp;
					<Button isDefault isLarge>
						{__('No', 'block-options')}
					</Button>
					<p><small>{__('This prompt will only be shown once and will remember your preference. Thanks!', 'block-options')}</small></p>
				</Modal>
			</Fragment>
		);

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
