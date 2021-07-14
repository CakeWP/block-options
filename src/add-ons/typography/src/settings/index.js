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
const { useEntityProp } = wp.coreData;
const { Fragment, useCallback } = wp.element;
const { useDispatch } = wp.data;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

function editorskitTypographySettings( FilteredComponent ) {
	return ( props ) => {
		const [ editorskitTypographyEnabled, setEditorskitTypographyEnabled ] = useEntityProp( 'root', 'site', 'editorskit_typography_enabled' );

		const { saveEditedEntityRecord } = useDispatch( 'core' );

		const { toggleFeature } = useDispatch( 'core/edit-post' );

		const onToggle = useCallback( () => {
			toggleFeature( 'disableEditorsKitTypography' );
			saveEditedEntityRecord( 'root', 'site' );
		}, [] );

		return(
			<Fragment>
				<FilteredComponent { ...props } />
				<div className="editorskit-typography-admin-settings">
					<ToggleControl
						label={ __( 'Typography Add-on Enabled', 'editorskit-typography-addon' ) }
						checked={ editorskitTypographyEnabled }
						onChange={ ( newValue ) => {
							setEditorskitTypographyEnabled(newValue);
							onToggle();
						} }
					/><br />
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
	};
}

addFilter(
	'editorskit.addOn.extraPanel',
	'editorskit/typography-settings',
	editorskitTypographySettings
);
