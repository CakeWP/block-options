import { get, isEqual } from 'lodash';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { useDispatch } from '@wordpress/data';
import { lock, unlock } from '@wordpress/icons';
import { BlockControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Toolbar, ToolbarButton, ToolbarGroup } from '@wordpress/components';

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

		const canMove   = isEqual(get(props, 'attributes.lock.move', false), false)
		const canRemove = isEqual(get(props, 'attributes.lock.remove', false), false);

		return (
			<>
				{props.isSelected && (
					<style>
						{
							currentSettingsLockStatus ? `.block-editor-block-inspector { pointer-events:none; opacity: .5; user-select: none; }` : ''
						}
						{
							currentToolbarLockStatus ? `.block-editor-block-toolbar > div:not(:first-child):not(.block-editor-block-toolbar__slot) { display: none; width: 0px; border: none !important; }` : ''
						}
						{
							currentToolbarLockStatus ? `.block-editor-block-toolbar > div.block-editor-block-toolbar__slot div:not(.editorskit-lock) { display: none; width: 0px; border: none !important; }` : ''
						}
					</style>
				)}
				<BlockEdit {...props} />
				{
					(currentToolbarLockStatus && canMove && canRemove) && (
						<BlockControls>
							<ToolbarGroup className="editorskit-lock">
								<ToolbarButton 
									showTooltip
									label={__('Unlock toolbar', 'editorskit')}
									icon={currentToolbarLockStatus ? lock : unlock} 
									onClick={() => {
										props.setAttributes({
											editorskitEditingLockToolbar: !currentToolbarLockStatus,
										})
									}}
								/>
							</ToolbarGroup>
						</BlockControls>
					)
				}
			</>
		);
	};
}, 'withInspectorControl');

addFilter(
	'editor.BlockEdit',
	'editorskit/with-restrictive-block-controls',
	withInspectorControls
);
