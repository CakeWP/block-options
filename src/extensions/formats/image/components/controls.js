/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, useMemo } = wp.element;
const { compose, ifCondition } = wp.compose;
const { insertObject, insert, removeFormat } = wp.richText;
const { computeCaretRect } = wp.dom;
const { select, withSelect, withDispatch } = wp.data;
const { MediaUpload, RichTextToolbarButton, MediaUploadCheck, BlockControls } = wp.blockEditor;
const { Popover, IconButton } = wp.components;

/**
 * Interna dependencies
 */
import { getActiveFormats } from '../../markdown/get-active-formats';

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
		this.onRemove = this.onRemove.bind(this);
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

	onRemove() {
		const { value, onChange, activeAttributes } = this.props;
		console.log(this.props);
		// map(activeFormats, (activeFormat) => {
		// 	newValue = removeFormat( newValue, activeFormat.type);
		// 	newValue = wp.richText.remove(newValue);
		// });

		// newValue=removeFormat(newValue, name);

		// onChange( newValue );
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
		const { value, onChange, isActive, isObjectActive, activeObjectAttributes } = this.props;
		const { style, className, width, height } = activeObjectAttributes;
		let imageID = null;

		if ( className ){
			let getClassNames = className.split(' ');

			getClassNames.filter((cname) => {
				if (cname.includes('wp-image-') && !imageID ){
					imageID = cname.replace('wp-image-', '');
				}
			});
		}

		const activeFormats = getActiveFormats(value);
		
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
						let newValue = wp.richText.create({ html: `<span class="ek-img wp-inline-image"><a href="/" class="ek-link"><img class="wp-image-${id} ek-inline-img" style="width: ${Math.min(width, 150)}px;" src="${url}" alt=""></a><span class="ek-img-caption">Caption</span></span>` });
						console.log(newValue );
						onChange(insert(value,
							newValue
						));
					}}
					onClose={this.closeModal}
					render={({ open }) => {
						open();
						return null;
					}}
				/>}
				{isActive && (activeFormats.filter((formatActive) => [name, 'editorskit/caption'].includes( formatActive.type ) ) ) &&
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
									label={__('Edit Gallery')}
									icon="edit"
									onClick={open}
								/>
							)}
						/>
						<IconButton icon="trash" tooltip={__('Remove', 'block-options')} onClick={ this.onRemove } />
						</form>
						<style dangerouslySetInnerHTML={{
							__html: `
							.editor-format-toolbar__image-container-content, .editor-url-popover{ display: none; }
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
