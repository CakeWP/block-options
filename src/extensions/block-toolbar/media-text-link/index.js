/**
 * Internal Dependencies
 */
import LinkToolbar from './components/toolbar';

/**
 * WordPress Dependencies
 */
const { withSelect } = wp.data;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { compose, createHigherOrderComponent } = wp.compose;

const allowedBlocks = ['core/media-text'];

/**
 * Filters registered block settings, extending attributes with settings
 *
 * @param {Object} settings Original block settings.
 * @return {Object} Filtered block settings.
 */
function addAttributes(settings) {
	// Use Lodash's assign to gracefully handle if attributes are undefined
	if (allowedBlocks.includes(settings.name)) {
		settings.attributes = Object.assign( settings.attributes, {
			url: {
				type: 'string',
			},
		} );
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
				{props.isSelected && allowedBlocks.includes(props.name) && <LinkToolbar {...{ ...props }} />}
			</Fragment>
		);
	};
}, 'withControls');

addFilter(
	'blocks.registerBlockType',
	'editorskit/media-text-link/attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'editorskit/media-text-link',
	withControls
);