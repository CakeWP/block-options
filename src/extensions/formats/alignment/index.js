/**
 * Internal dependencies
 */
import './attributes';
import AlignmentControl from './components/control';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/alignment';

export const alignment = {
	name,
	title: __( 'Change Caption Alignment', 'block-options' ),
	tagName: 'figcaption',
	className: null,
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<AlignmentControl name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes } />
			</Fragment>
		);
	},
};
