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
const { withSelect, withDispatch, select, subscribe } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Component, Fragment } = wp.element;
const { hasBlockSupport } = wp.blocks;
const { withSpokenMessages, Button } = wp.components;

const mediaBlocks = ['core/image', 'core/gallery', 'core/cover'];

/**
 * Render plugin
 */
class CustomizerPreview extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isOpen: false,
			deviceType: 'desktop',
		};
	}

	render() {
		const { previewLink } = this.props;
		console.log(previewLink);
		return (
			<Fragment>
				<div 
					className={ "wp-full-overlay sites-preview editorskit-preview theme-install-overlay " + ' preview-' + this.state.deviceType }
					style={{ display: 'block' }}
				>
					<div className="wp-full-overlay-sidebar">
						{/* <div class="wp-full-overlay-header">
							<button class="close-full-overlay">
								<span class="screen-reader-text">Close</span>
							</button>
						</div> */}
						<div class="wp-full-overlay-footer">
							<div class="devices-wrapper">
								<h3>{__('Live Preview', 'block-options')}</h3>
								<div class="devices">
									<Button
										className="preview-desktop"
										isActive
										onClick={()=>{
											this.setState({ deviceType : 'desktop' });
										}}
									>
										<span class="screen-reader-text">{__( 'Enter desktop preview mode', 'block-options') }</span>
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
						<iframe src={ previewLink + '&editorskitPreview=true' } target='Preview'></iframe>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default compose([
	withSelect(({ forcePreviewLink }) => {
		const {
			getEditedPostPreviewLink,
		} = select('core/editor');

		const previewLink = getEditedPostPreviewLink();

		return{
			previewLink:
				forcePreviewLink !== undefined ? forcePreviewLink : previewLink,
			isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitReadingTimeWriting'),
		}
	}),
	ifCondition((props) => {
		return !props.isDisabled;
	}),
	withSpokenMessages,
])(CustomizerPreview);
