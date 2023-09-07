import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';

async function getConnections( merge = true ) {
	return apiFetch( {
		path: addQueryArgs( 'gutenberghub-template-library/v1/connections', {
			merge,
		} ),
	} );
}

export default getConnections;
