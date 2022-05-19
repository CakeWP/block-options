import { get } from 'lodash';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const isLocked = get(props, 'attributes.editorskitEditingLock', false);

		return (
			<>
				{isLocked && (
					<style>
						{`.block-editor-block-inspector { pointer-events:none; opacity: .5; user-select: none; }`}
					</style>
				)}
				<BlockEdit {...props} />
			</>
		);
	};
}, 'withInspectorControl');

addFilter(
	'editor.BlockEdit',
	'editorskit/with-restrictive-block-controls',
	withInspectorControls
);
