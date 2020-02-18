/**
 * Internal dependencies
 */
import importReusableBlock from '../utils/import';
import insertImportedBlocks from '../utils/insert';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withInstanceId } = wp.compose;
const { Fragment, Component } = wp.element;
const { MediaUploadCheck } = wp.blockEditor;
const { DropZone, FormFileUpload, Placeholder, Notice } = wp.components;

const ALLOWED_BG_MEDIA_TYPES = [ 'json' ];

/**
 * Block edit function
 */
class Edit extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			isLoading: false,
			error: null,
		};

		this.isStillMounted = true;
		this.addFile = this.addFile.bind( this );
	}

	componentDidMount() {
		const { file } = this.props.attributes;

		if ( file ) {
			this.setState( { isLoading: true } );
			this.addFile( file );
		}
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	addFile( files ) {
		let file = files[ 0 ];

		if ( files.target ) {
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
				insertImportedBlocks( this.props.clientId, reusableBlock, this.props.onClose );
			} )
			.catch( ( error ) => {
				if ( ! this.isStillMounted ) {
					return;
				}

				let uiMessage;
				switch ( error.message ) {
					case 'Invalid JSON file':
						uiMessage = __( 'Invalid JSON file', 'block-options' );
						break;
					case 'Invalid Reusable Block JSON file':
						uiMessage = __( 'Invalid Reusable Block JSON file', 'block-options' );
						break;
					default:
						uiMessage = __( 'Unknown error', 'block-options' );
				}

				this.setState( { isLoading: false, error: uiMessage } );
			} );
	}

	render() {
		const { isLoading, error } = this.state;

		return (
			<Placeholder
				icon="download"
				label={ __( 'Import from JSON', 'block-options' ) }
				instructions={ __( 'Drag a file or upload a new one from your device.', 'block-options' ) }
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
							label={ __( 'Import from JSON', 'block-options' ) }
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
							{ __( 'Upload', 'block-options' ) }
						</FormFileUpload>
					</MediaUploadCheck>
				</Fragment>
			</Placeholder>
		);
	}
}

export default withInstanceId( Edit );
