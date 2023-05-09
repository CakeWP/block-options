import { get } from 'lodash';
import { __ } from '@wordpress/i18n';
import { lock, unlock } from '@wordpress/icons';
import { CheckboxControl, Icon } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';

import { isBlockSupportsLocking } from './utils';

function LockOption() {
	const selectedBlock = useSelect(
		(select) => select('core/block-editor').getSelectedBlock(),
		[]
	);

	const canBeLocked = isBlockSupportsLocking( selectedBlock?.name );

	if (!canBeLocked) {
		return null;
	}

	const { updateBlockAttributes } = useDispatch('core/block-editor');

	const currentSettingsLockStatus = get(
		selectedBlock,
		'attributes.editorskitEditingLockSettings',
		false
	);

	const currentToolbarLockStatus = get(
		selectedBlock,
		'attributes.editorskitEditingLockToolbar',
		false
	);

	return (
		<ul>
			<strong>{__('Editorskit', 'block-options')}</strong>
			<li className="block-editor-block-lock-modal__checklist-item">
				<CheckboxControl
					label={
						<>
							{__('Restrict Settings', 'block-options')}
							<Icon icon={currentSettingsLockStatus ? lock : unlock} />
						</>
					}
					checked={currentSettingsLockStatus}
					onChange={() =>
						updateBlockAttributes(selectedBlock.clientId, {
							editorskitEditingLockSettings: !currentSettingsLockStatus,
						})
					}
				/>
				
			</li>
			<li className="block-editor-block-lock-modal__checklist-item">
				<CheckboxControl
					label={
						<>
							{__('Restrict Toolbar', 'block-options')}
							<Icon icon={currentToolbarLockStatus ? lock : unlock} />
						</>
					}
					checked={currentToolbarLockStatus}
					onChange={() =>
						updateBlockAttributes(selectedBlock.clientId, {
							editorskitEditingLockToolbar: !currentToolbarLockStatus,
						})
					}
				/>
			</li>
		</ul>
	);
}

export default LockOption;
