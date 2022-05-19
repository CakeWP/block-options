import { get } from 'lodash';
import { __ } from '@wordpress/i18n';
import { lock, unlock } from '@wordpress/icons';
import { CheckboxControl, Icon } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';

function LockOption() {
	const selectedBlock = useSelect(
		(select) => select('core/block-editor').getSelectedBlock(),
		[]
	);

	const { updateBlockAttributes } = useDispatch('core/block-editor');

	const currentLockStatus = get(
		selectedBlock,
		'attributes.editorskitEditingLock',
		false
	);

	return (
		<ul>
			<strong>{__('Editorskit', 'block-options')}</strong>
			<li className="block-editor-block-lock-modal__checklist-item">
				<CheckboxControl
					label={
						<>
							{__('Restrict editing')}
							<Icon icon={currentLockStatus ? lock : unlock} />
						</>
					}
					checked={currentLockStatus}
					onChange={() =>
						updateBlockAttributes(selectedBlock.clientId, {
							editorskitEditingLock: !currentLockStatus,
						})
					}
				/>
			</li>
		</ul>
	);
}

export default LockOption;
