import apiFetch from '@wordpress/api-fetch';

async function getCategories( connectionId ) {
	return apiFetch( {
		path:
			'gutenberghub-template-library/v1/library/categories?connection_id=' +
			connectionId,
		method: 'GET',
	} );
}

export default getCategories;
