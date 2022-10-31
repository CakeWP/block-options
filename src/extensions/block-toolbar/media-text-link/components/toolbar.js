/**
 * Internal dependencies
 */
import Controls from './controls';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { Toolbar } = wp.components;

class LinkToolbar extends Component {
	render() {
		return (
			<Fragment>
				<BlockControls>
					<ToolbarGroup>
						<Controls { ...this.props } />
					</ToolbarGroup>
				</BlockControls>
			</Fragment>
		);
	}
}

export default LinkToolbar;
