/**
 * Internal dependencies
 */
import icon from './icon';

/**
 * External dependencies
 */
import marked from 'marked';
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const { Button, Modal } = wp.components;

class EditorsKitDocs extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			isOpen: false,
			isLoaded: false,
			html: '',
		};
	}

	openModal( name ) {
		fetch( window.editorskitSettings.url + 'docs/' + name )
			.then( ( response ) => response.text() )
			.then( ( markdown ) => this.setState( { html: marked( markdown ), isLoaded: true, isOpen: true } ) );
	}

	render() {
		const formatDocs = [
			{
				title: __( 'Adding Selected Text Color', 'block-options' ),
				name: 'text-color-format.md',
			},
			{
				title: __( 'Adding Highlighted Text Background Color', 'block-options' ),
				name: 'background-color-format.md',
			},
			{
				title: __( 'Adding Link "rel" NoFollow or Sponsored Attributes', 'block-options' ),
				name: 'link-attributes-format.md',
			},
			{
				title: __( 'Subscript and Superscript Text Formatting', 'block-options' ),
				name: 'subscript-superscript-format.md',
			},
			{
				title: __( 'Justified Paragraph Alignment', 'block-options' ),
				name: 'justified-alignment-format.md',
			},
			{
				title: __( 'Transform Text to Uppercase', 'block-options' ),
				name: 'uppercase-text-format.md',
			},
			{
				title: __( 'Add Nonbreaking Space', 'block-options' ),
				name: 'nonbreaking-space-format.md',
			},
			{
				title: __( 'Clear Formatting', 'block-options' ),
				name: 'clear-formatting-format.md',
			},
		];

		const writingDocs = [
			{
				title: __( 'Markdown Writing Shortcuts', 'block-options' ),
				name: 'markdown-writing.md',
			},
			{
				title: __( 'View or Add Estimated Reading Time', 'block-options' ),
				name: 'estimated-reading-time-writing.md',
			},
			{
				title: __( 'Transform 3 Empty Paragraphs to Spacer Block', 'block-options' ),
				name: 'transform-empty-spacer-writing.md',
			},
		];

		const optionsDocs = [
			{
				title: __( 'Set Image Block as Featured Image', 'block-options' ),
				name: 'set-image-as-featured-options.md',
			},
			{
				title: __( 'Export and Import Blocks', 'block-options' ),
				name: 'export-import-block-options.md',
			},
			{
				title: __( 'Copy Selected Block(s)', 'block-options' ),
				name: 'copy-selected-blocks-options.md',
			},
			{
				title: __( 'Media & Text Block Card Layout', 'block-options' ),
				name: 'media-text-block-layout-options.md',
			},
			{
				title: __( 'Media & Text Block Links', 'block-options' ),
				name: 'media-text-block-link-options.md',
			},
			{
				title: __( 'Changing List Block Font Size & Text Color', 'block-options' ),
				name: 'list-block-options.md',
			},
		];

		const toolsDocs = [
			{
				title: __( 'Easily Hide Title', 'block-options' ),
				name: 'hide-title-tools.md',
			},
			{
				title: __( 'Drag and Drop Featured Image', 'block-options' ),
				name: 'drag-drop-featured-image-tools.md',
			},
			{
				title: __( 'Code Editor Syntax Highlighter', 'block-options' ),
				name: 'syntax-highlighter-tools.md',
			},
			{
				title: __( 'Enable Block Guide Lines', 'block-options' ),
				name: 'block-guidelines-tools.md',
			},
			{
				title: __( 'Additional CSS Class(es) Auto Suggestions', 'block-options' ),
				name: 'custom-classnames-tools.md',
			},
			{
				title: __( 'Accessible Help, Tips & Tricks', 'block-options' ),
				name: 'tips-tricks-tools.md',
			},
			{
				title: __( 'Enable Developer Tools', 'block-options' ),
				name: 'developer-tools.md',
			},
			{
				title: __('Using Live Preview & Responsive Toggles', 'block-options'),
				name: 'live-preview-tool.md'
			}
		];

		const visibilityDocs = [
			{
				title: __( 'Block Visibility on Desktop, Mobile or Tablet', 'block-options' ),
				name: 'devices-visibility.md',
			},
			{
				title: __( 'Hide Block on Logged-in/out Users', 'block-options' ),
				name: 'user-state-visibility.md',
			},
			{
				title: __( 'Using Custom Display Logic', 'block-options' ),
				name: 'display-logic-visibility.md',
			},
		];

		const stylingDocs = [
			{
				title: __( 'Display Cover and Image Blocks in Fullscreen', 'block-options' ),
				name: 'fullscreen-styling.md',
			},
			{
				title: __( 'More Image & Cover Block Styles', 'block-options' ),
				name: 'image-cover-styles-styling.md',
			},
			{
				title: __( 'Additional List Block Styles', 'block-options' ),
				name: 'list-block-styles-styling.md',
			},
		];

		const closeModal = () => (
			this.setState( { html: '', isOpen: false, isLoaded: false } )
		);

		return (
			<Fragment>
				<p>{ __( 'Learn more about each EditorsKit features with the tutorials below. Click on the link to open a modal pop-up with detailed explanation and animated GIF previewing how the features work.', 'block-options' ) }</p>
				<div className="editorskit-docs-items-wrapper">
					<div className="editorskit-docs-items-formatting">
						<h3 className="editorskit-docs-items-title">{ __( 'Rich Text Formatting', 'block-options' ) }</h3>
						<ul className="editorskit-docs-items-list">
							{ map( formatDocs, ( formats ) => {
								return (
									<li>
										<Button
											onClick={ () => {
												this.openModal( formats.name );
											} }>
											{ formats.title }
										</Button>
									</li>
								);
							} ) }
						</ul>
					</div>
					<div className="editorskit-docs-items-writing">
						<h3 className="editorskit-docs-items-title">{ __( 'Writing', 'block-options' ) }</h3>
						<ul className="editorskit-docs-items-list">
							{ map( writingDocs, ( formats ) => {
								return (
									<li>
										<Button
											onClick={ () => {
												this.openModal( formats.name );
											} }>
											{ formats.title }
										</Button>
									</li>
								);
							} ) }
						</ul>
					</div>
					<div className="editorskit-docs-items-blockoptions">
						<h3 className="editorskit-docs-items-title">{ __( 'Block Options', 'block-options' ) }</h3>
						<ul className="editorskit-docs-items-list">
							{ map( optionsDocs, ( formats ) => {
								return (
									<li>
										<Button
											onClick={ () => {
												this.openModal( formats.name );
											} }>
											{ formats.title }
										</Button>
									</li>
								);
							} ) }
						</ul>
					</div>
					<div className="editorskit-docs-items-tools">
						<h3 className="editorskit-docs-items-title">{ __( 'Tools', 'block-options' ) }</h3>
						<ul className="editorskit-docs-items-list">
							{ map( toolsDocs, ( formats ) => {
								return (
									<li>
										<Button
											onClick={ () => {
												this.openModal( formats.name );
											} }>
											{ formats.title }
										</Button>
									</li>
								);
							} ) }
						</ul>
					</div>
					<div className="editorskit-docs-items-visibility">
						<h3 className="editorskit-docs-items-title">{ __( 'Block Visibility', 'block-options' ) }</h3>
						<ul className="editorskit-docs-items-list">
							{ map( visibilityDocs, ( formats ) => {
								return (
									<li>
										<Button
											onClick={ () => {
												this.openModal( formats.name );
											} }>
											{ formats.title }
										</Button>
									</li>
								);
							} ) }
						</ul>
					</div>
					<div className="editorskit-docs-items-styling">
						<h3 className="editorskit-docs-items-title">{ __( 'Block Styling', 'block-options' ) }</h3>
						<ul className="editorskit-docs-items-list">
							{ map( stylingDocs, ( formats ) => {
								return (
									<li>
										<Button
											onClick={ () => {
												this.openModal( formats.name );
											} }>
											{ formats.title }
										</Button>
									</li>
								);
							} ) }
						</ul>
					</div>
				</div>
				{ this.state.isOpen && this.state.isLoaded ?
					<Modal
						title={ __( 'Documentation', 'block-options' ) }
						icon={ icon.book }
						onRequestClose={ () => closeModal() }
						className="editorskit-modal-component components-modal--editorskit-docs"
					>
						<div className="components-modal--editorskit-doc" dangerouslySetInnerHTML={ { __html: this.state.html } } />
					</Modal> : null }
			</Fragment>
		);
	}
}

export default EditorsKitDocs;
