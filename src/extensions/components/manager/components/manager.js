/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useViewportMatch } from '@wordpress/compose';
import { useCallback, useState } from '@wordpress/element';
import { 
	TabPanel, 
	ToggleControl, 	
	__experimentalNavigation as Navigation,
	__experimentalNavigationMenu as NavigationMenu,
	__experimentalNavigationItem as NavigationItem 
} from '@wordpress/components';
import { map, get } from 'lodash';
import { __ } from '@wordpress/i18n'; 

import EditorSettings from './editor-settings';

const capitalize = ( str ) => {
	return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
};

const PREFERENCES_MENU = 'preferences-menu';

/**
 * Render plugin
 *
 * @param props
 */
function FeaturesManager ( props ) {

	const isLargeViewport = useViewportMatch( 'medium' );
	const [ activeMenu, setActiveMenu ] = useState( PREFERENCES_MENU );
	const [ reloadSettings, shouldReloadSettings ] = useState(false);

	const editorSettings = useSelect( ( select ) => select( 'core/editor' ).getEditorSettings(), [reloadSettings] );

	const { toggleFeature } = useDispatch('core/edit-post');

	const onToggle = (category, item) => {
		toggleFeature( 'disableEditorsKit' + capitalize( item ) + capitalize( category ) );
		shouldReloadSettings(!reloadSettings);
	};

	let getSettings = editorSettings.editorskit;

	if ( typeof getSettings === 'undefined' && typeof window.editorskitSettings !== 'undefined' ) {
		getSettings = window.editorskitSettings.editor_settings.editorskit;
	}

	const additionalTabs = [
		{	
			title: __( 'Editor (New)', 'block-options' ),
			name: 'editor',
			tabLabel: __( 'Editor (New)', 'block-options' ),
			content: EditorSettings
		}
	];

	const tabs = map( getSettings, ( cat, catName ) => {
		return ( {
			title: cat.label,
			name: catName,
			tabLabel: cat.label,
			content: () => {

				const items = get( getSettings[ catName ], 'items', {} );

				return map( items, ( item ) => {
					const featureName = 'disableEditorsKit' + capitalize( item.name ) + capitalize( catName );
					return (
						<ToggleControl
							label={ item.label }
							checked={ ! wp.data.select( 'core/edit-post' ).isFeatureActive( featureName ) }
							onChange={ () => {
								onToggle( catName, item.name );
							} }
						/>
					);
				} );
			}
		} );
	} );

	const finalTabs = [ ...tabs, ...additionalTabs ];
	
	const getCurrentTab = useCallback( ( tab ) => <tab.content /> );


	let modalContent =  (
		<TabPanel tabs={ finalTabs } orientation="vertical" className="edit-post-preferences__tabs">
			{ getCurrentTab }
		</TabPanel>	
	);

	if ( ! isLargeViewport ) {
		modalContent = (
			<Navigation
				activeMenu={ activeMenu }
				onActivateMenu={ setActiveMenu }
	>
				<NavigationMenu menu={ PREFERENCES_MENU }>
					{ finalTabs.map( ( tab ) => {
				return (
					<NavigationItem
						key={ tab.name }
						title={ tab.title }
						navigateToMenu={ tab.name }
					/>
				);
			} ) }
				</NavigationMenu>
				{ finalTabs.map( ( tab ) => {

					const TabContent = tab.content;

					return (
						<NavigationMenu
							key={ `${ tab.name }-menu` }
							menu={ tab.name }
							title={ tab.tabLabel }
							parentMenu={ PREFERENCES_MENU }
						>
							<NavigationItem>
								<TabContent />
							</NavigationItem>
						</NavigationMenu>
					);
				} ) }
			</Navigation>
		);
	}

	return modalContent;
}

export default FeaturesManager;