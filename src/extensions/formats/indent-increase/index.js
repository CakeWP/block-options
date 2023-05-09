/**
 * Internal dependencies
 */
import IncreaseIndent from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/indentincrease';

export const increaseIndent = {
	name,
	title: __( 'Indent Increase', 'block-options' ),
	tagName: 'p',
	className: 'ek-indent-increase',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<IncreaseIndent name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes } />
			</Fragment>
		);
	},
};
