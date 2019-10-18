/**
 * Internal dependencies
 */
import Edit from './components/edit';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/nbsp';

export const nbsp = {
	name,
	title: __( 'Nonbreaking Space', 'block-options' ),
	tagName: 'span',
	className: 'nbsp',
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<Edit name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes } />
			</Fragment>
		);
	},
};
