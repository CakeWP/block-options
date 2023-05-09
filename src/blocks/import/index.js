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

/**
 * Block constants
 */
const name = 'import';

const category = 'common';

const title = __( 'Import', 'block-options' );

const keywords = [
	__( 'import', 'block-options' ),
	__( 'download', 'block-options' ),
	__( 'migrate', 'block-options' ),
];

const blockAttributes = {
	file: {
		type: 'object',
	},
};

const settings = {

	title,

	description: __( 'Import blocks exported using EditorsKit plugin.', 'block-options' ),

	keywords,

	attributes: blockAttributes,

	supports: {
		align: true,
		alignWide: false,
		alignFull: false,
		customClassName: false,
		className: false,
		html: false,
	},

	transforms,

	edit: Edit,

	save() {
		return null;
	},
};

export { name, title, category, icon, settings };
