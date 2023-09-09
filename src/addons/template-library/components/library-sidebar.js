import React from 'react';
import useLibrary from '../stores/library';
import { useQuery } from 'react-query';
import getCategories from '../services/get-categories';

import { isEmpty, get } from 'lodash';
import {
	Spinner,
	MenuGroup,
	MenuItem,
	SearchControl,
	SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';

function LibrarySidebar() {
	const activeConnectionId = useLibrary(
		( state ) => state.activeConnection
	);

	const currentSearchQuery = useLibrary( ( state ) => state.search );
	const setSearchQuery = useLibrary( ( state ) => state.setSearch );

	const activeCategory = useLibrary( ( state ) => state.activeCategory );
	const setActiveCategory = useLibrary(
		( state ) => state.setActiveCategory
	);

	const { data: categories, isLoading, isError } = useQuery(
		[ activeConnectionId, 'categories' ],
		() => getCategories( activeConnectionId ),
		{
			useErrorBoundary: true,
			enabled: ! isEmpty( activeConnectionId ),
		}
	);

	if ( isLoading ) {
		return (
			<div className="gutenberghub-template-library-sidebar">
				<Spinner />
			</div>
		);
	}

	const categoryOpt = categories
		?.filter( ( category ) => {
			const scopedCount = get( category, 'terra-scoped-count', 1 );
			const isScoped = scopedCount > 0;

			return isScoped;
		} )
		.map( ( category ) => {
			return {
				label: category?.name,
				value: category?.id,
			};
		} );

	return (
		<div className="gutenberghub-template-library-sidebar">
			<SearchControl
				value={ currentSearchQuery }
				onChange={ setSearchQuery }
			/>
			<MenuGroup className="gutenberghub-template-library-menu-wrap">
				<MenuItem
					isPressed={ activeCategory === 'all' }
					onClick={ () => setActiveCategory( 'all' ) }
				>
					{ __( 'All', 'gutenberghub-template-library' ) }
				</MenuItem>
				{ categories?.map( ( category, index ) => {
					const scopedCount = get(
						category,
						'terra-scoped-count',
						1
					);
					const isScoped = scopedCount > 0;
					const isActive = activeCategory === category?.id;

					if ( ! isScoped ) {
						return null;
					}

					return (
						<MenuItem
							key={ index }
							isPressed={ isActive }
							onClick={ () => setActiveCategory( category?.id ) }
						>
							{ decodeEntities(category?.name) }
						</MenuItem>
					);
				} ) }
			</MenuGroup>

			<SelectControl
				className="gutenberghub-template-library-menu-select-control"
				value={ activeCategory }
				options={ [ { label: 'All', value: 'all' }, ...categoryOpt ] }
				onChange={ setActiveCategory }
			/>
		</div>
	);
}

export default LibrarySidebar;
