const { __ } = wp.i18n;

const LogicTitle = () => {
	if( typeof varblockOpts.logic !== 'undefined' && varblockOpts.logic == 'activate'  ){
		return(
			<h3>{ __( 'Display Logic' ) }</h3>
		);
	}
}

export default LogicTitle;