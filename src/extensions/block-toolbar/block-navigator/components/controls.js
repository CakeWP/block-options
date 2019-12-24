/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { Toolbar, withSpokenMessages, IconButton, SVG, Path, Modal } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose, ifCondition } = wp.compose;

/**
 * Internal dependencies
 */
import BlockNavigationList from '../../../block-navigation/list';

const NavigatorIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
		<Path d="M5 5H3v2h2V5zm3 8h11v-2H8v2zm9-8H6v2h11V5zM7 11H5v2h2v-2zm0 8h2v-2H7v2zm3-2v2h11v-2H10z" />
	</SVG>
);

class NavigatorToolbar extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			isNavigationListOpen: false,
		};
	}
	render() {
		const { block, selectBlock, selectedBlockClientId } = this.props;

		const navigatorToolbarButton = (
			<IconButton
				className="components-toolbar__control"
				label={ __( 'Open block navigator', 'block-options' ) }
				onClick={ () => this.setState( { isNavigationListOpen: true } ) }
				icon={ NavigatorIcon }
			/>
		);

		const navigatorModal = this.state.isNavigationListOpen && (
			<Modal
				title={ __( 'Block Navigator', 'block-options' ) }
				closeLabel={ __( 'Close', 'block-options' ) }
				onRequestClose={ () => {
					this.setState( { isNavigationListOpen: false } );
				} }
			>
				<BlockNavigationList
					blocks={ [ block ] }
					selectedBlockClientId={ selectedBlockClientId }
					selectBlock={ selectBlock }
					showNestedBlocks
				/>
			</Modal>
		);

		return (
			<Fragment>
				<BlockControls>
					<Toolbar>
						{ navigatorToolbarButton }
					</Toolbar>
				</BlockControls>
				{ navigatorModal }
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const {
			attributes,
			setAttributes,
			clientId,
		} = props;

		const {
			getSelectedBlockClientId,
			getBlock,
		} = select( 'core/block-editor' );

		return {
			attributes,
			setAttributes,
			clientId,
			block: getBlock( clientId ),
			selectedBlockClientId: getSelectedBlockClientId(),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitNavigatorOptions' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		selectBlock: dispatch( 'core/block-editor' ).selectBlock,
	} ) ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages
)( NavigatorToolbar );
