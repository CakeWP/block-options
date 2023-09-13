import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import useLibrary from '../stores/library';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { isEmpty, get } from 'lodash';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { Button, Spinner } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';
import { parse } from '@wordpress/blocks';
import getTemplates from '../services/get-templates';
import LibraryNoTemplateFound from './library-no-template-found';

function LibraryTemplates( props ) {

	const queryClient = useQueryClient();

	const connectionId = useLibrary( ( state ) => state.activeConnection );
	const activeCategory = useLibrary( ( state ) => state.activeCategory );
	const setVisible = useLibrary( ( state ) => state.setVisible );

	const searchQuery = useLibrary( ( state ) => state.search );

	const {
		data,
		isLoading,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useInfiniteQuery(
		[ 'templates', searchQuery, connectionId, activeCategory ],
		( { pageParam, signal } ) =>
			getTemplates(
				connectionId,
				searchQuery.split( ' ' ),
				activeCategory,
				pageParam,
				signal
			),
		{
			retry: false,
			useErrorBoundary: true,
			refetchOnMount: false,
			enabled: ! isEmpty( connectionId ),
			getNextPageParam: ( lastPageResponse, allPages ) => {
				const currentPage = allPages.length;

				return currentPage < lastPageResponse.totalPages
					? currentPage + 1
					: undefined;
			},
		}
	);

	useEffect(() => {
		return () => {
			queryClient.cancelQueries([ 'templates', searchQuery, connectionId, activeCategory ]);
		}
	}, [])

	const { insertBlocks } = useDispatch( 'core/block-editor' );
	const { createSuccessNotice } = useDispatch( 'core/notices' );

	const cloudIcon = get( props, 'connection.cloudIcon', null );

	const pages = get( data, 'pages', [] );
	const hasData = pages.length > 0;

	if ( isLoading ) {
		return <Spinner />
	}

	return (
		<>
			<div className="gutenberghub-template-library-grid">
				<ResponsiveMasonry
					columnsCountBreakPoints={ {
						350: 1,
						750: 2,
						900: 3,
					} }
				>
					<Masonry gutter="15px">
						{ pages.map( ( page ) => {
							const templates = get( page, 'data', [] );

							return templates?.map( ( template, index ) => {
								const screenshot = get(
									template,
									'terra-featured-image',
									''
								);

								const shortcode = get(
									template,
									'terra-shortcode',
									''
								);

								const handleInsert = () => {
									const blocks = parse( shortcode );
									insertBlocks( blocks );
									setVisible( false );

									createSuccessNotice(
										__(
											'Template inserted successfully!',
											'gutenberghub-template-library'
										),
										{
											type: 'snackbar',
										}
									);
								};

								return (
									<div
										className="gutenberghub-template-library-item"
										key={ index }
									>
										<Button onClick={ handleInsert }>
											<img
												src={ screenshot }
												width="100%"
											/>
											{ ! isEmpty( cloudIcon ) ? (
												<img
													className="gutenberghub-template-library-featured-logo-image"
													src={ cloudIcon }
												/>
											) : null }
										</Button>
										<div className="gutenberghub-template-library-title-wrap">
											<h3>
												{ decodeEntities(
													template.title.rendered
												) }
											</h3>
										</div>
									</div>
								);
							} );
						} ) }
					</Masonry>
				</ResponsiveMasonry>

				{ hasNextPage && (
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginTop: 10,
						} }
					>
						<Button
							variant="primary"
							onClick={ fetchNextPage }
							disabled={ isFetchingNextPage }
							isBusy={ isFetchingNextPage }
						>
							{ __(
								'Load More',
								'gutenberghub-template-library'
							) }
						</Button>
					</div>
				) }

				{ ! hasData && ! isLoading && <LibraryNoTemplateFound /> }
			</div>
		</>
	);
}

export default LibraryTemplates;
