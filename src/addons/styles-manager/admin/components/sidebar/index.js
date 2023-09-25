import React from 'react';
import { __ } from '@wordpress/i18n';
import {
	MenuGroup,
	MenuItem,
	// @ts-ignore
	SearchControl,
	Spinner,
	SelectControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

import { capitalize, get, head, isEmpty } from 'lodash';

import useManager from '../../store/manager.store';
import { useQuery } from 'react-query';
import getTerms from '../../services/get-terms';
import { splitBlockTermsByNamespace } from '../../utils';

function Sidebar() {
	const [searchQuery, setSearchQuery] = useState('');

	const { data: terms, isLoading } = useQuery(
		['terms'],
		() =>
			getTerms({
				taxonomy: 'gsm_block',
				params: {
					per_page: -1,
					orderby: 'count',
					order: 'desc',
				},
			}),
		{
			onSuccess: (data) => {
				const initialTerm = head(data);
				setActiveTerm(initialTerm);
			},
		}
	);

	const setActiveTerm = useManager((state) => state.setActiveTerm);
	const activeTerm = useManager((state) => state.activeTerm);

	const activeNamespace = useManager((state) => state.namespace);
	const setActiveNamespace = useManager((state) => state.setActiveNamespace);

	const chunks = splitBlockTermsByNamespace(terms);

	const availableNamespaces = Object.keys(chunks)
		.filter((namespace) => {
			// Excluding empty namespaces.
			return chunks[namespace].length === 0 ? false : true;
		})
		.map((namespace) => {
			return {
				label: capitalize(namespace),
				value: namespace,
			};
		});

	const namespacedTerms = get(chunks, activeNamespace, []);

	const availableTerms = namespacedTerms?.map((term) => {
		return {
			label: term.name,
			value: term.id,
		};
	});

	return (
		<div className="gsm-sidebar">
			{availableNamespaces.length > 1 && (
				<SelectControl
					label={__('Namespace', 'gutenberghub-styles-manager')}
					value={activeNamespace}
					options={availableNamespaces}
					onChange={setActiveNamespace}
				/>
			)}

			<SelectControl
				value={activeTerm?.id.toString()}
				// @ts-ignore
				options={availableTerms}
				className="gsm-select-box"
				label={__('Block', 'gutenberghub-styles-manager')}
				onChange={(newId) => {
					const selectedTerm = terms.find(
						(term) => term.id.toString() === newId
					);

					setActiveTerm(selectedTerm);
				}}
			/>

			<SearchControl
				value={searchQuery}
				onChange={setSearchQuery}
				placeholder={__('Search Block', 'gutenberghub-styles-manager')}
			/>

			<div className="gsm-menu-wrapper">
				{isLoading && <Spinner />}

				{!isLoading && (
					<>
						<MenuGroup className="gsm-menu-inner-wrapper">
							{namespacedTerms.map((term) => {
								const isActive = term.slug === activeTerm?.slug;
								const isFiltered = isEmpty(searchQuery)
									? true
									: term?.name
											.toLowerCase()
											.indexOf(
												searchQuery.toLowerCase()
											) !== -1;

								return (
									isFiltered && (
										<MenuItem
											key={term.id}
											isPressed={isActive}
											shortcut={term.count.toString()}
											onClick={() => setActiveTerm(term)}
										>
											{term.name}
										</MenuItem>
									)
								);
							})}
						</MenuGroup>
					</>
				)}
			</div>
		</div>
	);
}

export default Sidebar;
