/**
 * Option to restrict block-editing.
 */

import './attribute';
import './restriction';

import LockOption from './lock-option';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';

domReady(() => {
	// a modal remove observe, that re-attaches the initial observer when modal is removed.
	const removeObserver = new MutationObserver((mutations, observer) => {
		const blockLockModal = document.querySelector(
			'.block-editor-block-lock-modal'
		);

		if (!blockLockModal) {
			initialObserver.observe(document.body, {
				childList: true,
				subtree: true,
			});
			observer.disconnect();
		}
	});

	const initialObserver = new MutationObserver((mutations, observer) => {
		const blockLockModal = document.querySelector(
			'.block-editor-block-lock-modal'
		);

		if (blockLockModal) {
			observer.disconnect();
			removeObserver.observe(document.body, {
				childList: true,
				subtree: true,
			});
		}

		if (!blockLockModal) return;

		const modalForm = blockLockModal.querySelector(
			'.components-modal__content form'
		);

		const root = document.createElement('div');
		root.id = 'editorskit-additional-block-locking';

		// Injecting at 2nd last position.
		modalForm.insertBefore(root, modalForm.lastElementChild);

		render(<LockOption />, root);
	});

	initialObserver.observe(document.body, {
		subtree: true,
		childList: true,
	});
});
