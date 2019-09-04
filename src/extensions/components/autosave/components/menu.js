/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch, dispatch, select } = wp.data;
const { compose } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { withSpokenMessages } = wp.components;

/**
 * Render plugin
 */
class ManageAutoSave extends Component {
	componentDidMount() {
		const editorHeader = document.querySelector( '.edit-post-header__settings' );
		const prompt = '<span class="editorskit-auto-save-disabled--label">' + __( 'Auto Save Disabled', 'block-options' ) + '</span>';

		//insert prompt on header
		editorHeader.insertAdjacentHTML( 'afterbegin', prompt );

		this.sync();
	}

	componentDidUpdate() {
		this.sync();
	}

	sync() {
		const { isAvailable, isActive, isDisabled, editorSettings } = this.props;

		let autosaveInterval = 60;
		const prompt = document.querySelector( '.editorskit-auto-save-disabled--label' );

		//update autosave interval
		if ( ! isActive && ! isDisabled && typeof isAvailable !== 'undefined' ) {
			autosaveInterval = 259200; // 3days in seconds
		}

		if ( editorSettings.autosaveInterval !== autosaveInterval ) {
			const newEditorSettings = Object.assign( this.props.editorSettings, { autosaveInterval } );
			dispatch( 'core/editor' ).updateEditorSettings( newEditorSettings );
			dispatch( 'core/editor' ).refreshPost();
		}

		//show prompt
		prompt.className = 'editorskit-auto-save-disabled--label editorskit-auto-save-disabled--' + autosaveInterval;
	}

	render() {
		const {
			isDisabled,
			onToggle,
			editorSettings,
		} = this.props;

		if ( isDisabled ) {
			return null;
		}

		let isActive = this.props.isActive;

		if ( editorSettings.autosaveInterval !== 259200 ) {
			isActive = true;
		}

		return (
			<Fragment>
				<PluginMoreMenuItem
					icon={ isActive && 'yes' }
					role="menuitemcheckbox"
					info={ __( 'Toggle to disable or enable editor autosaving feature.', 'block-options' ) }
					onClick={ onToggle }
				>
					{ __( 'Auto Save', 'block-options', 'block-options' ) }
				</PluginMoreMenuItem>

			</Fragment>
		);
	}
}

export default compose( [
	withSelect( () => ( {
		isAvailable: select( 'core/edit-post' ).getPreference( 'features' ).editorskitAutoSave,
		isActive: select( 'core/edit-post' ).isFeatureActive( 'editorskitAutoSave' ),
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitAutosaveTools' ),
		editorSettings: select( 'core/editor' ).getEditorSettings(),
	} ) ),
	withDispatch( () => ( {
		onToggle() {
			dispatch( 'core/edit-post' ).toggleFeature( 'editorskitAutoSave' );
		},
	} ) ),
	withSpokenMessages,
] )( ManageAutoSave );
