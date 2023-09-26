// @ts-ignore
import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';

import edit from './edit';
import save from './save';

import { brush } from '@wordpress/icons';

import './extensions/enforce-template-visibility';
import './extensions/dashboard-button';

registerBlockType(metadata, {
	icon: brush,
	apiVersion: 2,
	edit,
	save,
});
