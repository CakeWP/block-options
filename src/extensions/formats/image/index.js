/**
 * Internal dependencies
 */
import ImageControl from './components/controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/image';

export const caption = {
	name: 'editorskit/image',
	title: __('Inline Image Caption', 'block-options'),
	tagName: 'span',
	className: 'ek-img-caption',
	attributes: {
		className: 'class',
	},
	edit() {
		return null;
	},
};

export const image = {
	name,
	title: __('Add Inline Image', 'block-options'),
	keywords: [__('photo', 'block-options'), __('media', 'block-options')],
	tagName: 'span',
	className: 'ek-img',
	attributes: {
		className: 'class',
	},
	edit({ isActive, value, onChange, activeAttributes, isObjectActive, activeObjectAttributes }) {
		return (
			<Fragment>
				<ImageControl name={name} isActive={isActive} value={value} onChange={onChange} isObjectActive={isObjectActive} activeObjectAttributes={activeObjectAttributes } activeAttributes={activeAttributes} />
			</Fragment>
		);
	},
};
