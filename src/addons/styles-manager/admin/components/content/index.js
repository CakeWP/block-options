import React from 'react';

import { isNull, isEmpty } from 'lodash';
import { __, sprintf } from '@wordpress/i18n';
import { Button, Spinner } from '@wordpress/components';

import Sidebar from '../sidebar';
import NoTermSelected from './no-term-selected';
import Post from './post';
import useManager from '../../store/manager.store';

import getPosts from '../../services/get-posts';
import { useInfiniteQuery } from 'react-query';

import NoStyleFound from './no-styles-found';

const PER_PAGE = 5;

function Content() {
	const activeTerm = useManager( ( state ) => state.activeTerm );
	const hasActiveTerm = ! isNull( activeTerm );

	const searchQuery = useManager( ( state ) => state.search );
	const hasSearchQuery = ! isEmpty( searchQuery );

	const {
		isLoading,
		data,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		status,
		refetch,
	} = useInfiniteQuery(
		[ 'posts', searchQuery, activeTerm?.id ],
		( { pageParam } ) =>
			getPosts( {
				postType: 'gsm_styles',
				params: {
					search: searchQuery,
					page: pageParam || 1,
					per_page: PER_PAGE,
					gsm_block: activeTerm?.id?.toString?.(),
				},
			} ),
		{
			retry: false,
			getNextPageParam: ( lastPageResponse, allPages ) => {
				const currentPage = allPages.length;
				return currentPage < lastPageResponse.totalPages
					? currentPage + 1
					: undefined;
			},
		}
	);

	const getNewPostLink = () => {
		let newPost = new URL( gutenberghubStylesManager?.createStyle );
		newPost.searchParams.append( 'tax', activeTerm.id.toString() );
		newPost.searchParams.append( 'block', activeTerm.slug );
		return newPost.toString();
	};

	return (
		<div className="gsm-wrap gsm-content">
			<Sidebar />

			{ status === 'error' ? (
				<div>
					<p>
						<span>
							{ __(
								'Something Went Wrong Please ',
								'gutenberghub-styles-manager'
							) }
						</span>
						<a href="#" onClick={ () => refetch() }>
							{ __( 'try again', 'gutenberghub-styles-manager' ) }
						</a>
					</p>
				</div>
			) : (
				<div className="gsm-styles">
					{ hasActiveTerm && (
						<>
							<div className="gsm-styles-header">
								{ hasSearchQuery ? (
									<h3>
										{ sprintf(
											__(
												'Search Results for "%s"',
												'gutenberghub-styles-manager'
											),
											searchQuery
										) }
									</h3>
								) : (
									<h3>Block: { activeTerm?.name }</h3>
								) }
								<Button
									variant="primary"
									target="_blank"
									href={ getNewPostLink() }
								>
									{ sprintf(
										__(
											'Create new "%s" Block Style',
											'gutenberghub-styles-manager'
										),
										activeTerm.name
									) }
								</Button>
							</div>
							{ ! isLoading && (
								<>
									<div className="gsm-styles-grid">
										{ data.pages.map( ( data ) => {
											const posts = data.data;

											return (
												posts &&
												posts.map( ( post, index ) => {
													return (
														<Post
															key={ index }
															post={ post }
														/>
													);
												} )
											);
										} ) }
									</div>
									{ hasNextPage && (
										<div
											style={ {
												display: 'flex',
												margin: '20px 0',
												justifyContent: 'center',
											} }
										>
											<Button
												isBusy={ isFetchingNextPage }
												variant="primary"
												onClick={ () =>
													fetchNextPage()
												}
											>
												{ __(
													'Load More',
													'gutenberghub-styles-manager'
												) }
											</Button>
										</div>
									) }
								</>
							) }
							{ isLoading && <Spinner /> }
						</>
					) }
					{ ! isLoading && isEmpty( data?.pages[ 0 ]?.data ) && (
						<NoStyleFound />
					) }
				</div>
			) }
		</div>
	);
}

export default Content;
