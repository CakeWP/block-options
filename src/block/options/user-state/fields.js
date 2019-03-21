const { __ } = wp.i18n;
const { Fragment } = wp.element; 
const { SelectControl, CheckboxControl } = wp.components; 

const UserStateFields = ( props ) => {
	var attributes = props.attributes;
	if( typeof varblockOpts.state !== 'undefined' && varblockOpts.state == 'activate' ){
		return(
			<Fragment>
				<SelectControl
					label={ __( 'Select Login State' ) }
					value={ ( typeof attributes.blockOpts.state !== 'undefined' && attributes.blockOpts.state != '' ) ? attributes.blockOpts.state : '' }
					options={ [
		            	{
		            		label : __( 'Select Visibility Option' ),
		            		value : 'none'
		            	},
		            	{
		            		label : __( 'Show only for Logged-in Users' ),
		            		value : 'in'
		            	},
		            	{
		            		label : __( 'Show only for Logged-out Users' ),
		            		value : 'out'
		            	}
		            ] }
					onChange={ ( n ) => {
						//delete first
		            	delete attributes.blockOpts.state;

		            	var blockOptions = Object.assign( { state: n }, attributes.blockOpts );

		            	//save props
		                props.setAttributes( { blockOpts: blockOptions } );
		            } }
				/>
			</Fragment>
		);
	}
}

export default UserStateFields;