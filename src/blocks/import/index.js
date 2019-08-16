/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Edit from './components/edit';
import icon from './icon';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const { RichText, getColorClassName } = wp.editor;

/**
 * Block constants
 */
const name = 'import';

const title = __( 'Import' );

const keywords = [
	__( 'import' ),
	__( 'download' ),
	__( 'migrate' ),
];

const blockAttributes = {
	file: {
		type: 'object',
	},
};

const settings = {

	title,

	description: __( 'Provide contextual feedback messages.' ),

	keywords,

	attributes: blockAttributes,

	supports: {
		align: true,
		alignWide: false,
		alignFull: false,
	},

	transforms,

	edit: Edit,

	save() {
		return null;
	},
};

export { name, title, icon, settings };
