/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element;
const { ToggleControl } = wp.components;

const DevicesOptions = ( props ) => {
	const {
		clientId,
		attributes,
		reloadModal,
	} = props;

	const {
		editorskit,
	} = attributes;

	const onSelectDevice = ( device ) => {
		const newValue = ! editorskit[ device ];

		delete editorskit[ device ];

		const blockOptions = Object.assign( { [ device ]: newValue }, editorskit );

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
			<ToggleControl
				label={ __( 'Hide on Desktop', 'block-options' ) }
				checked={ typeof editorskit.desktop !== 'undefined' && ! editorskit.desktop }
				onChange={ () => onSelectDevice( 'desktop' ) }
			/>
			<ToggleControl
				label={ __( 'Hide on Tablet', 'block-options' ) }
				checked={ typeof editorskit.tablet !== 'undefined' && ! editorskit.tablet }
				onChange={ () => onSelectDevice( 'tablet' ) }
			/>
			<ToggleControl
				label={ __( 'Hide on Mobile', 'block-options' ) }
				checked={ typeof editorskit.mobile !== 'undefined' && ! editorskit.mobile }
				onChange={ () => onSelectDevice( 'mobile' ) }
			/>
		</Fragment>
	);
};

export default DevicesOptions;
