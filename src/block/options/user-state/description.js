const { __ } = wp.i18n;

const UserStateDesc = ( HideDesc ) => {
	if( typeof varblockOpts.state !== 'undefined' && varblockOpts.state == 'activate' && !HideDesc  ){
		return(
			<p>{ __( 'Restrict blocks visibility for logged-in and logged-out users. A simpler solution rather than using Display Logic feature.' ) }</p>
		);
	}
}

export default UserStateDesc;