import React from 'react';

import { __ } from '@wordpress/i18n';
import { ButtonGroup, Button } from '@wordpress/components';
import { plus } from '@wordpress/icons';
import { useQuery } from 'react-query';

import getConnections from '../services/get-connections';
import useLibrary from '../stores/library';

function LibraryConnectionsSwitcher() {
	const { data: connections, isLoading, isError } = useQuery(
		'connections',
		() => getConnections()
	);

	const setIsAddingNewConnection = useLibrary(
		( state ) => state.setIsAddingNewConnection
	);

	const isAddingNewConnection = useLibrary(
		( state ) => state.isAddingNewConnection
	);

	const activeConnection = useLibrary( ( state ) => state.activeConnection );
	const setActiveConnection = useLibrary(
		( state ) => state.setActiveConnection
	);

	return (
		<div className="gutenberghub-template-library-connections-switcher">
			<ButtonGroup style={ { display: 'flex' } }>
				{ connections.map( ( connection, index ) => {
					const isActive = connection?.id === activeConnection;

					return (
						<Button
							key={ index }
							isPressed={ isActive }
							onClick={ () => {
								setActiveConnection( connection?.id );
								setIsAddingNewConnection( false );
							} }
						>
							{ connection?.title }
						</Button>
					);
				} ) }
				<Button
					icon={ plus }
					isPressed={ isAddingNewConnection }
					onClick={ () => {
						setIsAddingNewConnection( true );
						setActiveConnection( '' );
					} }
					label={ __( 'Add a connection', 'react-query' ) }
				/>
			</ButtonGroup>
		</div>
	);
}

export default LibraryConnectionsSwitcher;
