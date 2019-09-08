/**
 * Internal Dependencies
 */
import Controls from './components/controls';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;

const allowedBlocks = ['core/spacer'];

/**
 * Get settings.
 */
let globalSettings;
wp.api.loadPromise.then(() => {
	globalSettings = new wp.api.models.Settings();
});

/**
 * Filters registered block settings, extending attributes with settings
 *
 * @param {Object} settings Original block settings.
 * @return {Object} Filtered block settings.
 */
function addAttributes(settings) {
	// Use Lodash's assign to gracefully handle if attributes are undefined
	if (allowedBlocks.includes(settings.name)) {

		globalSettings.fetch().then(response => {
			settings.attributes = Object.assign(settings.attributes, {
				height: {
					type: 'number',
					default: response.spacerSetDefault,
				},
			});
			return settings;
		});
	}

	return settings;
}

/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {function|Component} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		return (
			<Fragment>
				<BlockEdit {...props} />
				{props.isSelected && allowedBlocks.includes(props.name) && <Controls {...{ ...props }} />}
			</Fragment>
		);
	};
}, 'withControls');

addFilter(
	'blocks.registerBlockType',
	'editorskit/spacer-height/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'editorskit/spacer-height',
	withControls
);