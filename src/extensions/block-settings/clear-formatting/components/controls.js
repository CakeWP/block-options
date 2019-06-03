/**
 * External dependencies
 */
import { get, map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { select, withSelect, withDispatch } = wp.data;
const { Fragment, Component } = wp.element;
const { Button, Modal, TextControl, TabPanel, withSpokenMessages } = wp.components;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { compose, ifCondition } = wp.compose;
const { create, toHTMLString, applyFormat, removeFormat } = wp.richText;

const allowedBlocks = [ 'core/paragraph', 'core/heading' ];

/**
 * Render plugin
 */
class ClearBlockFormatting extends Component {

	constructor( props ) {
		super( ...arguments );

	}

	render() {
		const { blockId, blockName, blockContent, clearBlockFormatting } = this.props;
		
		let record = create( { html: blockContent } );
		
		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon='editor-removeformatting'
					label={ __( 'Clear Block Formatting' ) }
					onClick={ () => {
						clearBlockFormatting( blockId, blockName, toHTMLString( { 
							value: { ...record, formats: Array(record.formats.length) }
						} ) );
					} }
				>
					
				</PluginBlockSettingsMenuItem>

			</Fragment>
		);
	}
};

export default compose(
	withSelect( select => {
		const selectedBlock = select( 'core/editor' ).getSelectedBlock();
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
	withDispatch( dispatch => {
		const { updateBlockAttributes } = dispatch( 'core/editor' );
		return{
			clearBlockFormatting( blockId, blockName, blockContent ) {
				updateBlockAttributes( blockId, { content: blockContent } );
			}
		}
	} ),
	ifCondition( props => {
		return !props.isDisabled && allowedBlocks.includes( props.blockName );
	} ),
	withSpokenMessages,
)( ClearBlockFormatting );
