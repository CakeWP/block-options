/**
 * Internal dependencies
 */
import icon from './icon';

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
		fetch(window.editorskitSettings.url + 'docs/' + name, { cache: 'no-cache' } )
			.then(response => response.text())
			.then(markdown => this.setState({ html: marked(markdown), isLoaded: true, isOpen: true }));
	}


	render() {
		const formatDocs = [
			{
				title: __('Adding Selected Text Color', 'block-options'),
				name: 'text-color-format.md',
			},
			{
				title: __('Adding Highlighted Text Background Color', 'block-options'),
				name: 'background-color-format.md',
			},
		];

		const closeModal = () => (
			this.setState({ html: '', isOpen: false, isLoaded: false })
		);

		return (
			<Fragment>
				<p>Laboriosam asperiores voluptates qui veritatis similique et culpa. Consequatur mollitia aliquam consequatur accusantium aperiam. Perspiciatis minima earum alias rerum quis itaque.</p>
				<h3 className="editorskit-docs-items-title">{__('Rich Text Formatting', 'block-options')}</h3>
				<ul className="editorskit-docs-items-list">
					{ map(formatDocs, (formats) => {
						return(
							<li>
								<Button 
									onClick={ () => {
										this.openModal(formats.name);
									}}>
									{formats.title}
								</Button>
							</li>
						);
					}) }
				</ul>
				{this.state.isOpen && this.state.isLoaded ?
					<Modal
						title={__('Documentation', 'block-options')}
						icon={ icon.book }
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