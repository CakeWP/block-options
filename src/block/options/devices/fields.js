const { __ } = wp.i18n;
const { Fragment } = wp.element; 
const { SelectControl, CheckboxControl } = wp.components; 

const DevicesFields = ( props ) => {
	var attributes = props.attributes;
	if( typeof varblockOpts.devices !== 'undefined' && varblockOpts.devices == 'activate' ){
		return(
			<Fragment>
				<SelectControl
					label={ __( 'Show/Hide' ) }
					value={ ( typeof attributes.blockOpts.devices !== 'undefined' && attributes.blockOpts.devices != '' ) ? attributes.blockOpts.devices : '' }
					options={ [
		            	{
		            		label : __( 'Select Visibility Option' ),
		            		value : 'none'
		            	},
		            	{
		            		label : __( 'Hide on Checked Devices' ),
		            		value : 'hide'
		            	},
		            	{
		            		label : __( 'Show on Checked Devices' ),
		            		value : 'show'
		            	}
		            ] }
					onChange={ ( n ) => {
						//delete first
		            	delete attributes.blockOpts.devices;

		            	var blockOptions = Object.assign( { devices: n }, attributes.blockOpts );
		                props.setAttributes( { blockOpts: blockOptions } );
					} }
				/>
				<CheckboxControl 
					label={ __( 'Desktop' ) }
					checked={  ( typeof attributes.blockOpts.desktop !== 'undefined' && attributes.blockOpts.desktop == 'on' ) ? true : false }
					onChange={ ( n ) => {
							delete attributes.blockOpts.desktop;

			            	if( event.target.checked ){
			            		var blockOptions = Object.assign( { desktop: 'on' }, attributes.blockOpts );
			            	}else{
			            		var blockOptions = Object.assign( { desktop: 'off' }, attributes.blockOpts );
			            	}

			            	props.setAttributes( { blockOpts: blockOptions } );
						} }
				/>
				<CheckboxControl 
					label={ __( 'Tablet' ) }
					checked={  ( typeof attributes.blockOpts.tablet !== 'undefined' && attributes.blockOpts.tablet == 'on' ) ? true : false }
					onChange={ ( n ) => {
							delete attributes.blockOpts.tablet;

			            	if( event.target.checked ){
			            		var blockOptions = Object.assign( { tablet: 'on' }, attributes.blockOpts );
			            	}else{
			            		var blockOptions = Object.assign( { tablet: 'off' }, attributes.blockOpts );
			            	}

			            	props.setAttributes( { blockOpts: blockOptions } );
						} }
				/>
				<CheckboxControl 
					label={ __( 'Mobile' ) }
					checked={  ( typeof attributes.blockOpts.mobile !== 'undefined' && attributes.blockOpts.mobile == 'on' ) ? true : false }
					onChange={ ( n ) => {
							delete attributes.blockOpts.mobile;

			            	if( event.target.checked ){
			            		var blockOptions = Object.assign( { mobile: 'on' }, attributes.blockOpts );
			            	}else{
			            		var blockOptions = Object.assign( { mobile: 'off' }, attributes.blockOpts );
			            	}

			            	props.setAttributes( { blockOpts: blockOptions } );
						} }
				/>
			</Fragment>
		);
	}
}

export default DevicesFields;