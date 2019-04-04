/**
 * External dependencies
 */
import isEmpty from 'lodash/isEmpty';

/**
 * Internal dependencies
 */
import './api.js';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch, withSelect } = wp.data;
const { Fragment } = wp.element; 
const { Button, ButtonGroup, Dashicon, Tooltip, SelectControl, TextareaControl } = wp.components; 

const ACFOptions = ( props ) => {

	const {
		clientId,
		attributes,
		setAttributes,
		reloadModal,
	} = props;

	const {
		editorskit,
	} = attributes;

	const onSelectFields = ( key, value ) => {
					        		
		delete editorskit[ key ];

    	var blockOptions = Object.assign( { [ key ]: value }, editorskit );

    	dispatch( 'core/editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

    	if( reloadModal ){
    		reloadModal();
    	}
	}

	let acf_fields = [{
		label : __( 'Select Field' ),
	    value : ''
	}];

	if ( ! props.acf ) {
		return;
	}

	if( typeof props.acf != "undefined" ){
		if( !isEmpty( props.acf ) ){
			var acf_flds = props.acf;
			for( var acf_fld in acf_flds ){
				acf_fields.push({
					label : acf_flds[ acf_fld ],
		            value : acf_fld
				});
			}

			return(
				<Fragment>
					<div className="editorskit-button-group-container editorskit-button-group-devices">
						<label className="components-base-control__label" >{ __( 'Advanced Custom Fields' ) }</label>
							<SelectControl
								value={ ( typeof editorskit.acf_visibility !== 'undefined' && editorskit.acf_visibility != '' ) ? editorskit.acf_visibility : '' }
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
								onChange={ ( n ) => onSelectFields( 'acf_visibility', n ) }
							/>

							<SelectControl
								value={ ( typeof editorskit.acf_field !== 'undefined' && editorskit.acf_field != '' ) ? editorskit.acf_field : '' }
								options={ acf_fields }
								onChange={ ( n ) => onSelectFields( 'acf_field', n ) }
							/>

							<SelectControl
								value={ ( typeof editorskit.acf_condition !== 'undefined' && editorskit.acf_condition != '' ) ? editorskit.acf_condition : '' }
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
								onChange={ ( n ) => onSelectFields( 'acf_condition', n ) }
							/>

							<TextareaControl
								label={ __( 'Conditional Value' ) }
								rows="3"
								value={ editorskit.acf_value }
								onChange={ ( n ) => onSelectFields( 'acf_value', n ) }
							/>
					</div>
				</Fragment>
			);
		}
	}

	return null;

}

export default withSelect( ( select, props ) => {
	return {
		acf: select( 'editorskit/acf' ).receiveACFields(),
	};
} )( ACFOptions );