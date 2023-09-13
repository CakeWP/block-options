import React from 'react';

import { useQuery } from 'react-query';
import { Spinner } from '@wordpress/components';

import LibraryError from './library-error';
import LibraryHeader from './library-header';
import getConnections from '../services/get-connections';
import LibraryNoConnectionsFound from './library-no-connections-found';
import useLibrary from '../stores/library';
import LibraryCreateNewConnection from './library-clouds-list';

import { QueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';

import LibraryContent from './library-content';

import { head } from 'lodash';

function Library( props ) {
	const setActiveConnection = useLibrary(
		( state ) => state.setActiveConnection
	);

	const activeConnectionId = useLibrary(
		( state ) => state.activeConnection
	);

	const { data: connections, isLoading, isError } = useQuery(
		'connections',
		() => getConnections(),
		{
			retryOnMount: false,
			onSuccess: ( connections ) => {
				const initialConnection = head( connections );
				if ( initialConnection ) {
					setActiveConnection( initialConnection?.id );
				}
			},
		}
	);


	const isAddingNewConnection = useLibrary(
		( state ) => state.isAddingNewConnection
	);

	if ( isLoading ) {
		return (
			<div className="gutenberghub-template-library-loading">
				<Spinner />
			</div>
		);
	}

	if ( isError ) {
		return <LibraryError />;
	}

	const currentConnection = connections?.find(
		( connection ) => connection?.id === activeConnectionId
	);

	const LibraryCurrentContent = () => {
		if ( isAddingNewConnection ) {
			return (
				<>
					<LibraryCreateNewConnection />
				</>
			);
		}

		return <LibraryContent connection={ currentConnection } />;
	};

	return (
		<div>
			<LibraryHeader onClose={ props.onRequestClose } />

			<QueryErrorResetBoundary>
				{ ( { reset } ) => {
					return (
						<ErrorBoundary
							onReset={ reset }
							fallbackRender={ ( { resetErrorBoundary } ) => (
								<LibraryError onReset={ resetErrorBoundary } />
							) }
						>
							<div
								className={ `gutenberghub-template-library-content${
									isAddingNewConnection
										? ' gutenberghub-template-library-connections'
										: ''
								}` }
							>
								{ connections.length === 0 &&
								! isAddingNewConnection ? (
									<LibraryNoConnectionsFound />
								) : (
									<LibraryCurrentContent />
								) }
							</div>
						</ErrorBoundary>
					)
				} }
			</QueryErrorResetBoundary>
		</div>
	);
}

export default Library;
