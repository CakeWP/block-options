/**
 * Internal dependencies
 */
import NavigatorToolbar from './components/controls';

/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { createHigherOrderComponent } = wp.compose;
const { hasBlockSupport } = wp.blocks;

const allowedBlocks = [ 'core/columns', 'core/column', 'core/group' ];

/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withNavigator = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		return (
			<Fragment>
				<BlockEdit { ...props } />
				{ props.isSelected && ( allowedBlocks.includes( props.name ) || hasBlockSupport( props.name, 'editorsKitBlockNavigator' ) ) && <NavigatorToolbar { ...{ ...props } } /> }
			</Fragment>
		);
	};
}, 'withNavigator' );

addFilter(
	'editor.BlockEdit',
	'editorskit/media-text-link',
	withNavigator
);
