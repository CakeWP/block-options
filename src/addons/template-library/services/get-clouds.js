import apiFetch from '@wordpress/api-fetch';

async function getCloudsList() {
	return await (
		await fetch(
			'https://cloud.gutenberghub.com/wp-json/wp/v2/cloud?acf_format=standard'
		)
	 ).json();
}

export default getCloudsList;
