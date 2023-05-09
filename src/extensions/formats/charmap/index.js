/**
 * Internal dependencies
 */
import CharacterMap from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/charmap';

export const charmap = {
	name,
	title: __( 'Special Characters', 'block-options' ),
	tagName: 'span',
	className: 'editorskit-charmap',
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<CharacterMap
					name={ name }
					isActive={ isActive }
					value={ value }
					onChange={ onChange }
					activeAttributes={ activeAttributes }
				/>
			</Fragment>
		);
	},
};
