import React from 'react';
import { __ } from '@wordpress/i18n';
import { useQuery } from 'react-query';
import getTerms from '../../services/get-terms';

import {
	Card,
	Button,
	Spinner,
	CardHeader,
	CardBody,
} from '@wordpress/components';

import { addQueryArgs } from '@wordpress/url';

function Exporter() {
	const { data: terms, isLoading } = useQuery(['terms'], () =>
		getTerms({
			taxonomy: 'gsm_block',
			params: {
				per_page: -1,
				orderby: 'count',
				order: 'desc',
				hide_empty: true,
			},
		})
	);

	return (
		<Card className="gsm-exporter">
			<CardHeader>
				<h3>{__('Export Styles', 'gutenberghub-styles-manager')}</h3>
			</CardHeader>

			<CardBody>
				{isLoading ? (
					<Spinner />
				) : (
					<div className="gsm-export-block-list">
						{terms.map((term) => {
							if (term.count === 0) {
								return null;
							}

							return (
								<div className="gsm-export-block-list__item">
									{term.name} ({term.count})
									<Button
										variant="primary"
										href={addQueryArgs(
											window.location.href,
											{
												export: true,
												term: term.id,
												nonce: gutenberghubStylesManager.exportNonce,
											}
										)}
									>
										{__(
											'Export',
											'gutenberghub-styles-manager'
										)}
									</Button>
								</div>
							);
						})}
					</div>
				)}
			</CardBody>
		</Card>
	);
}

export default Exporter;
