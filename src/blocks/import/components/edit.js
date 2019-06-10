/**
 * External dependencies
 */
import map from 'lodash/map';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import icon from '../icon';
import importReusableBlock from '../utils/import';

/**
 * WordPress dependencies
 */
const { __,  _x } = wp.i18n;
const { withSelect, withDispatch, select, dispatch } = wp.data;
const { compose, withState, ifCondition, withInstanceId } = wp.compose;
const { Fragment, Component } = wp.element;
const { parse, createBlock } = wp.blocks;
const { MediaUploadCheck, BlockIcon } = wp.blockEditor;
const { withSpokenMessages, CheckboxControl, Button, DropZone, FormFileUpload, Placeholder, Notice } = wp.components;


const ALLOWED_BG_MEDIA_TYPES = [ 'json' ];

/**
 * Block edit function
 */
class Edit extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			isLoading: false,
			error: null,
		};

		this.isStillMounted = true;
		this.addFile = this.addFile.bind( this );
	}

	componentDidMount(){
		const { file } = this.props.attributes;

		if( file ){
			this.setState( { isLoading: true } );
			this.addFile( file );
		}
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	insertImportedBlocks( blocks ){
		const { onClose } = this.props;
		blocks = parse( blocks );
		let toSelect  = [];
		let blockIndex = select( 'core/editor' ).getBlockInsertionPoint();
		if( blocks.length > 0 ){
			for( var block in blocks ){
				var created = createBlock( blocks[ block ].name, blocks[ block ].attributes, blocks[ block ].innerBlocks );
				dispatch( 'core/editor' ).insertBlocks( created , parseInt( blockIndex.index ) + parseInt( block ) );

				if( typeof created !== 'undefined' ){
					toSelect.push( created.clientId );
				}
			}

			//remove insertion point if empty
			dispatch( 'core/editor' ).removeBlock( this.props.clientId );

			//select inserted blocks
			if( toSelect.length > 0 ){
				dispatch( 'core/editor' ).multiSelect( toSelect[0], toSelect.reverse()[0] );
			}
		}

		onClose();
	}

	addFile( files ) {
		let file = files[ 0 ];
		
		if( files.target ){
			file = event.target.files[ 0 ];
		}

		if ( ! file ) {
			return;
		}
		this.setState( { isLoading: true } );
		
		importReusableBlock( file )
			.then( ( reusableBlock ) => {
				if ( ! this.isStillMounted ) {
					return;
				}

				this.setState( { isLoading: false } );
				this.insertImportedBlocks( reusableBlock );
			} )
			.catch( ( error ) => {
				if ( ! this.isStillMounted ) {
					return;
				}

				let uiMessage;
				switch ( error.message ) {
					case 'Invalid JSON file':
						uiMessage = __( 'Invalid JSON file' );
						break;
					case 'Invalid Reusable Block JSON file':
						uiMessage = __( 'Invalid Reusable Block JSON file' );
						break;
					default:
						uiMessage = __( 'Unknown error' );
				}

				this.setState( { isLoading: false, error: uiMessage } );
			} );
	}
	
	render(){
		const { instanceId } = this.props;
		const { file, isLoading, error } = this.state;

		const inputId = 'editorskit-blocks-import-form-' + instanceId;

		return (
			<Placeholder
				icon={ <BlockIcon icon={ icon } /> }
				label={ __( 'Import from JSON' ) }
				instructions={ __( 'Drag a file or upload a new one from your device.' ) }
				className="editor-media-placeholder"
				notices={ error && (
					<Notice status="error">
						{ error }
					</Notice>
				) }
			>
				<Fragment>
					<MediaUploadCheck>
						<DropZone
							onFilesDrop={ this.addFile }
							label={ __( 'Import from JSON' ) }
						/>
						<FormFileUpload
							isLarge
							className="editor-media-placeholder__button"
							onChange={ this.addFile }
							accept={ ALLOWED_BG_MEDIA_TYPES }
							isBusy={ isLoading }
							disabled={ isLoading }
							multiple={ false }
						>
							{ __( 'Upload' ) }
						</FormFileUpload>
					</MediaUploadCheck>
				</Fragment>
			</Placeholder>
		);
	}
};

export default withInstanceId( Edit );
