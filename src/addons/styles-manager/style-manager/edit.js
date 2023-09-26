import React from 'react';
import {
	InspectorControls,
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import { TabPanel, PanelBody, Tip } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import {
	getBlockType,
	getBlockFromExample,
	createBlock,
} from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import CodeEditor from './components/code-editor';

import { get, has } from 'lodash';
import { useSelect, useDispatch } from '@wordpress/data';

function edit(props) {
	const { blockName, taxonomy } = props.attributes;

	const { css } = useSelect((select) => {
		const postMeta = select('core/editor').getEditedPostAttribute('meta');

		return {
			selectedBlock:
				select('core/editor').getEditedPostAttribute('gsm_block'),
			css: get(postMeta, 'gsm_css', ''),
		};
	}, []);

	const { editPost } = useDispatch('core/editor');
	const { replaceInnerBlocks } = useDispatch('core/block-editor');

	useEffect(() => {
		const blockType = getBlockType(blockName);
		const hasExample = has(blockType, 'example');

		const exampleBlock = hasExample
			? getBlockFromExample(blockName, blockType?.example)
			: createBlock(blockName);

		replaceInnerBlocks(props.clientId, [exampleBlock]);
	}, [blockName]);

	useEffect(() => {
		editPost({
			gsm_block: [Number(taxonomy)],
		});
	}, [taxonomy]);

	const handleCodeChange = (lang, newCode) => {
		const metaKey = 'gsm_'.concat(lang);
		editPost({
			meta: {
				[metaKey]: newCode,
			},
		});
	};

	const selector = '.wp-block-' + blockName.split('/')[1];
	const processedCSS = css.replace(/(selector)/g, selector);
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<div>
				<InnerBlocks />
				<style
					dangerouslySetInnerHTML={{ __html: processedCSS }}
				></style>
			</div>

			<InspectorControls>
				<div>
					<CodeEditor
						mode="css"
						initialValue={css}
						onChange={(newCode) => handleCodeChange('css', newCode)}
					/>
					<PanelBody>
						<Tip>
							{__(
								'Use "selector" for selecting the block element.',
								'gutenberghub-styles-manager'
							)}
						</Tip>
					</PanelBody>
				</div>
			</InspectorControls>
		</div>
	);
}

export default edit;
