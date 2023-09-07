import apiFetch from '@wordpress/api-fetch';

async function deleteConnection( connectionId ) {
	return apiFetch( {
		path: 'gutenberghub-template-library/v1/connections/' + connectionId,
		method: 'DELETE',
	} );
}

export default deleteConnection;
