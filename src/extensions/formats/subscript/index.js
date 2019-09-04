/**
 * Internal dependencies
 */
import SubscriptControl from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/subscript';

export const subscript = {
	name,
	title: __( 'Subscript', 'block-options' ),
	tagName: 'sub',
	className: null,
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<SubscriptControl name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes } />
			</Fragment>
		);
	},
};
