import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';

async function importData(data) {
	return apiFetch({
		body: data,
		method: 'POST',
		path: addQueryArgs('gutenberghub-styles/v1/import-export/import', {
			nonce: gutenberghubStylesManager.importNonce,
		}),
	});
}

export default importData;
