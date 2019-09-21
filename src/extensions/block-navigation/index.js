/**
 * External dependencies
 */
import { noop } from 'lodash';

/**
 * WordPress dependencies
 */
const { withSelect, withDispatch } = wp.data;
const { NavigableMenu } = wp.components;
const { compose } = wp.compose;
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import BlockNavigationList from './list';

function BlockNavigation( { rootBlock, rootBlocks, selectedBlockClientId, selectBlock } ) {
	if ( ! rootBlocks || rootBlocks.length === 0 ) {
		return null;
	}

	const hasHierarchy = (
		rootBlock && (
			rootBlock.clientId !== selectedBlockClientId ||
			( rootBlock.innerBlocks && rootBlock.innerBlocks.length !== 0 )
		)
	);

	return (
		<NavigableMenu
			role="presentation"
			className="editor-block-navigation__container block-editor-block-navigation__container"
		>
			<p className="editor-block-navigation__label block-editor-block-navigation__label">{ __( 'Block navigation' ) }</p>
			{ hasHierarchy && (
				<BlockNavigationList
					blocks={ [ rootBlock ] }
					selectedBlockClientId={ selectedBlockClientId }
					selectBlock={ selectBlock }
					showNestedBlocks
				/>
			) }
			{ ! hasHierarchy && (
				<BlockNavigationList
					blocks={ rootBlocks }
					selectedBlockClientId={ selectedBlockClientId }
					selectBlock={ selectBlock }
				/>
			) }
		</NavigableMenu>
	);
}

export default compose(
	withSelect( ( select ) => {
		const {
			getSelectedBlockClientId,
			getBlockHierarchyRootClientId,
			getBlock,
			getBlocks,
		} = select( 'core/block-editor' );
		const selectedBlockClientId = getSelectedBlockClientId();
		return {
			rootBlocks: getBlocks(),
			rootBlock: selectedBlockClientId ? getBlock( getBlockHierarchyRootClientId( selectedBlockClientId ) ) : null,
			selectedBlockClientId,
		};
	} ),
	withDispatch( ( dispatch, { onSelect = noop } ) => {
		return {
			selectBlock( clientId ) {
				dispatch( 'core/block-editor' ).selectBlock( clientId );
				onSelect( clientId );
			},
		};
	} )
)( BlockNavigation );
