/**
 * Internal dependencies
 */
import EditorsKitDocs from './docs';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component, render } = wp.element;
const { TabPanel, Panel, PanelHeader, PanelBody, PanelRow } = wp.components;

class EditorsKitSettings extends Component {
	constructor() {
		super(...arguments)
	}

	render() {
		const onSelect = (tabName) => {
			console.log('Selecting tab', tabName);
		};

		const MyTabPanel = () => (
			<TabPanel className="editorskit-settings-tab-panel"
				activeClass="active-tab"
				onSelect={onSelect}
				tabs={[
					{
						name: 'tab1',
						title: 'Gettings Started',
						className: 'tab-one',
					},
					{
						name: 'tab2',
						title: 'Tutorial and Docs',
						className: 'tab-two',
					},
					{
						name: 'tab3',
						title: 'Features Manager',
						className: 'tab-three',
					},
				]}>
				{
					(tab) => {
						switch (tab.name ) {
							case 'tab2':
								return(
									<EditorsKitDocs />
								);
								break;
						
							default:
								return(
									<p>Laboriosam asperiores voluptates qui veritatis similique et culpa. Consequatur mollitia aliquam consequatur accusantium aperiam. Perspiciatis minima earum alias rerum quis itaque. Itaque fuga commodi omnis distinctio. Laboriosam corporis itaque possimus laboriosam labore. Ad vitae iste ullam et blanditiis. A et libero voluptatem et blanditiis. Asperiores illo quos molestiae eum porro ut.</p>
								);
								break;
						}
					}
				}
			</TabPanel>
		);

		const MyPanel = () => (
			<Panel>
				<PanelBody
					opened={true}
				>
					<div class="components-panel__header">
						<p class="editorskit-panel__header-hint">{__('Settings → EditorsKit', 'block-options') }</p>
						<h2>Gettings Started with <strong>EditorsKit</strong></h2>
						<p>Laboriosam asperiores voluptates qui veritatis similique et culpa. Consequatur mollitia aliquam consequatur accusantium aperiam. Perspiciatis minima earum alias rerum quis itaque. Itaque fuga commodi omnis distinctio. Laboriosam corporis itaque possimus laboriosam labore. Ad vitae iste ullam et blanditiis. A et libero voluptatem et blanditiis. Asperiores illo quos molestiae eum porro ut.</p>
					</div>
					<PanelRow>
						<MyTabPanel />
           			</PanelRow>
				</PanelBody>
			</Panel>
		);

		return (
			<Fragment>
				<MyPanel/>
			</Fragment>
		)
	}
}

wp.domReady(() => {
	render(
		<EditorsKitSettings />,
		document.querySelector('.editorskit-settings-wrap')
	)
})