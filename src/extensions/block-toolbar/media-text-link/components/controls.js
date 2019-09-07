/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { select } = wp.data;
const { URLPopover } = wp.blockEditor;
const { RangeControl, withFallbackStyles, ToggleControl, Dropdown, IconButton, Path, SVG, NavigableMenu, MenuItem } = wp.components;

/**
 * Module constants
 */
const LINK_DESTINATION_NONE = 'none';
const LINK_DESTINATION_MEDIA = 'media';
const LINK_DESTINATION_ATTACHMENT = 'attachment';

/**
 * Typography Component
 */
class Controls extends Component {
	constructor() {
		super(...arguments);

		this.onChangeURL = this.onChangeURL.bind(this);
		this.openURLPopover = this.openURLPopover.bind(this);
		this.closeURLPopover = this.closeURLPopover.bind(this);
		this.submitURL = this.submitURL.bind(this);
		this.setTarget = this.setTarget.bind(this);

		this.state = {
			isVisible: false,
		};
	}

	onChangeURL(link) {
		this.setState({ link });
	}

	openURLPopover() {
		this.setState({
			isVisible: true,
		});
	}

	closeURLPopover() {
		this.setState({
			isVisible: false,
		});
	}

	submitURL() {
		// Not shown: Store the updated url.

		this.closeURLPopover();
	}

	setTarget() {
		// Not shown: Store the updated 'opensInNewWindow' setting.
	}

	getLinkDestinations( imageID ) {
		const media = select('core').getMedia(imageID );
		return [
			{
				linkDestination: LINK_DESTINATION_MEDIA,
				title: __('Media File'),
				url: media.source_url,
				icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none" /><Path d="m19 5v14h-14v-14h14m0-2h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z" /><Path d="m14.14 11.86l-3 3.87-2.14-2.59-3 3.86h12l-3.86-5.14z" /></SVG>,
			},
			{
				linkDestination: LINK_DESTINATION_ATTACHMENT,
				title: __('Attachment Page'),
				url: media.link,
				icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path d="M0 0h24v24H0V0z" fill="none" /><Path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" /></SVG>,
			},
		];
	}

	render() {
		const {
			attributes,
			setAttributes,
			label = __('Media Link', 'block-options'),
		} = this.props;

		const { link, isVisible, isEditing } = this.state;

		const {
			url,
			mediaId,
		} = attributes;
		
		return (
			<Fragment>
				<IconButton
					className="components-dropdown-menu__toggle"
					icon="admin-links"
					label={label}
					tooltip={label}
					onClick={this.openURLPopover}
				>
				</IconButton>
				{isVisible && (
					<URLPopover
						// onClickOutside={onClickOutside()}
						onClose={this.closeURLPopover}
						additionalControls={ (
							<NavigableMenu>
								{
									map(this.getLinkDestinations(mediaId ) , (link) => (
										<MenuItem
											key={link.linkDestination}
											icon={link.icon}
											onClick={() => {
												// setUrlInput(null);
												// onChangeUrl(link.url);
												stopEditLink();
											}}
										>
											{link.title}
										</MenuItem>
									))
								}
							</NavigableMenu>
						)}
					>
						{(!url || isEditingLink) && (
							<URLPopover.LinkEditor
								className="editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content"
								value={link}
								onChangeInputValue={this.onChangeURL}
								// onKeyDown={stopPropagationRelevantKeys}
								// onKeyPress={stopPropagation}
								// onSubmit={onSubmitLinkChange()}
								// autocompleteRef={autocompleteRef}
							/>
						)}
					</URLPopover>
				)}
			</Fragment>
		);
	}
}

export default Controls;