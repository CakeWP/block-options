const { __ } = wp.i18n;
const { Fragment } = wp.element; 
const { SelectControl, TextareaControl } = wp.components; 

const LogicFields = ( props ) => {
	var attributes = props.attributes;
	if( typeof varblockOpts.logic !== 'undefined' && varblockOpts.logic == 'activate' ){
		return(
			<Fragment>
				<TextareaControl
					rows="3"
					value={ attributes.blockOpts.logic }
					onChange={ ( n ) => {
						delete attributes.blockOpts.logic;
		            	var blockOptions = Object.assign( { logic: n }, attributes.blockOpts );
		                props.setAttributes( { blockOpts: blockOptions } );
					} }
				/>
			</Fragment>
		);
	}
}

export default LogicFields;