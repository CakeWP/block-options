/**
 * Internal dependencies
 */
import EditorsKitDocs from './docs';
import FeaturesManager from '../extensions/components/manager/components/manager';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment, Component, RawHTML, render } = wp.element;
const { TabPanel, Panel, PanelBody, PanelRow } = wp.components;

class EditorsKitSettings extends Component {
	render() {
		const EditorsKitSettingsPanel = () => (
			<TabPanel className="editorskit-settings-tab-panel"
				activeClass="active-tab"
				tabs={ [
					{
						name: 'ek-getting-started',
						title: 'Gettings Started',
						className: 'ek-settings-getting-started',
					},
					{
						name: 'ek-docs',
						title: 'Tutorial and Docs',
						className: 'ek-settings-docs',
					},
					{
						name: 'ek-features-manager',
						title: 'Features Manager',
						className: 'ek-settings-features-manager',
					},
				] }>
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
						<h2>{ __( 'Gettings Started with', 'block-options' ) } <strong>EditorsKit</strong><code>{ window.editorskitSettings.version }</code></h2>
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
			</Fragment>
		);
	}
}

wp.domReady( () => {
	render(
		<EditorsKitSettings />,
		document.querySelector( '.editorskit-settings-wrap' )
	);
} );
