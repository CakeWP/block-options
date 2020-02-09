/**
 * Internal dependencies
 */
import EditorsKitDocs from './docs';
import FeaturesManager from '../extensions/components/manager/components/manager';
import BlockManager from './block-manager/';
import AddonSettings from './addon-settings';
import Notices from './notices';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { registerCoreBlocks } = wp.blockLibrary;
const { hasFilter } = wp.hooks;
const { Fragment, Component, RawHTML, render } = wp.element;
const { TabPanel, Panel, PanelBody, PanelRow, Button } = wp.components;

class EditorsKitSettings extends Component {
	render() {
		const tabs = [
			{
				name: 'ek-getting-started',
				title: __( 'Getting Started', 'block-options' ),
				className: 'ek-settings-getting-started',
			},
			{
				name: 'ek-docs',
				title: __( 'Tutorial and Docs', 'block-options' ),
				className: 'ek-settings-docs',
			},
			{
				name: 'ek-features-manager',
				title: __( 'Features Manager', 'block-options' ),
				className: 'ek-settings-features-manager',
			},
			{
				name: 'ek-blocks-manager',
				title: __( 'Blocks Manager', 'block-options' ),
				className: 'ek-settings-blocks-manager',
			},
		];

		tabs.push( {
			name: 'ek-addons',
			title: __( 'Extensions', 'block-options' ),
			className: 'ek-settings-addons',
		} );

		const EditorsKitSettingsPanel = () => (
			<TabPanel className="editorskit-settings-tab-panel"
				activeClass="active-tab"
				tabs={ tabs }>
				{
					( tab ) => {
						switch ( tab.name ) {
							case 'ek-getting-started':
								return (
									<Fragment>
										<div className="editorskit-started-items-wrapper">
											<div className="editorskit-started-item">
												<p>{ __( 'EditorsKit provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'block-options' ) }</p>
											</div>
											<div className="editorskit-started-item">
												<iframe title={ __( 'EditorsKit video preview', 'block-options' ) } width="560" height="380" src="https://www.youtube.com/embed/QWgO4lAJAlE" frameBorder="0" allowFullScreen></iframe>
											</div>
											<div className="editorskit-started-item">
												<RawHTML>
													{ sprintf(
														__( 'If you have any questions or suggestion, let us know through %1$sTwitter%4$s or our %2$sFacebook community %4$s. Also, %3$ssubscribe to our newsletter%4$s if you want to stay up to date with what\'s new and upcoming at EditorsKit.', 'block-options' ),
														'<a href="https://twitter.com/editorskit" target="_blank">',
														'<a href="https://www.facebook.com/groups/1306393256173179/" target="_blank">',
														'<a href="https://editorskit.com/" target="_blank">',
														'</a>'
													) }
												</RawHTML>
											</div>
										</div>
									</Fragment>
								);

							case 'ek-docs':
								return (
									<EditorsKitDocs />
								);

							case 'ek-features-manager':
								return (
									<Fragment>
										<p>{ __( 'All features are active by default but you have complete control over each one of them. Disable any features do not want to use and re-enable them anytime on this page or under the "EditorsKit Settings" on Gutenberg editor. Just uncheck the box and it will automatically be saved.', 'block-options' ) }</p>
										<div className="editorskit-features-manager-items-wrapper">
											<FeaturesManager />
										</div>
									</Fragment>
								);

							case 'ek-blocks-manager':
								return (
									<Fragment>
										<p>{ __( 'Manage each individual blocks! You can enable or disable any blocks you want and it will be reflected on Gutenberg block manager settings. Just uncheck the box and it will automatically be saved.', 'block-options' ) }</p>
										<BlockManager />
									</Fragment>

								);
							case 'ek-addons':
								if ( ! hasFilter( 'editorskit.addOn.extraPanel' ) ) {
									return (
										<Fragment>
											<div className="ek-addons-list">
												<div className="ek-extension">
													<h3 className="edd-extension-title">{ __( 'Typography and Google Fonts', 'block-options' ) }</h3>
													<p>{ __( 'Easily define typography on your WordPress posts and pages directly on the Gutenberg editor. With sets of predefined Google Fonts combination you can choose from or create your own to best match your website\'s branding.', 'block-options' ) }</p>
													<Button
														isDefault
														isSecondary
														href="https://editorskit.com/wordpress-gutenberg-editor-typography-and-google-fonts-add-on/"
														target="_blank"
													>
														{ __( 'Get this Extension', 'block-options' ) }
													</Button>
												</div>
											</div>
										</Fragment>
									);
								}
								return (
									<AddonSettings />
								);
						}
					}
				}
			</TabPanel>
		);

		const MainPanel = () => (
			<Panel>
				<PanelBody
					opened={ true }
				>
					<div className="components-panel__header">
						<p className="editorskit-panel__header-hint">{ __( 'Settings → EditorsKit', 'block-options' ) }</p>
						<h2>{ __( 'Getting Started with', 'block-options' ) } <strong>EditorsKit</strong><code>{ window.editorskitSettings.version }</code></h2>
						<p>{ __( 'Congratulations! You\'ve just unlocked more Gutenberg block editor tools for easier editing and better workflow. Check more information about the plugin below and please make sure to navigate through "Tutorials and Docs" tab to learn more on how to use each available features.', 'block-options' ) }</p>
					</div>
					<PanelRow>
						<EditorsKitSettingsPanel />
					</PanelRow>
				</PanelBody>
			</Panel>
		);

		return (
			<Fragment>
				<MainPanel />
				<Notices />
			</Fragment>
		);
	}
}

wp.domReady( () => {
	registerCoreBlocks();
	render(
		<EditorsKitSettings />,
		document.querySelector( '.editorskit-settings-wrap' )
	);
} );
