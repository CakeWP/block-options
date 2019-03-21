const { __ } = wp.i18n;
const { Fragment } = wp.element; 
const { SelectControl, CheckboxControl, TextareaControl } = wp.components; 

const ACFFields = ( props ) => {
	var attributes = props.attributes;
	if( typeof varblockOpts.acf !== 'undefined' && varblockOpts.acf == 'activate' ){

		var acf_fields = [{
    		label : __( 'Select Field' ),
		    value : ''
    	}];

    	if( typeof props.acf != "undefined" ){
			var acf_flds = props.acf;
			for( var acf_fld in acf_flds ){
				acf_fields.push({
					label : acf_flds[ acf_fld ],
		            value : acf_fld
				});
			}
		}

		return(
			<Fragment>
				<SelectControl
					label={ __( 'Select Visibility' ) }
					value={ ( typeof attributes.blockOpts.acf_visibility !== 'undefined' && attributes.blockOpts.acf_visibility != '' ) ? attributes.blockOpts.acf_visibility : '' }
					options={ [
		            	{
		            		label : __( 'Select Visibility Option' ),
		            		value : 'none'
		            	},
		            	{
		            		label : __( 'Hide when Condition\'s met' ),
		            		value : 'hide'
		            	},
		            	{
		            		label : __( 'Show when Condition\'s met' ),
		            		value : 'show'
		            	}
		            ] }
					onChange={ ( n ) => {
						//delete first
		            	delete attributes.blockOpts.acf_visibility;

		            	var blockOptions = Object.assign( { acf_visibility: n }, attributes.blockOpts );

		            	//save props
		                props.setAttributes( { blockOpts: blockOptions } );
					} }
				/>

				<SelectControl
					label={ __( 'Select ACF Field' ) }
					value={ ( typeof attributes.blockOpts.acf_field !== 'undefined' && attributes.blockOpts.acf_field != '' ) ? attributes.blockOpts.acf_field : '' }
					options={ acf_fields }
					onChange={ ( n ) => {
						//delete first
		            	delete attributes.blockOpts.acf_field;

		            	var blockOptions = Object.assign( { acf_field: n }, attributes.blockOpts );

		            	//save props
		                props.setAttributes( { blockOpts: blockOptions } );
					} }
				/>

				<SelectControl
					label={ __( 'Select Visibility' ) }
					value={ ( typeof attributes.blockOpts.acf_condition !== 'undefined' && attributes.blockOpts.acf_condition != '' ) ? attributes.blockOpts.acf_condition : '' }
					options={ [
		            	{
		            		label : __( 'Select Condition' ),
		            		value : 'none'
		            	},
		            	{
		            		label : __( 'Is Equal to' ),
		            		value : 'equal'
		            	},
		            	{
		            		label : __( 'Is Not Equal to' ),
		            		value : 'not_equal'
		            	},
		            	{
		            		label : __( 'Contains' ),
		            		value : 'contains'
		            	},
		            	{
		            		label : __( 'Does Not Contain' ),
		            		value : 'not_contains'
		            	},
		            	{
		            		label : __( 'Is Empty' ),
		            		value : 'empty'
		            	},
		            	{
		            		label : __( 'Is Not Empty' ),
		            		value : 'not_empty'
		            	}
		            ] }
					onChange={ ( n ) => {
						//delete first
		            	delete attributes.blockOpts.acf_condition;

		            	var blockOptions = Object.assign( { acf_condition: n }, attributes.blockOpts );

		            	//save props
		                props.setAttributes( { blockOpts: blockOptions } );
					} }
				/>
				<TextareaControl
					label={ __( 'Conditional Value' ) }
					rows="3"
					value={ attributes.blockOpts.acf_value }
					onChange={ ( n ) => {
						delete attributes.blockOpts.acf_value;
		            	var blockOptions = Object.assign( { acf_value: n }, attributes.blockOpts );
		                props.setAttributes( { blockOpts: blockOptions } );
					} }
				/>
			</Fragment>
		);
	}
}

export default ACFFields;