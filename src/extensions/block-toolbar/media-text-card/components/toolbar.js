/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { Toolbar } = wp.components;

class ToolbarControls extends Component {
	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;
		
		const {
			mediaPosition,
		} = attributes;

		const toolbarControls = [{
			className: 'align-pull-top',
			icon: 'align-pull-left',
			title: __('Show media on top'),
			isActive: mediaPosition === 'top',
			onClick: () => setAttributes({ mediaPosition: 'top' }),
		}, {
			className: 'align-pull-bottom',
			icon: 'align-pull-right',
			title: __('Show media on bottom'),
			isActive: mediaPosition === 'bottom',
			onClick: () => setAttributes({ mediaPosition: 'bottom' }),
		}];

		return (
			<Fragment>
				<BlockControls>
					<Toolbar
						className="editorskit-media-text-card-controls"
						controls={toolbarControls}
					/>
				</BlockControls>
			</Fragment>
		);
	}
}

export default ToolbarControls;
