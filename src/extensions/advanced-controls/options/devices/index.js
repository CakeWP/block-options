/**
 * Internal dependencies
 */
import AlignmentToolbar from './alignment-toolbar';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element;
const { ToggleControl, TabPanel } = wp.components;

const DevicesOptions = ( props ) => {
	const {
		clientId,
		attributes,
		reloadModal,
	} = props;

	const {
		editorskit,
		hasAlignmentOption,
	} = attributes;

	const onSelectionChange = ( key, newValue ) => {
		console.log(key);
		if ( typeof newValue === 'undefined' ) {
			newValue = ! editorskit[ key ];
		}

		delete editorskit[ key ];

		const blockOptions = Object.assign( { [ key ]: newValue }, editorskit );

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
			<h3>{ __( 'Responsive Visibility', 'block-options' ) }</h3>
			<ToggleControl
				label={ __( 'Hide on Desktop', 'block-options' ) }
				checked={ typeof editorskit.desktop !== 'undefined' && ! editorskit.desktop }
				onChange={ () => onSelectionChange( 'desktop' ) }
			/>
			<ToggleControl
				label={ __( 'Hide on Tablet', 'block-options' ) }
				checked={ typeof editorskit.tablet !== 'undefined' && ! editorskit.tablet }
				onChange={ () => onSelectionChange( 'tablet' ) }
			/>
			<ToggleControl
				label={ __( 'Hide on Mobile', 'block-options' ) }
				checked={ typeof editorskit.mobile !== 'undefined' && ! editorskit.mobile }
				onChange={ () => onSelectionChange( 'mobile' ) }
			/>
			{ typeof hasAlignmentOption !== 'undefined' && hasAlignmentOption && (
				<Fragment>
					<h3>{ __( 'Responsive Text Alignment', 'block-options' ) }</h3>
					<small>{ __( 'Assign different alignment for tablet and mobile devices aside from the option you already have for desktop on the block toolbar.', 'block-options' ) }</small>
					<TabPanel className="ek-responsive-tabpanel"
						activeClass="is-primary"
						tabs={ [
							{
								name: 'mobile',
								title: __( 'Mobile', 'block-options' ),
								className: 'is-button is-default is-small',
							},
							{
								name: 'tablet',
								title: __( 'Tablet', 'block-options' ),
								className: 'is-button is-default is-small',
							},
						] }>
						{
							( tab ) => {
								switch ( tab.name ) {
									case 'mobile':
										return (
											<Fragment>
												<p>{ __( 'Alignment for Mobile Devices', 'block-options' ) }</p>
												<AlignmentToolbar
													isCollapsed={ false }
													value={ typeof editorskit.mobileAlignment !== 'undefined' ? editorskit.mobileAlignment : '' }
													onChange={ ( value ) => onSelectionChange( 'mobileAlignment', value ) }
												/>
											</Fragment>
										);

									case 'tablet':
										return (
											<Fragment>
												<p>{ __( 'Alignment for Tablet Devices', 'block-options' ) }</p>
												<AlignmentToolbar
													isCollapsed={ false }
													value={ typeof editorskit.tabletAlignment !== 'undefined' ? editorskit.tabletAlignment : '' }
													onChange={ ( value ) => onSelectionChange( 'tabletAlignment', value ) }
												/>
											</Fragment>
										);
								}
							}
						}
					</TabPanel>
				</Fragment>
			) }
		</Fragment>
	);
};

export default DevicesOptions;
