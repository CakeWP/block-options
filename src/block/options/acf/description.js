const { __ } = wp.i18n;

const ACFDesc = ( HideDesc ) => {
	if( typeof varblockOpts.acf !== 'undefined' && varblockOpts.acf == 'activate' && !HideDesc  ){
		return(
			<p>{ __( 'Restrict block visibility based on ACF field and conditions.' ) }</p>
		);
	}
}

export default ACFDesc;