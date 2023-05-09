/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { withSelect, dispatch } = wp.data;
const { BlockControls, RichTextToolbarButton, RichTextShortcut } =
	wp.blockEditor;
const { getTextContent, applyFormat, removeFormat, slice, getActiveFormat } =
	wp.richText;
const { isURL } = wp.url;
const { Toolbar, withSpokenMessages } = wp.components;
const { compose, ifCondition } = wp.compose;

/**
 * Internal dependencies
 */
import InlineLinkUI from './inline';

const name = 'editorskit/link';
const title = __('Add Link', 'block-options');
const EMAIL_REGEXP =
	/^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\.[a-z]{2,63}$/i;

class Edit extends Component {
	constructor() {
		super(...arguments);

		this.isEmail = this.isEmail.bind(this);
		this.addLink = this.addLink.bind(this);
		this.stopAddingLink = this.stopAddingLink.bind(this);
		this.onRemoveFormat = this.onRemoveFormat.bind(this);
		this.state = {
			addingLink: false,
		};
	}

	componentDidMount() {
		const { oldFormat } = this.props;
		if (oldFormat) {
			oldFormat.edit = null;
			dispatch('core/rich-text').addFormatTypes(oldFormat);
		}
	}

	isEmail(email) {
		return EMAIL_REGEXP.test(email);
	}

	addLink() {
		const { value, onChange } = this.props;
		const text = getTextContent(slice(value));

		if (text && isURL(text)) {
			onChange(
				applyFormat(value, { type: name, attributes: { url: text } })
			);
		} else if (text && this.isEmail(text)) {
			onChange(
				applyFormat(value, {
					type: name,
					attributes: { url: `mailto:${text}` },
				})
			);
		} else {
			this.setState({ addingLink: true });
		}
	}

	stopAddingLink() {
		this.setState({ addingLink: false });
	}

	onRemoveFormat() {
		const { value, onChange, speak } = this.props;

		let newValue = value;

		map(['core/link', 'editorskit/link'], (linkFormat) => {
			newValue = removeFormat(newValue, linkFormat);
		});

		onChange({ ...newValue });
		speak(__('Link removed.', 'block-options'), 'assertive');
	}

	render() {
		const { activeAttributes, onChange } = this.props;
		let { isActive, value } = this.props;

		const activeFormat = getActiveFormat(value, 'core/link');

		if (activeFormat) {
			activeFormat.type = name;

			if (
				typeof activeFormat.unregisteredAttributes !== 'undefined' &&
				typeof activeFormat.unregisteredAttributes.rel !== 'undefined'
			) {
				activeFormat.attributes = Object.assign(
					activeFormat.attributes,
					{ rel: activeFormat.unregisteredAttributes.rel }
				);
			}

			let newValue = value;
			newValue = applyFormat(newValue, activeFormat);
			newValue = removeFormat(newValue, 'core/link');
			onChange({ ...newValue });

			value = newValue;

			isActive = true;
		}
		return (
			<Fragment>
				<BlockControls>
					<RichTextShortcut
						type="primary"
						character="k"
						onUse={this.addLink}
					/>
					<RichTextShortcut
						type="primaryShift"
						character="k"
						onUse={this.onRemoveFormat}
					/>

					{isActive && (
						<RichTextToolbarButton
							name="link"
							icon="editor-unlink"
							title={__('Unlink', 'block-options')}
							onClick={this.onRemoveFormat}
							isActive={isActive}
							shortcutType="primaryShift"
							shortcutCharacter="k"
						/>
					)}
					{!isActive && (
						<RichTextToolbarButton
							name="link"
							icon="admin-links"
							title={title}
							onClick={this.addLink}
							isActive={isActive}
							shortcutType="primary"
							shortcutCharacter="k"
						/>
					)}

					<InlineLinkUI
						value={value}
						isActive={isActive}
						onChange={onChange}
						contentRef={this.props.contentRef}
						addingLink={this.state.addingLink}
						stopAddingLink={this.stopAddingLink}
						activeAttributes={activeAttributes}
					/>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect((select) => {
		return {
			isDisabled: select('core/edit-post').isFeatureActive(
				'disableEditorsKitLinkFormats'
			),
			oldFormat: select('core/rich-text').getFormatType('core/link'),
		};
	}),
	ifCondition((props) => !props.isDisabled),
	withSpokenMessages
)(Edit);