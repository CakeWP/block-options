const { __ } = wp.i18n;
const { Fragment } = wp.element; 
const { Button, ButtonGroup, Tooltip } = wp.components; 

const UserStateOptions = ( props ) => {
	const {
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

    	setAttributes( { editorskit: blockOptions } );
	}

	return(
		<Fragment>
			<div className="editorskit-button-group-container editorskit-button-group-state">
				<label className="components-base-control__label" >{ __( 'User State' ) }</label>
					<ButtonGroup
						aria-label={ __( 'User State Visibility' ) }
					>
						<Tooltip text={ editorskit.loggedin ? __( 'Click to hide on logged-in users' ) : __( 'Click to show on logged-in users' ) }>
					        <Button
					        	className="is-button"
					        	isPrimary={  !! editorskit.loggedin }
					        	onClick={ () => onSelectUser( 'loggedin' ) }
					        >
					       		{ __( 'Logged-in' ) }
					        </Button>
					    </Tooltip>

					    <Tooltip text={ editorskit.loggedout ? __( 'Click to hide on logged-out users' ) : __( 'Click to show on logged-out users' ) }>
					        <Button
					        	className="is-button"
					        	isPrimary={  !! editorskit.loggedout }
					        	onClick={ () => onSelectUser( 'loggedout' ) }
					        >
					       		{ __( 'Logged-out' ) }
					        </Button>
				        </Tooltip>
				    </ButtonGroup>
				    <p className="components-base-control__help">
				    	{ __( 'Click to turn visibility on/off.' ) }
				    </p>
			</div>
		</Fragment>
	);
}

export default UserStateOptions;