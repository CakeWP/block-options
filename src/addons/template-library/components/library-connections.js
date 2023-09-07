import React from 'react';

import { Card, Button } from '@wordpress/components';

import { useQuery, useQueryClient } from 'react-query';
import { trash } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import deleteConnection from '../services/delete-connection';
import { useMutation } from 'react-query';
import getConnections from '../services/get-connections';
import { Spinner } from '@wordpress/components';
import { get } from 'lodash';

function LibraryConnectionItem( { connection } ) {
	const client = useQueryClient();

	const {
		isLoading: isDeleting,
		mutate: deleteCurrentConnection,
	} = useMutation( () => deleteConnection( connection?.id ), {
		onSuccess: () => {
			client.invalidateQueries( 'connections' );
		},
	} );

	const connectionTitle = get(
		connection,
		'metadata.title',
		get( connection, 'title', 'Unknown' )
	);

	return (
		<Card className="gutenberghub-template-library-connection">
			<span>{ connectionTitle }</span>

			<Button
				isSmall
				icon={ trash }
				disabled={ isDeleting }
				onClick={ deleteCurrentConnection }
				label={ __(
					'Delete Connection',
					'gutenberghub-template-library'
				) }
			/>
		</Card>
	);
}

function LibraryConnections() {
	const {
		data: connections,
		isLoading,
		isError,
	} = useQuery( 'unmerged-connections', () => getConnections( false ) );

	if ( isLoading ) {
		return <Spinner />;
	}

	return (
		<div className="gutenberghub-template-library-wrap gutenberghub-template-library-connections">
			{ connections.map( ( connection, index ) => {
				return (
					<LibraryConnectionItem
						connection={ connection }
						key={ index }
					/>
				);
			} ) }
		</div>
	);
}

export default LibraryConnections;
