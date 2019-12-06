/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { ToggleControl } = wp.components;

const FullWidthToggle = ( props ) => {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		isFullWidth,
	} = attributes;

	return (
		<Fragment>
			<ToggleControl
				label={ __( 'Full Width Display', 'block-options' ) }
				checked={ !! isFullWidth }
				onChange={ () => setAttributes( { isFullWidth: ! isFullWidth } ) }
				help={ isFullWidth ? __( 'Full width display is enabled.', 'block-options' ) : __( 'Toggle to display this block\'s as full width.', 'block-options' ) }
			/>
		</Fragment>
	);
};

export default FullWidthToggle;
