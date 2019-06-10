/**
 * External dependencies
 */
import { map, kebabCase } from 'lodash';

/**
 * Internal dependencies
 */
import exportReusableBlock from '../utils/export';
import download from '../utils/file';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { withSelect, withDispatch, select } = wp.data;
const { compose, withState, ifCondition } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginBlockSettingsMenuItem } = wp.editPost;
const { withSpokenMessages, Modal, CheckboxControl, TabPanel } = wp.components;
const { serialize, parse, createBlock } = wp.blocks;


/**
 * Render plugin
 */
class ExportManager extends Component {

	constructor( props ) {
		super( ...arguments );

		this.saveAsJSON = this.saveAsJSON.bind( this );
	}

	saveAsJSON(){
		const {
			selectedBlockCount,
			selectedBlock,
			selectedBlocks,
			getBlock,
		} = this.props;

		if( selectedBlockCount < 1 ){
			return;
		}

		let blocks, reusable = [], title = 'editorskit/export';

		if( selectedBlockCount == 1 ){
			//export as reusable when reusable is selected
			if( selectedBlock.name == 'core/block' ){
				exportReusableBlock( selectedBlock.attributes.ref );
				return;
			}

			blocks = serialize( selectedBlock );
		}

		if( selectedBlockCount > 1 ){
			blocks = serialize( selectedBlocks );
		}

		//do export magic

		const fileContent = JSON.stringify( {
			__file: 'core_block',
			content: blocks,
		}, null, 2 );

		const fileName = kebabCase( title ) + '.json';
		download( fileName, fileContent, 'application/json' );
	}
	
	render(){

		return (
			<Fragment>
				<PluginBlockSettingsMenuItem
					icon='share-alt2'
					label={ __( 'Export as JSON' ) }
					onClick={ this.saveAsJSON }
				>
					
				</PluginBlockSettingsMenuItem>
			</Fragment>
		);
	}
};

export default compose( [
	withSelect( ( select ) => {
		const { getSelectedBlockCount, getSelectedBlock, getMultiSelectedBlocks } = select( 'core/editor' );
		const { getBlock } = select( 'core/block-editor' );

		return{
			selectedBlockCount: getSelectedBlockCount(),
			selectedBlock: getSelectedBlock(),
			selectedBlocks: getMultiSelectedBlocks(),
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitImportExportTools' ),
			getBlock,
		}
	} ),
	ifCondition( props => {
		return !props.isDisabled;
	} ),
	withSpokenMessages,
] )( ExportManager );