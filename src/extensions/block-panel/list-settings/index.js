/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, FontSizePicker, withFontSizes, withColors, PanelColorSettings } = wp.blockEditor;
const { PanelBody, withFallbackStyles } = wp.components;

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { fontSize, customFontSize, textColor } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	//verify if editableNode is available, before using getComputedStyle.
	const computedStyles = editableNode ? getComputedStyle( editableNode ) : null;
	return {
		fallbackTextColor: textColor || ! computedStyles ? undefined : computedStyles.color,
		fallbackFontSize: fontSize || customFontSize || ! computedStyles ? undefined : parseInt( computedStyles.fontSize ) || undefined,
	};
} );

const ListTextSettings = ( props ) => {
	const {
		fallbackFontSize,
		fontSize,
		setFontSize,
		textColor,
		setTextColor,
	} = props;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={ __( 'Text Settings', 'block-options' ) }
					initialOpen={ false }
					className="editorskit-panel"
				>
					<FontSizePicker
						fallbackFontSize={ fallbackFontSize }
						value={ fontSize.size }
						onChange={ setFontSize }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings', 'block-options' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __( 'Text Color', 'block-options' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		</Fragment>
	);
};

export default compose( [
	withColors( { textColor: 'color' } ),
	withFontSizes( 'fontSize' ),
	applyFallbackStyles,
] )( ListTextSettings );
