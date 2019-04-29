/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { withSelect, withDispatch, dispatch } = wp.data;
const { compose, withState} = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { MenuGroup, MenuItemsChoice, MenuItem, withSpokenMessages } = wp.components;


/**
 * Render plugin
 */
class ManageAutoSave extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	componentDidMount() {
		let editorHeader = document.querySelector('.edit-post-header__settings');
		let prompt = '<span class="editorskit-auto-save-disabled--label">'+ __( 'Auto Save Disabled' ) +'</span>';

		//insert prompt on header
		editorHeader.insertAdjacentHTML( 'afterbegin', prompt );

		this.sync();
	}

	componentDidUpdate() {
		this.sync();
	}

	sync() {
		const { isActive, editorSettings } = this.props;

		let autosaveInterval = 60;
		let prompt = document.querySelector('.editorskit-auto-save-disabled--label');

		//update autosave interval
		if( !isActive ){
			autosaveInterval = 259200; // 3days in seconds
		}

		if( editorSettings.autosaveInterval != autosaveInterval  ){
			let newEditorSettings = Object.assign( this.props.editorSettings, { autosaveInterval: autosaveInterval } );
			dispatch('core/editor').updateEditorSettings( newEditorSettings );
			dispatch('core/editor').refreshPost();
		}

		//show prompt
		prompt.className = 'editorskit-auto-save-disabled--label editorskit-auto-save-disabled--' + autosaveInterval;
		
	}
	
	render(){
		const {
			onToggle,
			editorSettings,
		} = this.props;
		
		let isActive = this.props.isActive;

		if( editorSettings.autosaveInterval != 259200 ){
			isActive = true;
		}
		
		return (
			<Fragment>
				<PluginMoreMenuItem
					icon={ isActive && 'yes' }
					role="menuitemcheckbox"
					info={ __( 'Toggle to disable or enable editor autosaving feature.' ) }
					onClick={ onToggle }
				>
					{ __( 'Auto Save' ) }
				</PluginMoreMenuItem>
				
			</Fragment>
		);
	}
};

export default compose( [
	withSelect( ( select ) => ( {
		isActive: select( 'core/edit-post' ).isFeatureActive( 'editorskitAutoSave' ),
		editorSettings: select('core/editor').getEditorSettings(),
	} ) ),
	withDispatch( ( dispatch, ownProps ) => ( {
		onToggle() {
			dispatch( 'core/edit-post' ).toggleFeature( 'editorskitAutoSave' );
		},
	} ) ),
	withSpokenMessages,
] )( ManageAutoSave );