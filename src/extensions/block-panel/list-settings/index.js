/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, FontSizePicker, withFontSizes } = wp.blockEditor;
const { PanelBody, withFallbackStyles } = wp.components;

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { fontSize, customFontSize } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	//verify if editableNode is available, before using getComputedStyle.
	const computedStyles = editableNode ? getComputedStyle( editableNode ) : null;
	return {
		fallbackFontSize: fontSize || customFontSize || ! computedStyles ? undefined : parseInt( computedStyles.fontSize ) || undefined,
	};
} );

const ListTextSettings = ( props ) => {
	const {
		fallbackFontSize,
		fontSize,
		setFontSize,
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
			</InspectorControls>
		</Fragment>
	);
};

export default compose( [
	withFontSizes( 'fontSize' ),
	applyFallbackStyles,
] )( ListTextSettings );
