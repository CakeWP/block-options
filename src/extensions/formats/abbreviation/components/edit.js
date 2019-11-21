/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;

class Edit extends Component {
	render() {
		const {
			blockId,
			isBlockJustified,
			isDisabled,
			updateBlockAttributes,
		} = this.props;

		return (
			<RichTextToolbarButton
				icon="editor-code"
				title={__('Abbreviation', 'block-options')}
				// onClick={onToggle}
				// isActive={isBlockJustified}
			/>
		);
	}
}

export default compose(
	withDispatch((dispatch) => ({
		updateBlockAttributes: dispatch('core/block-editor').updateBlockAttributes,
	})),
)(Edit);
