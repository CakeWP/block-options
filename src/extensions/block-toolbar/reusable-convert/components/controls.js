/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { Toolbar, withSpokenMessages } = wp.components;

class ToolbarControls extends Component {
	render() {
		const {
			onConvertToStatic,
			isDisabled,
		} = this.props;

		if ( isDisabled ) {
			return null;
		}

		const toolbarControls = [ {
			icon: 'controls-repeat',
			title: __( 'Convert to Regular Blocks', 'block-options' ),
			onClick: onConvertToStatic,
		} ];

		return (
			<Fragment>
				<BlockControls>
					<Toolbar
						className="editorskit-reusable-convert-controls"
						controls={ toolbarControls }
					/>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitMediaTextLayoutOptions' ),
		};
	} ),
	withDispatch( ( dispatch, { clientId } ) => {
		const {
			__experimentalConvertBlockToStatic: convertBlockToStatic,
		} = dispatch( 'core/editor' );

		return {
			onConvertToStatic() {
				convertBlockToStatic( clientId );
			},
		};
	} ),
	withSpokenMessages
)( ToolbarControls );
