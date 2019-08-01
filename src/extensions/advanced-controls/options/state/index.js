/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element; 
const { Button, ButtonGroup, Tooltip, ToggleControl } = wp.components; 

const UserStateOptions = ( props ) => {
	const {
		clientId,
		attributes,
		setAttributes,
		reloadModal,
	} = props;

	const {
		editorskit,
	} = attributes;

	const onSelectUser = ( state ) => {
		var newValue = !editorskit[ state ];
					        		
		delete editorskit[ state ];

    	var blockOptions = Object.assign( { [ state ]: newValue }, editorskit );

    	dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

    	if( reloadModal ){
    		reloadModal();
    	}
	}

	if( typeof editorskit == 'undefined' ){
		return;
	}

	return(
		<Fragment>
			<div className="editorskit-user-state-controls">
				<hr className="editorskit-divider" />
				<ToggleControl
					label={ __( 'Hide on Loggedin Users' ) }
					help={ ! editorskit.loggedin ? __( 'Hidden when users are logged in.' ) : __( 'Toggle to hide this block when users are not logged in.' ) }
					checked={ typeof editorskit.loggedin != 'undefined' && ! editorskit.loggedin }
					onChange={ () => onSelectUser( 'loggedin' ) }
				/>
				<ToggleControl
					label={ __( 'Hide on Loggedout Users' ) }
					help={ ! editorskit.loggedout ? __( 'Hidden on guests or logged out users.' ) : __( 'Toggle to hide this block when users are guests or logged out.' ) }
					checked={ typeof editorskit.loggedout != 'undefined' && ! editorskit.loggedout }
					onChange={ () => onSelectUser( 'loggedout' ) }
				/>
			</div>
		</Fragment>
	);
}

export default UserStateOptions;