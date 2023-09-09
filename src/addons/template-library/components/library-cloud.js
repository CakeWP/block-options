import React from 'react';

import { isEmpty } from 'lodash';
import { __ } from '@wordpress/i18n';
import { trash, external } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { TextControl, Button, ButtonGroup, Card, CardBody, CardMedia, CardHeader, CardFooter } from '@wordpress/components';

import useLibrary from '../stores/library';
import getConnections from '../services/get-connections';
import createConnection from '../services/create-connection';
import deleteConnection from '../services/delete-connection';
import { useMutation, useQueryClient, useQuery } from 'react-query';

function LibraryCloudActivation( {
	accessKey,
	isCreating,
	setAccessKey,
	isActivating,
	setActivating,
	cloud_connection_uri,
	createEditedConnection,
} ) {
	return isActivating ? (
		<div className="library-cloud-activation">
			<TextControl
				value={ accessKey }
				onChange={ ( newAccessKey ) => {
					setAccessKey( newAccessKey );
				} }
				placeholder={ __(
					'Enter License Key',
					'gutenberghub-template-library'
				) }
			/>
			<ButtonGroup>
				<Button
					variant="secondary"
					onClick={ () => setActivating( false ) }
					style={ {
						margin: '0 4px',
					} }
				>
					{ __( 'Cancel', 'gutenberghub-template-library' ) }
				</Button>
				<Button
					variant="primary"
					isBusy={ isCreating }
					style={ { boxShadow: 'none' } }
					onClick={ () => createEditedConnection() }
					disabled={
						isCreating ||
						isEmpty( cloud_connection_uri ) ||
						isEmpty( accessKey )
					}
				>
					{ isCreating
						? __( 'Activating...', 'gutenberghub-template-library' )
						: __( 'Activate', 'gutenberghub-template-library' ) }
				</Button>
			</ButtonGroup>
		</div>
	) : (
		<div style={{width: '100%', textAlign: 'right'}}>
			<ButtonGroup>
				<Button
					style={ {
						margin: '0 4px',
					} }
					variant="secondary"
					onClick={ () => setActivating( true ) }
				>
					{ __( 'Activate', 'gutenberghub-template-library' ) }
				</Button>
			</ButtonGroup>
		</div>
	);
}

function LibraryCloud( props ) {
	const [ accessKey, setAccessKey ] = useState( '' );
	const [ isActivating, setActivating ] = useState( false );

	const {
		cloud_connection_uri,
		cloud_description,
		cloud_title,
		cloud_thumbnail,
		connection_access_key,
		product_id,
		product_public_key,
		get_now_link
	} = props;

	const setActiveConnection = useLibrary(
		( state ) => state.setActiveConnection
	);

	const setIsAddingNewConnection = useLibrary(
		( state ) => state.setIsAddingNewConnection
	);
	const { data: connections, isLoading } = useQuery(
		'unmerged-connections',
		() => getConnections( false )
	);

	const queryClient = useQueryClient();
	const addedConnection = connections?.find(
		( c ) => c.product_id === product_id
	);

	const {
		mutate: createEditedConnection,
		isLoading: isCreating,
		isError,
		error,
	} = useMutation(
		() =>
			createConnection( {
				connection_uri: cloud_connection_uri,
				access_key: accessKey,
				product_id: product_id,
				metadata: {
					title: cloud_title,
				},
			} ),
		{
			onSuccess: ( createdConnection ) => {
				queryClient.invalidateQueries( 'connections' );
				setActiveConnection( createdConnection?.id );
				setIsAddingNewConnection( false );
			},
		}
	);
	const {
		isLoading: isDeleting,
		mutate: deleteCurrentConnection,
	} = useMutation( () => deleteConnection( addedConnection.id ), {
		onSuccess: () => {
			queryClient.invalidateQueries( 'connections' );
		},
	} );

	const libraryActivationProps = {
		accessKey,
		isCreating,
		setAccessKey,
		isActivating,
		setActivating,
		cloud_connection_uri,
		createEditedConnection,
	};

	const isActivated = ! isEmpty( addedConnection ) &&
				addedConnection?.product_id === product_id

	return (
		<Card>
			<CardHeader className="gutenberghub-template-library-cloud-item-title">
				<h3 style={{ maxWidth: '75%', margin: 0 }}>{ cloud_title }</h3>
				{
					! isActivated && (
						<Button
							variant="primary"
							style={ {
								boxShadow: 'none',
							} }
							href={get_now_link}
							target="_blank"
						>
						{ __( 'Get Now', 'gutenberghub-template-library' ) }
						</Button>
					)
				}
			</CardHeader>

			<CardMedia>
				<img
					className="gutenberghub-template-library-cloud-item-image"
					width="100%"
					src={ cloud_thumbnail?.url }
				/>
			</CardMedia>

			<CardFooter>
				{ isActivated ? (
					<Button
						isDestructive
						icon={ trash }
						variant="secondary"
						disabled={ isDeleting }
						isBusy={ isDeleting }
						onClick={ deleteCurrentConnection }
					>
						{ __( 'Deactivate', 'gutenberghub-template-library' ) }
					</Button>
				) : (
					<LibraryCloudActivation { ...libraryActivationProps } />
				) }
			</CardFooter>
		</Card>
	);
}

export default LibraryCloud;
