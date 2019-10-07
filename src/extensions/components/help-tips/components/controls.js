/**
 * External dependencies
 */
import map from 'lodash/map';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch, select } = wp.data;
const { compose } = wp.compose;
const { Fragment, Component, createRef } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { withSpokenMessages, Modal, CheckboxControl, DropdownMenu, MenuGroup, MenuItem } = wp.components;

const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Render plugin
 */
class HelpControl extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			isOpen: false,
		};
	}

	componentDidMount(){
		const helpButton = document.querySelector('.editorskit-component-help-tips');
		if (helpButton){
			helpButton.parentElement.style.display = 'block';
		}
	}

	render() {
		const {
			editorSettings,
			onToggle,
		} = this.props;

		const closeModal = () => (
			this.setState({ isOpen: false })
		);

		return (
			<Fragment>
				<DropdownMenu
					icon="editor-help"
					className="editorskit-component-help-tips"
					label={ __('Help, tips and tricks') }
				>
					{({ onClose }) => (
						<Fragment>
							<MenuGroup>
								<MenuItem
									icon="sos"
									onClick={onClose}
								>
									{__('Tips and Tricks')}
								</MenuItem>
								<MenuItem
									icon="admin-site-alt3"
									onClick={onClose}
								>
									{__('Ask Community Help')}
								</MenuItem>
							</MenuGroup>
							<MenuGroup>
								<MenuItem
									icon="dismiss"
									onClick={onClose}
								>
									{__('Remove/Disable Help Button')}
								</MenuItem>
							</MenuGroup>
						</Fragment>
					)}
				</DropdownMenu>
			</Fragment>
		);
	}
}

export default compose([
	withSelect(() => ({
		editorSettings: select('core/editor').getEditorSettings(),
		preferences: select('core/edit-post').getPreferences(),
	})),
	withDispatch((dispatch) => ({
		onToggle(category, item) {
			dispatch('core/edit-post').toggleFeature('disableEditorsKit' + capitalize(item) + capitalize(category));
		},
	})),
	withSpokenMessages,
])(HelpControl);
