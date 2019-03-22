const { __ } = wp.i18n;
const { Fragment } = wp.element; 
const { Button, ButtonGroup, Dashicon, Tooltip } = wp.components; 

const DevicesOptions = ( props ) => {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		editorskit,
	} = attributes;

	const onSelectDevice = ( backgroundRepeat ) => {

		if ( backgroundRepeat === 'no-repeat' ) {
			setAttributes( {
				backgroundRepeat: backgroundRepeat,
				backgroundSize: 'cover',
			} );
		} else {
			setAttributes( {
				backgroundRepeat: backgroundRepeat,
				backgroundSize: 'contain',
				focalPoint: undefined,
			} );
		}
	}

	return(
		<Fragment>
			<div className="editorskit-button-group-container">
				<label className="components-base-control__label" >{ __( 'Devices Visibility' ) }</label>
					<ButtonGroup
						aria-label={ __( 'Devices Visibility' ) }
					>
						<Tooltip text={ editorskit.desktop ? __( 'Click to hide on desktop' ) : __( 'Click to show on desktop' ) }>
					        <Button
					        	className="is-button"
					        	isPrimary={  !! editorskit.desktop }
					        	onClick={ () => {
					        		var newValue = !editorskit.desktop;
					        		
					        		delete editorskit.desktop;

					            	var blockOptions = Object.assign( { desktop: newValue }, editorskit );

					            	setAttributes( { editorskit: blockOptions } );
					        	} }
					        >
					       		<Dashicon icon="desktop" />
					        </Button>
					    </Tooltip>

					    <Tooltip text={ editorskit.tablet ? __( 'Click to hide on tablet' ) : __( 'Click to show on tablet' ) }>
					        <Button
					        	className="is-button"
					        	isPrimary={  !! editorskit.tablet }
					        	onClick={ () => {
					        		var newValue = !editorskit.tablet;
					        		
					        		delete editorskit.tablet;

					            	var blockOptions = Object.assign( { tablet: newValue }, editorskit );

					            	setAttributes( { editorskit: blockOptions } );
					        	} }
					        >
					       		<Dashicon icon="tablet" />
					        </Button>
				        </Tooltip>
				        <Tooltip text={ editorskit.mobile ? __( 'Click to hide on mobile' ) : __( 'Click to show on mobile' ) }>
					        <Button
					        	className="is-button"
					        	isPrimary={  !! editorskit.mobile }
					        	onClick={ () => {
					        		var newValue = !editorskit.mobile;
					        		
					        		delete editorskit.mobile;

					            	var blockOptions = Object.assign( { mobile: newValue }, editorskit );

					            	setAttributes( { editorskit: blockOptions } );
					        	} }
					        >
					       		<Dashicon icon="smartphone" />
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

export default DevicesOptions;