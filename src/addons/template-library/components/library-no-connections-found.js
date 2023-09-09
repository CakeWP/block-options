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
					'No Cloud Found',
					'gutenberghub-template-library'
				) }
			</h2>
			<p>
				{ __(
					"You don't have any existing cloud. Try adding a new cloud.",
					'gutenberghub-template-library'
				) }
			</p>
			<Button
				variant="primary"
				onClick={ () => setIsAddingNewConnection( true ) }
			>
				{ __(
					'Add New Cloud',
					'gutenberghub-template-library'
				) }
			</Button>
		</div>
	);
}

export default LibraryNoConnectionsFound;
