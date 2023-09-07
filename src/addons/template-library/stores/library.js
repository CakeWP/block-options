/**
 *
 * zustand Dependencies
 *
 */
import create from 'zustand';

const useLibrary = create( ( set ) => ( {
	/** Is Adding a new Connection? */
	isAddingNewConnection: false,

	setIsAddingNewConnection: ( isAdding ) =>
		set( { isAddingNewConnection: isAdding } ),

	/** Active Connection id. */
	activeConnection: '',

	/** Updates the active Connection id. */
	setActiveConnection: ( connectionId ) =>
		set( { activeConnection: connectionId } ),

	/** Current Search Query */
	search: '',

	/** Updates the Search Query */
	setSearch: ( newSearch ) => set( { search: newSearch } ),

	/** Active Category */
	activeCategory: 'all',

	/** Updates the active category */
	setActiveCategory: ( newActiveCategory ) =>
		set( { activeCategory: newActiveCategory } ),

	/** is the library visible? */
	isVisible: false,

	/** updates the library visiblity */
	setVisible: ( newLibraryVisibility ) =>
		set( { isVisible: newLibraryVisibility } ),
} ) );

export default useLibrary;
