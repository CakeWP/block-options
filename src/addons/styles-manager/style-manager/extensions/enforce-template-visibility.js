/**
 * WordPress Dependencies
 */
import { dispatch } from '@wordpress/data';

window.addEventListener('load', () => {
	dispatch('core/block-editor').setTemplateValidity(true);
});
