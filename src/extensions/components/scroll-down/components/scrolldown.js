/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { compose, withState } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { withSpokenMessages } = wp.components;

/**
 * Render plugin
 */
class ScrollDown extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			isActive,
			onToggle,
			isDisabled,
		} = this.props;

		if ( ! isActive || isDisabled ) {
			return null;
		}

		return (
			<Fragment>
				<PluginMoreMenuItem
					role="menuitemcheckbox"
					onClick={ () => {
						const metaboxes = document.querySelectorAll( '.edit-post-layout__metaboxes' );
						if ( metaboxes[ 0 ] ) {
							metaboxes[ 0 ].scrollIntoView();
						}
					} }
				>
					{ __( 'View Custom Fields' ) }
				</PluginMoreMenuItem>

			</Fragment>
		);
	}
}

export default compose( [
	withSelect( ( select ) => ( {
		isActive: select( 'core/editor' ).getEditorSettings().enableCustomFields,
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitScrollDownTools' ),
	} ) ),
	withSpokenMessages,
] )( ScrollDown );
