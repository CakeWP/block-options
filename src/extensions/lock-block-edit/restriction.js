import { get } from 'lodash';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

import { isBlockSupportsLocking } from './utils';

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {

		const canBeLocked = isBlockSupportsLocking(props.name);

		if (!canBeLocked) {
			return <BlockEdit {...props} />
		}

		const currentSettingsLockStatus = get(
			props,
			'attributes.editorskitEditingLockSettings',
			false
		);

		const currentToolbarLockStatus = get(
			props,
			'attributes.editorskitEditingLockToolbar',
			false
		);

		return (
			<>
				{props.isSelected && (
					<style>
						{
							currentSettingsLockStatus ? `.block-editor-block-inspector { pointer-events:none; opacity: .5; user-select: none; }` : ''
						}
						{
							currentToolbarLockStatus ? `.block-editor-block-toolbar > div:not(:first-child) { display: none; width: 0px; border: none !important; }` : ''
						}
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
