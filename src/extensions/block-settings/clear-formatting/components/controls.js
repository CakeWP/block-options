/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { select, withSelect, withDispatch } = wp.data;
const { Fragment, Component } = wp.element;
const { withSpokenMessages } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { compose, ifCondition } = wp.compose;
const { create, toHTMLString } = wp.richText;

const allowedBlocks = [ 'core/paragraph', 'core/heading' ];

/**
 * Render plugin
 */
class ClearBlockFormatting extends Component {
	render() {
		const { blockId, blockName, blockContent, clearBlockFormatting } = this.props;

		const record = create( { html: blockContent } );

		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon="editor-removeformatting"
					label={ __( 'Clear Block Formatting', 'block-options' ) }
					onClick={ () => {
						clearBlockFormatting( blockId, blockName, toHTMLString( {
							value: { ...record, formats: Array( record.formats.length ) },
						} ) );
					} }
				>

				</PluginBlockSettingsMenuItem>

			</Fragment>
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
			blockContent: get( selectedBlock, 'attributes.content' ),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitClearFormattingFormats' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updateBlockAttributes } = dispatch( 'core/block-editor' );
		return {
			clearBlockFormatting( blockId, blockName, blockContent ) {
				updateBlockAttributes( blockId, { content: blockContent } );
			},
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled && allowedBlocks.includes( props.blockName );
	} ),
	withSpokenMessages,
)( ClearBlockFormatting );
