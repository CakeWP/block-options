import apiFetch from '@wordpress/api-fetch';

/**
 * Fetches the posts.
 */
async function getPosts( config ) {
	const queryString = new URLSearchParams( {
		...config.params,
		status: 'publish,draft',
	} ).toString();

	const path = `/wp/v2/${ config.postType }?${ queryString }`;

	const response = await apiFetch( {
		path: path,
		parse: false,
	} );

	const data = await response.json();

	return {
		data,
		totalPages: parseInt( response.headers.get( 'X-WP-TotalPages' ), 10 ),
	};
}

export default getPosts;
