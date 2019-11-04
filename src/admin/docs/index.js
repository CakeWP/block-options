/**
 * External dependencies
 */
import marked from 'marked';
import {map} from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component, render } = wp.element;
const { TabPanel, Panel, PanelHeader, PanelBody, PanelRow, Button, Modal } = wp.components;

class EditorsKitDocs extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			isOpen: false,
			isLoaded: false,
			html: '',
		};
	}

	openModal( name ) {
		fetch( window.editorskitSettings.url + 'docs/' + name )
			.then(response => response.text())
			.then(markdown => this.setState({ html: marked(markdown), isLoaded: true, isOpen: true }));
	}


	render() {
		const formatDocs = [
			{
				title: __('Text Color', 'block-options'),
				name: 'text-color-format.md',
			},
		];

		const closeModal = () => (
			this.setState({ html: '', isOpen: false, isLoaded: false })
		);

		return (
			<Fragment>
				{ map(formatDocs, (formats) => {
					return(
						<Button 
							onClick={ () => {
								this.openModal(formats.name);
							}}>
							{formats.title}
						</Button>
					);
				}) }
				{this.state.isOpen && this.state.isLoaded ?
					<Modal
						title={__('Documentation', 'block-options')}
						shouldCloseOnClickOutside={false}
						onRequestClose={() => closeModal()}
						className="editorskit-modal-component components-modal--editorskit-docs"
					>
						<div className="components-modal--editorskit-doc" dangerouslySetInnerHTML={{ __html: this.state.html }} />
					</Modal> : null }
			</Fragment>
		)
	}
}

export default EditorsKitDocs;