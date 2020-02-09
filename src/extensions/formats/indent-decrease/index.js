/**
 * Internal dependencies
 */
import DecreaseIndent from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/indentdecrease';

export const decreaseIndent = {
	name,
	title: __( 'Indent Decrease', 'block-options' ),
	tagName: 'p',
	className: 'ek-indent-decrease',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<DecreaseIndent name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes } />
			</Fragment>
		);
	},
};
