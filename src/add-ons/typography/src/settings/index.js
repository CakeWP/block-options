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
const { Fragment, useCallback, useEffect } = wp.element;
const { useDispatch } = wp.data;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

function editorskitTypographySettings( FilteredComponent ) {
	return ( props ) => {
		const [ editorskitTypographyEnabled, setEditorskitTypographyEnabled ] = useEntityProp( 'root', 'site', 'editorskit_typography_enabled' );

		const { saveEditedEntityRecord } = useDispatch( 'core' );

		const { toggleFeature } = useDispatch( 'core/edit-post' );

		const onToggle = useCallback( () => {	
			saveEditedEntityRecord( 'root', 'site' );
		}, [] );

		useEffect(() => {

			const currentFeatureStatus = wp.data.select('core/edit-post').isFeatureActive('disableEditorsKitTypography');

			// TODO: fix this hacky approach which is used to sync unsynchronized data.
			if (currentFeatureStatus === !editorskitTypographyEnabled) {
				toggleFeature('disableEditorsKitTypography');
				toggleFeature('disableEditorsKitTypography');
			} else {
				toggleFeature('disableEditorsKitTypography');
			}

		}, [editorskitTypographyEnabled])

		return(
			<Fragment>
				<FilteredComponent { ...props } />
				<div className="editorskit-typography-admin-settings">
					<ToggleControl
						label={ __( 'Typography Add-on Enabled', 'editorskit-typography-addon' ) }
						checked={ editorskitTypographyEnabled }
						onChange={ ( newValue ) => {
							setEditorskitTypographyEnabled(newValue);
							onToggle( newValue );
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
