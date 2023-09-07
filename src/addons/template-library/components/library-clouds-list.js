import React from 'react';

import { isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

import useLibrary from '../stores/library';
import LibraryCloud from './library-cloud';
import getCloudsList from '../services/get-clouds';
import { useQuery } from 'react-query';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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
		<div className="gutenberghub-template-library-cloud-grid">
			<ResponsiveMasonry
				columnsCountBreakPoints={ {
					350: 1,
					750: 2,
					900: 4,
				} }
			>
				<Masonry gutter="15px">
					{ cloudList?.map( ( item ) => {
						return <LibraryCloud { ...item?.acf } />;
					} ) }
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}

export default LibraryCreateNewConnection;
