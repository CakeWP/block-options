const { __ } = wp.i18n;

const UserStateTitle = () => {
	if( typeof varblockOpts.state !== 'undefined' && varblockOpts.state == 'activate'  ){
		return(
			<h3>{ __( 'User Login State' ) }</h3>
		);
	}
}

export default UserStateTitle;