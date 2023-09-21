import apiFetch from '@wordpress/api-fetch';

async function deletePost( config ) {
	const path = wpApiSettings.versionString
		.concat( config.postType )
		.concat( '/' )
		.concat( config.id.toString() );

	return apiFetch( {
		path,
		method: 'DELETE',
	} );
}

export default deletePost;
