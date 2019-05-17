/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './styles/editor.scss';
import InlineColorsToolbar from './controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;


/**
 * Block constants
 */
const name = 'editorskit/color';

export const textColor = {
	name,
	title: __( 'Text Color' ),
	tagName: 'span',
	className: 'has-inline-color',
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange, activeAttributes } ) {

		return (
			<Fragment>
				<InlineColorsToolbar name={ name } isActive={ isActive } value={ value } onChange={ onChange } activeAttributes={ activeAttributes }  />
			</Fragment>
		);

	},
};
