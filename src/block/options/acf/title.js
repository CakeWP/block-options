const { __ } = wp.i18n;

const ACFTitle = () => {
	if( typeof varblockOpts.acf !== 'undefined' && varblockOpts.acf == 'activate'  ){
		return(
			<h3>{ __( 'Advanced Custom Fields' ) }</h3>
		);
	}
}

export default ACFTitle;