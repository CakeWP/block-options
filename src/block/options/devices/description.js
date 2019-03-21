const { __ } = wp.i18n;

const DevicesDesc = ( HideDesc ) => {
	if( typeof varblockOpts.devices !== 'undefined' && varblockOpts.devices == 'activate' && !HideDesc  ){
		return(
			<p>{ __( 'Show or hide specific blocks on your selected devices.' ) }</p>
		);
	}
}

export default DevicesDesc;