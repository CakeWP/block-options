/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { loadPromise, models } = wp.api;
const { Component, Fragment } = wp.element;
const { withDispatch, withSelect } = wp.data;
const { BlockControls } = wp.blockEditor;
const { withSpokenMessages } = wp.components;
const { Toolbar, Button } = wp.components;
const { compose, ifCondition } = wp.compose;


/**
 * Get settings.
 */
let settings;
loadPromise.then(() => {
	settings = new models.Settings();
});

class Controls extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			spacerSetDefault: 100
		};

		settings.on('change:spacerSetDefault', model => {
			this.setState({
				spacerSetDefault: settings.get('spacerSetDefault'),
			});
		});

		settings.fetch().then(response => {
			this.setState({ spacerSetDefault: response.spacerSetDefault });
		});
	}

	saveApiKey( spacerSetDefault ){
		const model = new models.Settings({
			spacerSetDefault: spacerSetDefault,
		});
		model.save().then(() => {
			this.setState({
				spacerSetDefault: spacerSetDefault,
			});
			settings.fetch();
		});
	};

	render() {
		const {
			attributes,
			onSetDefault,
		} = this.props;

		const {
			height,
		} = attributes;
		
		if (!this.state.spacerSetDefault ){
			return null;
		}

		return (
			<Fragment>
				<BlockControls>
					<Toolbar>
						<Button
							disabled={height === this.state.spacerSetDefault ? 'disabled' : ''}
							onClick={() => {
								this.saveApiKey( height );
								onSetDefault();
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
		let spacerSetDefault = '';
		return {
			spacerSetDefault: spacerSetDefault,
		};
		
	}),
	withDispatch((dispatch) => {
		const { createNotice } = dispatch('core/notices');

		return {
			onSetDefault() {
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