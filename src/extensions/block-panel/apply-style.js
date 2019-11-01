/**
 * External dependencies
 */
import { find } from 'lodash';

function applyStyle( attributes, blockName, props = {} ) {
	const {
		fontSizes,
	} = props;

	const {
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

	return style;
}

export default applyStyle;
