/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { withDispatch, withSelect } = wp.data;
const { BlockControls } = wp.blockEditor;
const { withSpokenMessages } = wp.components;
const { Toolbar, Button } = wp.components;
const { compose, ifCondition } = wp.compose;

class Controls extends Component {
	render() {
		const {
			attributes,
			onSetDefault,
			spacerSetDefault,
		} = this.props;

		const {
			height,
		} = attributes;
		console.log( spacerSetDefault );
		return (
			<Fragment>
				<BlockControls>
					<Toolbar>
						<Button
							disabled={height === spacerSetDefault ? 'disabled' : ''}
							onClick={() => {
								onSetDefault( height );
							}}
						>
							{ __( 'Set as Default Height', 'block-options' ) }
						</Button>
					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect(( select ) => {
		return {
			spacerSetDefault: select('core/block-editor').getSettings().spacerSetDefault,
		};
	}),
	withDispatch((dispatch) => {
		const { createNotice } = dispatch('core/notices');

		return {
			onSetDefault( height ) {
				dispatch('core/block-editor').updateSettings({ spacerSetDefault: height });
				createNotice(
					'info',
					__('Spacer Block default height updated.', 'block-options'),
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			}
		};
	}),
	withSpokenMessages,
)(Controls);