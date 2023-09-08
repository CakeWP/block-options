import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import App from './app';

import { QueryClientProvider } from 'react-query';

import queryClient from './query-client';

import { get } from 'lodash';

domReady(() => {
	const isAddonActive = get(
		window,
		'editorskitInfo.addons.template_library',
		false
	);

	if (isAddonActive) {
		let observer = new MutationObserver((_, observer) => {
			let toolbarElement = document.querySelector(
				'.edit-post-header__toolbar'
			);
			if (toolbarElement) {
				let wrapper = document.createElement('div');
				wrapper.id = 'wpcloudify-toolbar-items';
				wrapper.style.display = 'flex'; // TODO: move this somewhere else.

				toolbarElement.appendChild(wrapper);

				render(
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>,
					wrapper
				);

				observer.disconnect();
			}
		});
		observer.observe(document.body, { childList: true, attributes: true });
	}
});
