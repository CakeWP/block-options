/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { BlockControls, AlignmentToolbar } = wp.blockEditor;
const { Toolbar } = wp.components;
const { hasBlockSupport } = wp.blocks;

const allowedBlocks = ['core/image', 'core/gallery'];

class AlignmentControl extends Component {
	render() {
		const {
			blockId,
			blockName,
			blockClassName,
			blockCaptionAlignment,
			isDisabled,
			updateBlockAttributes,
		} = this.props;

		const clearClassName = ( nextAlign ) => {
			let newClassName = '';
			if (blockClassName) {
				newClassName = blockClassName.replace('caption-align-center', '').replace('caption-align-right', '').replace('caption-align-left', '').trim();
				newClassName = newClassName.replace(/\s+/g, ' ').trim();
			}

			return `caption-align-${ nextAlign } ` + newClassName;
		}

		if (isDisabled) {
			return null;
		}
		if ( allowedBlocks.includes(blockName) || hasBlockSupport(blockName, 'editorsKitCaptionAlignment')) {
			//continue
		}else{
			return null;
		}
		return (
			<Fragment>
				<BlockControls>
					<Toolbar className="editorskit-components-alignment-toolbar">
						<AlignmentToolbar
							value={blockCaptionAlignment}
							onChange={(nextAlign) => {
								updateBlockAttributes(blockId, { captionAlignment: nextAlign, className: clearClassName(nextAlign) });
							}}
						/>
					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect(() => {
		const selectedBlock = select('core/block-editor').getSelectedBlock();
		if (!selectedBlock) {
			return {};
		}
		return {
			blockId: selectedBlock.clientId,
			blockName: selectedBlock.name,
			blockClassName: get(selectedBlock, 'attributes.className'),
			blockCaptionAlignment: get(selectedBlock, 'attributes.captionAlignment'),
			isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitCaptionAlignmentFormats'),
		};
	}),
	withDispatch((dispatch) => ({
		updateBlockAttributes: dispatch('core/block-editor').updateBlockAttributes,
	})),
	// ifCondition((props) => {
	// 	const checkFormats = props.formatTypes.filter((formats) => formats.name === 'wpcom/justify');
	// 	return 'core/paragraph' === props.blockName && checkFormats.length === 0;
	// })
)(AlignmentControl);
