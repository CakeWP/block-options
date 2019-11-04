/**
 * External dependencies
 */
import { find, get } from 'lodash';

function applyStyle( attributes, blockName, props = {} ) {
	const {
		fontSizes,
	} = props;

	const {
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
	} = attributes;

	const style = {};

	if ( typeof fontSize !== 'undefined' ) {
		const fontSizeObject = find( fontSizes, { slug: fontSize } );
		if ( typeof fontSizeObject !== 'undefined' && typeof fontSizeObject.size !== 'undefined' ) {
			style.fontSize = fontSizeObject.size + 'px';
		}
	} else if ( typeof customFontSize !== 'undefined' ) {
		style.fontSize = customFontSize + 'px';
	}

	if ( typeof textColor !== 'undefined' ) {
		const colors = get( wp.data.select( 'core/block-editor' ).getSettings(), [ 'colors' ], [] );
		if ( typeof colors !== 'undefined' ) {
			const textColorValue = find( colors, { slug: textColor } );
			if ( typeof textColorValue !== 'undefined' && typeof textColorValue.color !== 'undefined' ) {
				style.color = textColorValue.color;
			}
		}
	} else if ( typeof customTextColor !== 'undefined' ) {
		style.color = customTextColor;
	}

	return style;
}

export default applyStyle;
