import apiFetch from '@wordpress/api-fetch';

import { addQueryArgs } from '@wordpress/url';
import { filter, isEmpty } from 'lodash';

async function getTemplates( connectionId, keywords, categoryId, page = 1, signal = null ) {

	if (!signal) {
		signal = new AbortController();
	}

	let args = {
		connection_id: connectionId,
		keywords: filter( keywords, ( v ) => ! isEmpty( v ) ),
		page,
		per_page: 10,
	};

	if ( 'all' !== categoryId ) {
		args[ 'category' ] = categoryId;
	}

	const response = await apiFetch( {
		signal: signal,
		parse: false,
		path: addQueryArgs(
			'gutenberghub-template-library/v1/library/templates',
			args
		),
	} );

	return {
		data: await response.json(),
		totalPages: parseInt( response.headers.get( 'X-WP-TotalPages' ), 10 ),
	};
}

export default getTemplates;
