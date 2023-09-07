import React from 'react';

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import useLibrary from '../stores/library';

function LibraryNoConnectionsFound() {
	const setIsAddingNewConnection = useLibrary(
		( state ) => state.setIsAddingNewConnection
	);

	return (
		<div className="gutenberghub-template-library-no-connections">
			<h2>
				{ __(
					'No Connections Found',
					'gutenberghub-template-library'
				) }
			</h2>
			<p>
				{ __(
					"You don't have any existing connection. Try creating a new connection.",
					'gutenberghub-template-library'
				) }
			</p>
			<Button
				variant="primary"
				onClick={ () => setIsAddingNewConnection( true ) }
			>
				{ __(
					'Create New Connection',
					'gutenberghub-template-library'
				) }
			</Button>
		</div>
	);
}

export default LibraryNoConnectionsFound;
