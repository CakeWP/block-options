/**
 * Internal dependencies
 */
import ClearFormatting from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Block constants
 */
const name = 'editorskit/clear-formatting';

export const clear = {
	name,
	title: __( 'Clear Formatting', 'block-options' ),
	tagName: 'span',
	className: 'editorskit-clear-formatting',
	edit( { isActive, value, onChange, activeAttributes } ) {
		return (
			<Fragment>
				<ClearFormatting name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes } />
			</Fragment>
		);
	},
};
