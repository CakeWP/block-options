/**
 * Internal dependencies
 */

import MarkdownControl from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/markdown';

export const markdown = {
	name,
	title: __( 'Underline', 'block-options' ),
	tagName: 'p',
	className: 'editorskit-markdown',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<MarkdownControl name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes } />
			</Fragment>
		);
	},
};
