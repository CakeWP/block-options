/**
 * Internal dependencies
 */
// import Edit from './components/edit';
// import icon from './icon';
import transforms from './transforms';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Block constants
 */
const name = 'lorem';
const icon = 'admin-tools';

const title = __( 'Lorem Dev Tool', 'block-options' );

const blockAttributes = {
	items: {
		type: 'number',
		default: 1,
	},
};

const settings = {

	title,

	description: __( 'Create lorem ipsum placeholder paragraph.', 'block-options' ),

	attributes: blockAttributes,

	supports: {
		inserter: false,
	},

	transforms,

	edit() {
		return null;
	},

	save() {
		return null;
	},
};

export { name, title, icon, settings };
