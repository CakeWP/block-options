const { __ } = wp.i18n;

const LogicDesc = ( HideDesc ) => {
	if( typeof varblockOpts.logic !== 'undefined' && varblockOpts.logic == 'activate' && !HideDesc  ){
		return(
			<p>{ __( "Manage block visibility using valid PHP conditional tags. Please note that the display logic you introduce is EVAL'd directly. There is an optional filter 'block_options_logic_override' which you can use to bypass the EVAL with your own code if needed." ) }</p>
		);
	}
}

export default LogicDesc;