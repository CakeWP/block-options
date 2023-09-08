import React from 'react';

import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

import LibraryCloud from './library-cloud';
import getCloudsList from '../services/get-clouds';
import { useQuery } from 'react-query';

function LibraryCreateNewConnection() {
	const { data: cloudList, isLoading, isError } = useQuery(
		'clouds',
		() => getCloudsList(),
		{
			retry: false,
			refetchInterval: false,
		}
	);
	if ( isLoading ) {
		return (
			<div className="gutenberghub-template-library-cloud-list">
				<Spinner />
			</div>
		);
	}

	if ( isError ) {
		return <LibraryError />;
	}

	return (
		<div className="gutenberghub-template-library-cloud__cloud-grid">
			{ cloudList?.map( ( item ) => {
				return <LibraryCloud { ...item?.acf } />;
			} ) }
		</div>
	);
}

export default LibraryCreateNewConnection;
