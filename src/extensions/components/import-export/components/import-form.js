/**
 * External dependencies
 */
import map from 'lodash/map';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import icon from './icon';

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
					</MediaUploadCheck>
				</Fragment>
			</Placeholder>
		);
	}
};

export default withInstanceId( ImportForm );