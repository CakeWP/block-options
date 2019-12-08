/**
 * WordPress dependencies
 */
const { withSelect } = wp.data;
const { compose } = wp.compose;
const { Component, Fragment } = wp.element;
const { BlockControls, BlockVerticalAlignmentToolbar } = wp.blockEditor;
const { withSpokenMessages } = wp.components;

class ToolbarControls extends Component {
	render() {
		const {
			attributes,
			setAttributes,
			isDisabled,
		} = this.props;

		const {
			verticalAlignment,
		} = attributes;

		if ( isDisabled ) {
			return null;
		}

		return (
			<Fragment>
				<BlockControls>
					<BlockVerticalAlignmentToolbar
						value={ verticalAlignment }
						onChange={ ( newAlignment ) => {
							setAttributes( { verticalAlignment: newAlignment } );
						} }
					/>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCoverAlignmentOptions' ),
		};
	} ),
	withSpokenMessages
)( ToolbarControls );
