/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { mediaUpload } = wp.editor;
const { compose } = wp.compose;
const { DropZone } = wp.components;
const { withDispatch } = wp.data;

const ALLOWED_MEDIA_TYPES = ['image'];

class BackgroundDropZone extends Component {
	constructor() {
		super(...arguments);
		this.addFile = this.addFile.bind(this);
		this.onSelectFile = this.onSelectFile.bind(this);
	}

	addFile(files) {
		mediaUpload({
			allowedTypes: ALLOWED_MEDIA_TYPES,
			filesList: files,
			onFileChange: ([media]) => this.onSelectFile(media),
		});
	}

	onSelectFile(media) {
		if (media && media.url) {
			this.props.onUpdateImage(media);
		}
	}

	render() {
		return (
			<Fragment>
				<DropZone
					onFilesDrop={this.addFile}
					label={this.props.label}
				/>
			</Fragment>
		);
	}
}

const applyWithDispatch = withDispatch((dispatch) => {
	const { editPost } = dispatch('core/editor');
	return {
		onUpdateImage(image) {
			editPost({ featured_media: image.id });
		},
		onRemoveImage() {
			editPost({ featured_media: 0 });
		},
	};
});


export default compose(
	applyWithDispatch
)(BackgroundDropZone);