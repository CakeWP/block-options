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
class BlockGuideLines extends Component {
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
			document.body.classList.add( 'is-guide-lines-on' );
		} else {
			document.body.classList.remove( 'is-guide-lines-on' );
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
					info={ __( 'Show visible guide lines on title and blocks' ) }
					onClick={ onToggle }
				>
					{ __( 'Block Guide Lines' ) }
				</PluginMoreMenuItem>

			</Fragment>
		);
	}
}

export default compose( [
	withSelect( ( select ) => ( {
		isActive: select( 'core/edit-post' ).isFeatureActive( 'blockGuideLines' ),
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitGuidelinesTools' ),
	} ) ),
	withDispatch( ( dispatch, ownProps ) => ( {
		onToggle() {
			dispatch( 'core/edit-post' ).toggleFeature( 'blockGuideLines' );
		},
	} ) ),
	withSpokenMessages,
] )( BlockGuideLines );
