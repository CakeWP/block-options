import apiFetch from '@wordpress/api-fetch';



async function getTerms( config ){
	const params = new URLSearchParams({
		...config.params,
	}).toString();

	return apiFetch({
		path: wpApiSettings.versionString + config.taxonomy + '?' + params,
	});
}

export default getTerms;
