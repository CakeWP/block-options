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

export const image = {
	name,
	title: __('Add Inline Image', 'block-options'),
	keywords: [__('photo', 'block-options'), __('media', 'block-options')],
	object: true,
	tagName: 'img',
	className: 'ek-img',
	attributes: {
		className: 'class',
		style: 'style',
		url: 'src',
		alt: 'alt',
		title: 'title',
		width: 'width',
		height: 'height',
	},
	edit({ isActive, value, onChange, activeAttributes, isObjectActive, activeObjectAttributes }) {
		return (
			<Fragment>
				<ImageControl name={name} isActive={isActive} value={value} onChange={onChange} isObjectActive={isObjectActive} activeObjectAttributes={activeObjectAttributes } activeAttributes={activeAttributes} />
			</Fragment>
		);
	},
};
