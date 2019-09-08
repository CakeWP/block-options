/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { mediaUpload } = wp.editor;
const { compose } = wp.compose;
const { DropZone, withSpokenMessages } = wp.components;
const { withDispatch, select } = wp.data;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

class BackgroundDropZone extends Component {
	constructor() {
		super( ...arguments );
		this.addFile = this.addFile.bind( this );
		this.onSelectFile = this.onSelectFile.bind( this );
	}

	addFile( files ) {
		document.body.classList.add( 'is-editorskit-uploading-featured' );
		mediaUpload( {
			allowedTypes: ALLOWED_MEDIA_TYPES,
			filesList: files,
			onFileChange: ( [ media ] ) => this.onSelectFile( media ),
		} );
	}

	onSelectFile( media ) {
		if ( media && media.url ) {
			this.props.onUpdateImage( media );
		}
	}

	render() {
		return (
			<Fragment>
				<DropZone
					onFilesDrop={ this.addFile }
					label={ this.props.label }
				/>
			</Fragment>
		);
	}
}

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { editPost } = dispatch( 'core/editor' );
	return {
		onUpdateImage( image ) {
			editPost( { featured_media: image.id } );

			const featuredImageId = select( 'core/editor' ).getEditedPostAttribute( 'featured_media' );

			if ( featuredImageId === image.id ) {
				document.body.classList.remove( 'is-editorskit-uploading-featured' );
			}
		},
		onRemoveImage() {
			editPost( { featured_media: 0 } );
		},
	};
} );

export default compose(
	applyWithDispatch,
	withSpokenMessages
)( BackgroundDropZone );
