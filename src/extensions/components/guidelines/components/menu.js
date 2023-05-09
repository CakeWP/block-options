/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginSidebarMoreMenuItem } = wp.editPost;
const { withSpokenMessages } = wp.components;

/**
 * Render plugin
 */
class BlockGuideLines extends Component {
	componentDidMount() {
		this.sync();
	}

	componentDidUpdate() {
		this.sync();
	}

	sync() {
		const { isActive, isDisabled } = this.props;
		const { editor } = window.editorskitInfo;

		if ( isActive && ! isDisabled ) {
			document.body.classList.add( 'is-guide-lines-on' );
		} else {
			document.body.classList.remove( 'is-guide-lines-on' );
		}

		// Custom body class to fix Gutenberg plugin conflict
		if ( typeof editor.version !== 'undefined' && ! isDisabled ) {
			const version = parseFloat( editor.version );
			if ( version >= 7 && version < 7.7 ) {
				document.body.classList.add( 'is-guide-lines-new' );
			} else if ( version >= 7.7 ) {
				document.body.classList.add( 'is-guide-lines-new-ui' );
			}
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
				<PluginSidebarMoreMenuItem
					icon={ isActive && 'yes' }
					role="menuitemcheckbox"
					info={ __( 'Show visible guide lines on title and blocks', 'block-options' ) }
					onClick={ onToggle }
				>
					{ __( 'Block Guide Lines', 'block-options' ) }
				</PluginSidebarMoreMenuItem>

			</Fragment>
		);
	}
}

export default compose( [
	withSelect( ( select ) => ( {
		isActive: select( 'core/edit-post' ).isFeatureActive( 'blockGuideLines' ),
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitGuidelinesTools' ),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		onToggle() {
			dispatch( 'core/edit-post' ).toggleFeature( 'blockGuideLines' );
		},
	} ) ),
	withSpokenMessages,
] )( BlockGuideLines );
