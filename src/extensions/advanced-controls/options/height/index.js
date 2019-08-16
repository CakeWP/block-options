/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch, withSelect } = wp.data;
const { Fragment, Component } = wp.element; 
const { ToggleControl, TextareaControl } = wp.components; 

const VerticalHeightToggle = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const {
		isHeightFullScreen,
	} = attributes;
	
	return(
		<Fragment>
			<ToggleControl
				label={ __( 'Full Screen Height' ) }
				checked={ !! isHeightFullScreen }
				onChange={ () => setAttributes( { isHeightFullScreen: ! isHeightFullScreen } ) }
				help={ !! isHeightFullScreen ? __( 'Full screen height is enabled.' ) : __( 'Toggle to display this block\'s height full screen of the browser viewport.' ) }
			/>
		</Fragment>
	);
}

export default VerticalHeightToggle;