import React from 'react';
import { get } from 'lodash';
import { Button, Card, CardBody, CardHeader } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useMutation, useQueryClient } from 'react-query';

import importData from '../../services/import-data';
import useNotices from '../../store/notice.store';

function Importer() {
	const client = useQueryClient();
	const addNotice = useNotices((state) => state.addNotice);

	const { mutate: importUploadedData, isLoading: isImporting } = useMutation(
		(data) => importData(data),
		{
			onError: (data) => {
				addNotice({
					title: get(
						data,
						'message',
						__(
							'Something went wrong while importing. Please try again later!',
							'gutenberghub-styles-manager'
						)
					),
					status: 'error',
				});
			},
			onSuccess: (data) => {
				const updatedTermID = get(data, 'updatedTerm.term_id');
				const message = get(data, 'message');

				client.invalidateQueries(['posts', '', updatedTermID]);
				client.invalidateQueries('terms');

				addNotice({
					title: message,
					status: 'info',
				});
			},
		}
	);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target );
		importUploadedData(formData);
	};

	return (
		<Card className="gsm-importer">
			<CardHeader>
				<h3>{__('Import Styles', 'gutenberghub-styles-manager')}</h3>
			</CardHeader>
			<CardBody className="gsm-importer-body">
				<form onSubmit={(event) => handleSubmit(event)}>
					<input
						type="file"
						name="json"
						accept="application/json"
						required
					/>
					<Button
						type="submit"
						variant="secondary"
						disabled={isImporting}
						isBusy={isImporting}
					>
						{isImporting
							? __('Importing...', 'gutenberghub-styles-manager')
							: __('Import', 'gutenberghub-styles-manager')}
					</Button>
				</form>
			</CardBody>
		</Card>
	);
}

export default Importer;
