import apiFetch from '@wordpress/api-fetch';

async function togglePostStatus( config ) {
	const path = wpApiSettings.versionString
		.concat( config.postType )
		.concat( '/' )
		.concat( config.id.toString() );

	return apiFetch( {
		path,
		method: 'POST',
		data: {
			meta: {
				gsm_active: ! config.currentStatus,
			},
		},
	} );
}

export default togglePostStatus;
