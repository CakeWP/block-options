/**
 * External dependencies
 */
import { filter, isArray } from 'lodash';

/**
 * WordPress dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { TextControl } from '@wordpress/components';
import { getBlockTypes } from '@wordpress/blocks';
import {useState} from "@wordpress/element"
/**
 * Internal dependencies
 */
import BlockManagerCategory from './category';

function BlockManager({
	blockTypes,
	categories,
	hasBlockSupport,
	isMatchingSearchTerm,
	numberOfHiddenBlocks,
}) {
	const [ search, setState ]= useState( '' );

	let filteredBlockTypes = blockTypes.filter((blockType) => (
		hasBlockSupport(blockType, 'inserter', true) &&
		(!search || isMatchingSearchTerm(blockType, search)) &&
		!blockType.parent
	));

	return (
		<div className="edit-post-manage-blocks-modal__content">
			<TextControl
				type="search"
				label={__('Search for a block', 'block-options')}
				value={search}
				onChange={(nextSearch) => setState(
					 nextSearch,
				)}
				className="edit-post-manage-blocks-modal__search"
			/>
			{!!numberOfHiddenBlocks && (
				<div className="edit-post-manage-blocks-modal__disabled-blocks-count">
					{
						sprintf(
							_n(
								'%1$d block is disabled.',
								'%1$d blocks are disabled.',
								numberOfHiddenBlocks
							),
							numberOfHiddenBlocks
						)
					}
				</div>
			)}
			<div
				tabIndex="0"
				role="region"
				aria-label={__('Available block types', 'block-options')}
				className="edit-post-manage-blocks-modal__results"
			>
				{filteredBlockTypes.length === 0 && (
					<p className="edit-post-manage-blocks-modal__no-results">
						{__('No blocks found.', 'block-options')}
					</p>
				)}
				{categories.map((category) => (
					<BlockManagerCategory
						key={category.slug}
						category={category}
						blockTypes={filter(filteredBlockTypes, {
							category: category.slug,
						})}
					/>
				))}
			</div>
		</div>
	);
}

export default compose([
	withSelect((select) => {
		const {
			getCategories,
			hasBlockSupport,
			isMatchingSearchTerm,
		} = select('core/blocks');
		const { getPreference } = select('core/edit-post');
		const hiddenBlockTypes = getPreference('hiddenBlockTypes');
		const numberOfHiddenBlocks = isArray(hiddenBlockTypes) && hiddenBlockTypes.length;

		return {
			blockTypes: getBlockTypes(),
			categories: getCategories(),
			hasBlockSupport,
			isMatchingSearchTerm,
			numberOfHiddenBlocks,
		};
	}),
])(BlockManager);
