/**
 * Internal dependencies
 */
import icon from '../plugins/sidebar-menu-item/icon';
import TypographySelection from '../components/font-selection';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { PanelBody, PanelRow } = wp.components;

function editorskitTypographySettings( FilteredComponent ) {
	return ( props ) => (
		<Fragment>
			<FilteredComponent { ...props } />
			<div className="editorskit-typography-admin-settings">
				<PanelBody
					title={ __( 'Typography Settings', 'editorskit-typography-addon' ) }
					icon={ icon.typography }
					initialOpen={ false }
				>
					<PanelRow>
						<div className="editorskit-typography-admin-settings--items">
							<TypographySelection settingsPanel={ true } />
						</div>
					</PanelRow>
				</PanelBody>
			</div>
		</Fragment>
	);
}

addFilter(
	'editorskit.addOn.extraPanel',
	'editorskit/typography-settings',
	editorskitTypographySettings
);
