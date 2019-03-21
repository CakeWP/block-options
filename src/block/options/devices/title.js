const { __ } = wp.i18n;

const DevicesTitle = () => {
	if( typeof varblockOpts.devices !== 'undefined' && varblockOpts.devices == 'activate'  ){
		return(
			<h3>{ __( 'Device Visibility' ) }</h3>
		);
	}
}

export default DevicesTitle;