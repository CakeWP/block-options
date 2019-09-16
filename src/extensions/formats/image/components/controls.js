/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, useMemo } = wp.element;
const { compose, ifCondition } = wp.compose;
const { insertObject } = wp.richText;
const { computeCaretRect } = wp.dom;
const { select, withSelect, withDispatch } = wp.data;
const { MediaUpload, RichTextToolbarButton, MediaUploadCheck, BlockControls } = wp.blockEditor;
const { Popover, IconButton } = wp.components;

const ALLOWED_MEDIA_TYPES = ['image'];
const name = 'editorskit/image';
const title = __('Image', 'block-options');

const stopKeyPropagation = (event) => event.stopPropagation();

const PopoverAtImage = ({ dependencies, ...props }) => {
	return (
		<Popover
			position="bottom center"
			focusOnMount={false}
			anchorRect={useMemo(() => computeCaretRect(), dependencies)}
			{...props}
		/>
	);
};

class ImageControl extends Component {
	constructor() {
		super(...arguments);
		// this.onChange = this.onChange.bind(this);
		this.onSelectImage = this.onSelectImage.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.state = {
			modal: false,
		};
	}

	onSelectImage( image ){
		//https://github.com/WordPress/WordPress/blob/6bd203bb50a4d3698d5712687a126f64fc4fa570/wp-includes/js/tinymce/plugins/wpeditimage/plugin.js
		// items_frame = wp.media({
		// 	width: '250px',
		// 	metadata: { attachment_id: 1453, url: 'http://editorskit.local/wp-content/uploads/2019/09/phpbits.jpg', size: 'custom', 'customWidth': 250, customHeight: 250 },
		// 	state: 'image-details',
		// 	frame: 'image',
		// });

		// // Finally, open the modal.
		// items_frame.open();
		console.log(image);
	}

	onKeyDown(event) {
		if ([LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER].indexOf(event.keyCode) > -1) {
			// Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
			event.stopPropagation();
		}
	}

	openModal() {
		this.setState({ modal: true });
	}

	closeModal() {
		this.setState({ modal: false });
	}

	render() {
		const { value, onChange, isObjectActive, activeObjectAttributes } = this.props;
		const { style, className, width, height } = activeObjectAttributes;
		let imageID = null;

		if ( className ){
			let getClassNames = className.split(' ');

			getClassNames.filter((cname) => {
				if (cname.includes('wp-image-') && !imageID ){
					imageID = cname.replace('wp-image-', '');
				}
			});
			console.log(imageID);
		}

		return (
			<MediaUploadCheck>
				<RichTextToolbarButton
					icon="format-image"
					title={ title }
					onClick={this.openModal}
					isActive={isObjectActive}
				/>
				{this.state.modal && <MediaUpload
					allowedTypes={ALLOWED_MEDIA_TYPES}
					onSelect={({ id, url, alt, width, height }) => {
						this.closeModal();
						onChange(insertObject(value, {
							type: name,
							attributes: {
								className: `wp-image-${id} ek-img`,
								width: `${Math.min(width, 150)}`,
								height: `${Math.min(height, 150)}`,
								url,
								alt,
							},
						}));
					}}
					onClose={this.closeModal}
					render={({ open }) => {
						open();
						return null;
					}}
				/>}
				{isObjectActive && className.split(' ').includes('ek-img') &&
					<PopoverAtImage
						// Reposition Popover when the selection changes or
						// when the width changes.
						dependencies={[style, value.start]}
					>
						{ // Disable reason: KeyPress must be suppressed so the block doesn't hide the toolbar
							/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
						<form
						className="editorskit-format-toolbar__image-container-content editor-format-toolbar__image-container-content block-editor-format-toolbar__image-container-content"
							onKeyPress={stopKeyPropagation}
							onKeyDown={this.onKeyDown}
						>
						<IconButton icon="align-left" tooltip={ __( 'Align Left', 'block-options' ) } />
						<IconButton icon="align-right" tooltip={__('Align Right', 'block-options')} />
						<IconButton icon="align-center" tooltip={__('Align Center', 'block-options')} />
						<IconButton icon="align-none" tooltip={__('Align None', 'block-options')} />
						<MediaUpload
							onSelect={this.onSelectImage}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={imageID}
							render={({ open }) => (
								<IconButton
									className="components-toolbar__control"
									label={__('Edit Gallery')}
									icon="edit"
									onClick={open}
								/>
							)}
						/>
						</form>
						<style dangerouslySetInnerHTML={{
							__html: `
							.editor-format-toolbar__image-container-content{ display: none; }
							.editor-format-toolbar__image-container-content.editorskit-format-toolbar__image-container-content{ display: block; }
						`}} />
						{ /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
					</PopoverAtImage>
				}
			</MediaUploadCheck>
		);
	}
}

export default compose(
	withSelect(() => {
		const selectedBlock = select('core/block-editor').getSelectedBlock();
		if (!selectedBlock) {
			return {};
		}
		return {
			blockId: selectedBlock.clientId,
		};
	}),
)(ImageControl);
