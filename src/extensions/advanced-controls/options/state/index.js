/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element;
const { ToggleControl } = wp.components;

const UserStateOptions = ( props ) => {
	const {
		clientId,
		attributes,
		reloadModal,
	} = props;

	const {
		editorskit,
	} = attributes;

	const onSelectUser = ( state ) => {
		const newValue = ! editorskit[ state ];

		delete editorskit[ state ];

		const blockOptions = Object.assign( { [ state ]: newValue }, editorskit );

		dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

		if ( reloadModal ) {
			reloadModal();
		}
	};

	if ( typeof editorskit === 'undefined' ) {
		return;
	}

	return (
		<Fragment>
			<div className="editorskit-user-state-controls">
				<hr className="editorskit-divider" />
				<ToggleControl
					label={ __( 'Hide on Loggedin Users', 'block-options' ) }
					help={ ! editorskit.loggedin ? __( 'Hidden when users are logged in.', 'block-options' ) : __( 'Toggle to hide this block when users are not logged in.', 'block-options' ) }
					checked={ typeof editorskit.loggedin !== 'undefined' && ! editorskit.loggedin }
					onChange={ () => onSelectUser( 'loggedin' ) }
				/>
				<ToggleControl
					label={ __( 'Hide on Loggedout Users', 'block-options' ) }
					help={ ! editorskit.loggedout ? __( 'Hidden on guests or logged out users.', 'block-options' ) : __( 'Toggle to hide this block when users are guests or logged out.', 'block-options' ) }
					checked={ typeof editorskit.loggedout !== 'undefined' && ! editorskit.loggedout }
					onChange={ () => onSelectUser( 'loggedout' ) }
				/>
			</div>
		</Fragment>
	);
};

export default UserStateOptions;
