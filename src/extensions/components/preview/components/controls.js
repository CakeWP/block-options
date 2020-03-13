/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
import { count as wordcount } from '@wordpress/wordcount';
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { displayShortcut, rawShortcut, ESCAPE } = wp.keycodes;
const { withSelect, withDispatch, select, subscribe } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Component, Fragment } = wp.element;
const { hasBlockSupport } = wp.blocks;
const { withSpokenMessages, Button, KeyboardShortcuts } = wp.components;
const { PluginMoreMenuItem } = wp.editPost;

const mediaBlocks = ['core/image', 'core/gallery', 'core/cover'];

/**
 * Render plugin
 */
class CustomizerPreview extends Component {
	constructor() {
		super(...arguments);

		this.handleEscape = this.handleEscape.bind(this);
		this.openPreview = this.openPreview.bind(this);

		this.state = {
			isOpen: false,
			deviceType: 'desktop',
		};
	}

	componentDidMount(){
		document.addEventListener('keydown', this.handleEscape);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleEscape);
	}

	handleEscape(event){
		if ( this.state.isOpen ){
			if (event.keyCode === ESCAPE) {
				this.setState({ isOpen: false });
			}
		}
	}

	openPreview(){
		const { isDraft, savePost, autosave } = this.props;
		// Request an autosave. This happens asynchronously and causes the component
		// to update when finished.
		if (isDraft) {
			savePost({ isPreview: true });
		} else {
			autosave({ isPreview: true });
		}

		setTimeout(() => {
			this.setState({ isOpen: true });
		}, 100);
	}

	render() {
		const { previewLink } = this.props;
		const { isOpen } = this.state;


		return (
			<Fragment>
				<PluginMoreMenuItem
					icon={isOpen && 'yes'}
					role="menuitemcheckbox"
					info={__('Show preview without opening new window.', 'block-options')}
					onClick={()=>{
						this.openPreview();
					}}
					shortcut={displayShortcut.primaryShift('p')}
				>
					{__('Preview', 'block-options')}
				</PluginMoreMenuItem>
				<KeyboardShortcuts
					bindGlobal
					shortcuts={{
						[rawShortcut.primaryShift('p')]: ()=>{
							this.openPreview();
						},
					}}
				/>
				{isOpen ? 
					<div
						className={"wp-full-overlay sites-preview editorskit-preview theme-install-overlay " + ' preview-' + this.state.deviceType}
						style={{ display: 'block' }}
					>
						<div className="wp-full-overlay-sidebar">
							<div class="wp-full-overlay-footer">
								<div class="devices-wrapper">
									<h3>{__('Live Preview', 'block-options')}</h3>
									<div class="devices">
										<Button
											className="preview-desktop"
											isActive
											onClick={() => {
												this.setState({ deviceType: 'desktop' });
											}}
										>
											<span class="screen-reader-text">{__('Enter desktop preview mode', 'block-options')}</span>
										</Button>

										<Button
											className="preview-tablet"
											onClick={() => {
												this.setState({ deviceType: 'tablet' });
											}}
										>
											<span class="screen-reader-text">{__('Enter tablet preview mode', 'block-options')}</span>
										</Button>

										<Button
											className="preview-mobile"
											onClick={() => {
												this.setState({ deviceType: 'mobile' });
											}}
										>
											<span class="screen-reader-text">{__('Enter mobile preview mode', 'block-options')}</span>
										</Button>
									</div>
								</div>
								<div className="close-full-overlay-wrapper">
									<Button
										className="close-full-overlay"
										onClick={() => {
											this.setState({ isOpen: false });
										}}
									>
										<span class="screen-reader-text">{__('Close preview mode', 'block-options')}</span>
									</Button>
								</div>
							</div>
						</div>
						<div className="wp-full-overlay-main">
							<iframe src={previewLink + '&editorskitPreview=true'} target='Preview'></iframe>
						</div>
					</div>
				: null }
			</Fragment>
		);
	}
}

export default compose([
	withSelect(({ forcePreviewLink }) => {
		const {
			getEditedPostPreviewLink,
			getEditedPostAttribute,
		} = select('core/editor');

		const previewLink = getEditedPostPreviewLink();

		return{
			previewLink:
				forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
			isDraft:
				['draft', 'auto-draft'].indexOf(
					getEditedPostAttribute('status')
				) !== -1,
			isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitReadingTimeWriting'),
		}
	}),
	withDispatch((dispatch) => ({
		autosave: dispatch('core/editor').autosave,
		savePost: dispatch('core/editor').savePost,
	})),
	ifCondition((props) => {
		return !props.isDisabled;
	}),
	withSpokenMessages,
])(CustomizerPreview);
