const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element; 
const { TextareaControl, Tooltip } = wp.components; 

const LogicOptions = ( props, reloadModal ) => {
	const {
		clientId,
		attributes,
		setAttributes,
	} = props;

	const {
		editorskit,
	} = attributes;

	const onSelectUser = ( state ) => {
		var newValue = !editorskit[ state ];
					        		
		delete editorskit[ state ];

    	var blockOptions = Object.assign( { [ state ]: newValue }, editorskit );

    	dispatch( 'core/editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

    	if( reloadModal ){
    		reloadModal();
    	}
	}

	return(
		<Fragment>
			<div className="editorskit-button-group-container editorskit-button-group-logic">
					<TextareaControl
					rows="2"
				        label={ __( 'Conditional Logic' ) }
				        help={ __( 'Add valid PHP conditional tags for custom & advanced visibility options.' ) }
				        value={ editorskit.logic ? editorskit.logic : null }
				        onChange={ ( newValue ) => {
				        	delete editorskit.logic;

					    	var blockOptions = Object.assign( { logic: newValue }, editorskit );

					    	dispatch( 'core/editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

					    	if( reloadModal ){
					    		reloadModal();
					    	}
				        } }
				    />
			</div>
		</Fragment>
	);
}

export default LogicOptions;