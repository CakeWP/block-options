/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { Fragment } = wp.element;
const { InspectorControls, FontSizePicker, withColors, PanelColorSettings } = wp.blockEditor;
const { PanelBody, withFallbackStyles } = wp.components;

const applyFallbackStyles = withFallbackStyles((node, ownProps) => {
	const { backgroundColor } = ownProps.attributes;
	const editableNode = node.querySelector('[contenteditable="true"]');
	//verify if editableNode is available, before using getComputedStyle.
	const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
	return {
		fallbackBackgroundColor: backgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor,
	};
});

const ColumnColorSettings = (props) => {
	const {
		backgroundColor,
		setBackgroundColor,
		isTextColorDisabled,
	} = props;

	return (
		<Fragment>
			<InspectorControls>
				{!isTextColorDisabled && (
					<PanelColorSettings
						title={__('Color Settings', 'block-options')}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __('Background Color', 'block-options'),
							},
						]}
					>
					</PanelColorSettings>
				)}
			</InspectorControls>
		</Fragment>
	);
};

export default compose([
	withSelect((select) => {
		return {
			isFontSizeDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitListBlockFontSizeOptions'),
			isTextColorDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitListBlockTextColorOptions'),
		};
	}),
	withColors({ backgroundColor: 'color' }),
	applyFallbackStyles,
])(ColumnColorSettings);
