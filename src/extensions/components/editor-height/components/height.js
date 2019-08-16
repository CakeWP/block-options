/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { compose, withState } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { MenuGroup, MenuItemsChoice, MenuItem, withSpokenMessages } = wp.components;

/**
 * Render plugin
 */
class EditorMinHeight extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	componentDidMount() {
		this.sync();
	}

	componentDidUpdate() {
		this.sync();
	}

	sync() {
		const { isActive, isDisabled } = this.props;
		if ( isActive && ! isDisabled ) {
			document.body.classList.add( 'is-editorkit-height-on' );
		} else {
			document.body.classList.remove( 'is-editorkit-height-on' );
		}
	}

	render() {
		const {
			isActive,
			onToggle,
			isDisabled,
		} = this.props;

		if ( isDisabled ) {
			return null;
		}

		return (
			<Fragment>
				<PluginMoreMenuItem
					icon={ isActive && 'yes' }
					role="menuitemcheckbox"
					info={ __( 'Toggle to change editor min-height similar to browser viewport.' ) }
					onClick={ onToggle }
				>
					{ __( 'Editor Height' ) }
				</PluginMoreMenuItem>

			</Fragment>
		);
	}
}

export default compose( [
	withSelect( ( select ) => ( {
		isActive: select( 'core/edit-post' ).isFeatureActive( 'editorMinHeight' ),
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitHeightTools' ),
	} ) ),
	withDispatch( ( dispatch, ownProps ) => ( {
		onToggle() {
			dispatch( 'core/edit-post' ).toggleFeature( 'editorMinHeight' );
		},
	} ) ),
	withSpokenMessages,
] )( EditorMinHeight );
