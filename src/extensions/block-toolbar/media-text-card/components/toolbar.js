/**
 * External dependencies
 */
import { join } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { Toolbar } = wp.components;

class ToolbarControls extends Component {
	componentDidUpdate(){
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			mediaPosition,
			className,
		} = attributes;

		if (!['top', 'bottom'].includes(mediaPosition) && className ){
			let newClassName = className.replace('has-media-on-the-bottom', '').replace('has-media-on-the-top', '').trim();
			newClassName = newClassName.replace(/\s+/g, ' ').trim();

			setAttributes({ className: newClassName })
		}
	}

	render() {

		const {
			attributes,
			setAttributes,
		} = this.props;
		
		const {
			mediaPosition,
			className,
		} = attributes;

		const toolbarControls = [{
			className: 'align-pull-top',
			icon: 'align-pull-left',
			title: __('Show media on top'),
			isActive: mediaPosition === 'top',
			onClick: () => {
				let newClassName = className;
				if (newClassName) {
					newClassName = newClassName.replace('has-media-on-the-bottom', '').replace('has-media-on-the-top', '').trim() + ' has-media-on-the-top';
					newClassName = newClassName.replace(/\s+/g, ' ').trim();
				}else{
					newClassName = 'has-media-on-the-top';
				}
				setAttributes({ mediaPosition: 'top', className: newClassName, align: '' })
			},
		}, {
			className: 'align-pull-bottom',
			icon: 'align-pull-right',
			title: __('Show media on bottom'),
			isActive: mediaPosition === 'bottom',
			onClick: () => {
				let newClassName = className;
				if (newClassName) {
					newClassName = newClassName.replace('has-media-on-the-top', '').replace('has-media-on-the-bottom', '').trim() + ' has-media-on-the-bottom';
					newClassName = newClassName.replace(/\s+/g, ' ').trim();
				} else {
					newClassName = 'has-media-on-the-bottom';
				}
				setAttributes({ mediaPosition: 'bottom', className: newClassName, align: '' })
			},
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
