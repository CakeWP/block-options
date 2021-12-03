/**
 * WordPress dependencies
 */
import { withSelect, withDispatch, select } from '@wordpress/data';
import { compose, useViewportMatch } from '@wordpress/compose';
import { useCallback, useState } from '@wordpress/element';
import { 
	withSpokenMessages, 
	TabPanel, 
	ToggleControl, 	
	__experimentalNavigation as Navigation,
	__experimentalNavigationMenu as NavigationMenu,
	__experimentalNavigationItem as NavigationItem 
} from '@wordpress/components';
import { map, get } from 'lodash';

const capitalize = ( str ) => {
	return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
};

const PREFERENCES_MENU = 'preferences-menu';

/**
 * Render plugin
 *
 * @param props
 */
function FeaturesManager( props ) {

	const isLargeViewport = useViewportMatch( 'medium' );
	const [ activeMenu, setActiveMenu ] = useState( PREFERENCES_MENU );

	const {
		editorSettings,
		onToggle,
	} = props;

	let getSettings = editorSettings.editorskit;

	if ( typeof getSettings === 'undefined' && typeof window.editorskitSettings !== 'undefined' ) {
		getSettings = window.editorskitSettings.editor_settings.editorskit;
	}

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
							className="edit-post-preferences-modal__option"
							label={ item.label }
							checked={ ! wp.data.select( 'core/edit-post' ).isFeatureActive( featureName ) }
							onChange={ () => {
								onToggle( catName, item.name );
							} }
						/>
					);
				} );
			}
		} )
	} );


	const getCurrentTab = useCallback( ( tab ) => <tab.content /> );


	let modalContent =  (
		<TabPanel tabs={ tabs } orientation="vertical" className="edit-post-preferences__tabs">
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
					{ tabs.map( ( tab ) => {
				return (
					<NavigationItem
						key={ tab.name }
						title={ tab.title }
						navigateToMenu={ tab.name }
					/>
				);
			} ) }
				</NavigationMenu>
				{ tabs.map( ( tab ) => {
			return (
				<NavigationMenu
					key={ `${ tab.name }-menu` }
					menu={ tab.name }
					title={ tab.tabLabel }
					parentMenu={ PREFERENCES_MENU }
				>
					<NavigationItem><tab.content /></NavigationItem>
				</NavigationMenu>
			);
		} ) }
			</Navigation>
		)
	}

	return modalContent;
}

export default compose( [
	withSelect( () => ( {
		editorSettings: select( 'core/editor' ).getEditorSettings(),
		preferences: select( 'core/edit-post' ).getPreferences(),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		onToggle( category, item ) {
			dispatch( 'core/edit-post' ).toggleFeature( 'disableEditorsKit' + capitalize( item ) + capitalize( category ) );
		},
	} ) ),
	withSpokenMessages,
] )( FeaturesManager );
