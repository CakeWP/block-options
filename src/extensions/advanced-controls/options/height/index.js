/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { ToggleControl } = wp.components;

const VerticalHeightToggle = ( props ) => {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		isHeightFullScreen,
	} = attributes;

	return (
		<Fragment>
			<ToggleControl
				label={ __( 'Full Screen Height', 'block-options' ) }
				checked={ !! isHeightFullScreen }
				onChange={ () => setAttributes( { isHeightFullScreen: ! isHeightFullScreen } ) }
				help={ isHeightFullScreen ? __( 'Full screen height is enabled.', 'block-options' ) : __( 'Toggle to display this block\'s height full screen of the browser viewport.', 'block-options' ) }
			/>
		</Fragment>
	);
};

export default VerticalHeightToggle;
