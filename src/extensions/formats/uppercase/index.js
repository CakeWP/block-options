/**
 * Internal dependencies
 */
import UppercaseControl from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;


/**
 * Block constants
 */
const name = 'editorskit/uppercase';

export const uppercase = {
	name,
	title: __( 'Uppercase' ),
	tagName: 'span',
	className: 'uppercase',
	edit( { isActive, value, onChange, activeAttributes } ) {

		return (
			<Fragment>
				<UppercaseControl name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes }  />
			</Fragment>
		);

	},
};