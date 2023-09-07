import apiFetch from '@wordpress/api-fetch';

import { get } from 'lodash';

async function createConnection( connection ) {
	return apiFetch( {
		path: 'gutenberghub-template-library/v1/connections',
		method: 'POST',
		data: {
			connection_uri: connection.connection_uri,
			access_key: connection.access_key,
			product_id: connection.product_id,
			metadata: get( connection, 'metadata', {} ),
		},
	} );
}

export default createConnection;
