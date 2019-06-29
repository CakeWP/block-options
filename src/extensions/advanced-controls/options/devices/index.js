/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element; 
const { Button, ButtonGroup, Dashicon, Tooltip, ToggleControl, } = wp.components; 

const DevicesOptions = ( props ) => {

	const {
		clientId,
		attributes,
		setAttributes,
		reloadModal,
	} = props;

	const {
		editorskit,
	} = attributes;

	const onSelectDevice = ( device ) => {
		var newValue = !editorskit[ device ];
					        		
		delete editorskit[ device ];

    	var blockOptions = Object.assign( { [ device ]: newValue }, editorskit );

    	dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

    	if( reloadModal ){
    		reloadModal();
    	}
	}
	
	return(
		<Fragment>
			<ToggleControl
				label={ __( 'Hide on Desktop' ) }
				checked={ ! editorskit.desktop }
				onChange={ () => onSelectDevice( 'desktop' ) }
			/>
			<ToggleControl
				label={ __( 'Hide on Tablet' ) }
				checked={ ! editorskit.tablet }
				onChange={ () => onSelectDevice( 'tablet' ) }
			/>
			<ToggleControl
				label={ __( 'Hide on Mobile' ) }
				checked={ ! editorskit.mobile }
				onChange={ () => onSelectDevice( 'mobile' ) }
				/>
		</Fragment>
	);
}

export default DevicesOptions;