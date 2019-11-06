/**
 * External dependencies
 */
import { find } from 'lodash';

function applyStyle( attributes, blockName, props = {} ) {
	const {
		fontSizes,
		colors,
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
