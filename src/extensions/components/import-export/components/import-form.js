/**
 * External dependencies
 */
import map from 'lodash/map';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import icon from './icon';
import importReusableBlock from '../utils/import';

/**
 * WordPress dependencies
 */
const { __,  _x } = wp.i18n;
const { withSelect, withDispatch, select } = wp.data;
const { compose, withState, ifCondition, withInstanceId } = wp.compose;
const { Fragment, Component } = wp.element;
const { MediaUploadCheck, BlockIcon } = wp.blockEditor;
const { withSpokenMessages, CheckboxControl, Button, DropZone, FormFileUpload, Placeholder } = wp.components;


const ALLOWED_BG_MEDIA_TYPES = [ 'json' ];


/**
 * Render plugin
 */
class ImportForm extends Component {

	constructor( props ) {
		super( ...arguments );

		this.state = {
			isLoading: false,
			error: null,
			file: null,
		};

		this.isStillMounted = true;
		this.addFile = this.addFile.bind( this );
		this.onUpload = this.onUpload.bind( this );
		this.onChangeFile = this.onChangeFile.bind( this );
		this.onSubmit = this.onSubmit.bind( this );
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	addFile( files ) {
		this.setState( { file: files[ 0 ] } );
		console.log( files );
	}

	onUpload( event ) {
		this.setState( { file: event.target.files[ 0 ] } );
	}

	onChangeFile( event ) {
		this.setState( { file: event.target.files[ 0 ] } );
	}

	onSubmit( event ) {
		event.preventDefault();
		const { file } = this.state;
		const { onUpload } = this.props;
		if ( ! file ) {
			return;
		}
		this.setState( { isLoading: true } );
		console.log( this.props );
		importReusableBlock( file )
			.then( ( reusableBlock ) => {
				if ( ! this.isStillMounted ) {
					return;
				}

				this.setState( { isLoading: false } );
				console.log( reusableBlock );
				// onUpload( reusableBlock );
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
				label={ __( 'Import' ) }
				instructions={ __( 'Drag a file, upload a new one from your device.' ) }
				className="editor-media-placeholder"
				notices={ error }
			>
				<Fragment>
					<MediaUploadCheck>
						<DropZone
							onFilesDrop={ this.addFile }
							label={ __( 'Import' ) }
						/>
						<FormFileUpload
							isLarge
							className="editor-media-placeholder__button"
							onChange={ this.onUpload }
							accept={ ALLOWED_BG_MEDIA_TYPES }
							multiple={ false }
						>
							{ __( 'Upload' ) }
						</FormFileUpload>
						<form
							className="list-reusable-blocks-import-form"
							onSubmit={ this.onSubmit }
						>
							<Button
								type="submit"
								isBusy={ isLoading }
								disabled={ ! file || isLoading }
								isDefault
								className="list-reusable-blocks-import-form__button"
							>
								{ _x( 'Import', 'button label' ) }
							</Button>
						</form>
					</MediaUploadCheck>
				</Fragment>
			</Placeholder>
		);
	}
};

export default withInstanceId( ImportForm );