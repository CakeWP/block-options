/**
 * Internal dependencies
 */
import EditorsKitDocs from './docs';
import FeaturesManager from '../extensions/components/manager/components/manager';
import BlockManager from './block-manager/';
import Notices from './notices';

/**
 * WordPress dependencies
 */
import { starFilled } from '@wordpress/icons';
const { __, sprintf } = wp.i18n;
const { registerCoreBlocks } = wp.blockLibrary;
const { Fragment, Component, RawHTML, render } = wp.element;
const { TabPanel, Panel, PanelBody, PanelRow, Button, Icon } = wp.components;

class EditorsKitSettings extends Component {
	render() {
		const tabs = [
			{
				name: 'ek-getting-started',
				title: __('Getting Started', 'block-options'),
				className: 'ek-settings-getting-started',
			},
			{
				name: 'ek-docs',
				title: __('Tutorial and Docs', 'block-options'),
				className: 'ek-settings-docs',
			},
			{
				name: 'ek-features-manager',
				title: __('Features Manager', 'block-options'),
				className: 'ek-settings-features-manager',
			},
			{
				name: 'ek-blocks-manager',
				title: __('Blocks Manager', 'block-options'),
				className: 'ek-settings-blocks-manager',
			},
		];

		const EditorsKitSettingsPanel = () => (
			<TabPanel className="editorskit-settings-tab-panel"
				activeClass="active-tab"
				tabs={tabs}>
				{
					(tab) => {
						switch (tab.name) {
							case 'ek-getting-started':
								return (
									<Fragment>
										<div className="editorskit-started-items-wrapper">
											<div className="editorskit-started-item">
												<p>{__('EditorsKit provides set of tools to extend the way you are building content on WordPress Gutenberg block editor. Designed and integrated to help users easily navigate; and control each block the way it should be.', 'block-options')}</p>
											</div>
											<div className="editorskit-started-item">
												<iframe title={__('EditorsKit video preview', 'block-options')} width="560" height="380" src="https://www.youtube.com/embed/QWgO4lAJAlE" frameBorder="0" allowFullScreen></iframe>
											</div>
											<div className="editorskit-started-item">
												<RawHTML>
													{sprintf(
														__('If you have any questions or suggestion, let us know through %1$sTwitter%4$s or our %2$sFacebook community %4$s. Also, %3$ssubscribe to our newsletter%4$s if you want to stay up to date with what\'s new and upcoming at EditorsKit.', 'block-options'),
														'<a href="https://twitter.com/editorskit" target="_blank">',
														'<a href="https://www.facebook.com/groups/1306393256173179/" target="_blank">',
														'<a href="https://editorskit.com/" target="_blank">',
														'</a>'
													)}
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
										<p>{__('All features are active by default but you have complete control over each one of them. Disable any features do not want to use and re-enable them anytime on this page or under the "EditorsKit Settings" on Gutenberg editor. Just uncheck the box and it will automatically be saved.', 'block-options')}</p>
										<div className="editorskit-features-manager-items-wrapper">
											<FeaturesManager />
										</div>
									</Fragment>
								);

							case 'ek-blocks-manager':
								return (
									<Fragment>
										<p>{__('Manage each individual blocks! You can enable or disable any blocks you want and it will be reflected on Gutenberg block manager settings. Just uncheck the box and it will automatically be saved.', 'block-options')}</p>
										<BlockManager />
									</Fragment>

								);

						}
					}}
			</TabPanel>
		);
		const MainPanel = () => (
			<Panel>
				<PanelBody
					opened={true}
				>
					<div className="components-panel__header">
						<p className="editorskit-panel__header-hint">{__('Settings → EditorsKit', 'block-options')}</p>
						<h2>{__('Getting Started with', 'block-options')} <strong>EditorsKit</strong><code>{window.editorskitSettings?.version}</code></h2>
						<p>{__('Congratulations! You\'ve just unlocked more Gutenberg block editor tools for easier editing and better workflow. Check more information about the plugin below and please make sure to navigate through "Tutorials and Docs" tab to learn more on how to use each available features.', 'block-options')}</p>
						
						<div style={{ display: 'flex', gap: 5 }}>
							<Button 
								target="__blank" 
								variant="primary" 
								href="https://www.buymeacoffee.com/munirkamal" 
								style={{ backgroundColor: '#FEDD03', color: '#000000', fontWeight: 600, display: 'flex', gap: 5 }}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 256 256"><path fill="currentColor" d="M212 76H32a12 12 0 0 0-12 12v48a100.4 100.4 0 0 0 26.7 68H32a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24h-14.7a101.5 101.5 0 0 0 20-32a44.1 44.1 0 0 0 42.7-44v-8a44 44 0 0 0-44-44ZM86 204a76.2 76.2 0 0 1-42-68v-36h152v36a75.9 75.9 0 0 1-2.8 20.3c-.1.2-.1.5-.2.7a76.3 76.3 0 0 1-39 47Zm146-76a20.1 20.1 0 0 1-12.6 18.6a94.2 94.2 0 0 0 .6-10.6v-34.3a19.9 19.9 0 0 1 12 18.3ZM68 48V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0Zm40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0Zm40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0Z"/></svg>
								{ __('Buy me a Coffee', 'block-options') }
							</Button>
							<Button 
								variant="secondary" 
								href="https://wordpress.org/support/plugin/block-options/reviews/#new-post" 
								target="__blank"
							>
								<Icon icon={starFilled} />
								{ __('Leave a Review', 'block-options') }
							</Button>
						</div>
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

wp.domReady(() => {
	registerCoreBlocks();
	render(
		<EditorsKitSettings />,
		document.querySelector('.editorskit-settings-wrap')
	);
});
