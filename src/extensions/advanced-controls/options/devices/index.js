/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch } = wp.data;
const { Fragment } = wp.element;
const { ToggleControl, TabPanel } = wp.components;
const { AlignmentToolbar } = wp.blockEditor;

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
		
		if ( typeof newValue === 'undefined' ){
			newValue = !editorskit[key];
		}

		delete editorskit[ key ];

		const blockOptions = Object.assign( { [ key ]: newValue }, editorskit );

		dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

		if ( reloadModal ) {
			reloadModal();
		}
	};

	const onTabSelect = (tabName) => {
		console.log('Selecting tab', tabName);
	};

	if ( typeof editorskit === 'undefined' ) {
		return;
	}

	return (
		<Fragment>
			<h3>{__('Responsive Visibility', 'block-options')}</h3>
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
			{typeof hasAlignmentOption !== 'undefined' && hasAlignmentOption && (
				<Fragment>
					<h3>{__('Responsive Text Alignment', 'block-options')}</h3>
					<TabPanel className="ek-responsive-tabpanel"
						activeClass="is-primary"
						onSelect={onTabSelect}
						tabs={[
							{
								name: 'desktop',
								title: __('Desktop', 'block-options'),
								className: 'is-button is-default is-small',
							},
							{
								name: 'tablet',
								title: __('Tablet', 'block-options'),
								className: 'is-button is-default is-small',
							},
							{
								name: 'mobile',
								title: __('Mobile', 'block-options'),
								className: 'is-button is-default is-small',
							},
						]}>
						{
							(tab) => {
								switch (tab.name) {
									case 'desktop':
										
										break;
								
									default:
										break;
								}
							}
						}
					</TabPanel>
					<AlignmentToolbar
						isCollapsed={false}
						label={__('Alignment for Tablet', 'block-options')}
						value={typeof editorskit.tabletAlignment !== 'undefined' ? editorskit.tabletAlignment : ''}
						onChange={(value) => onSelectionChange('tabletAlignment', value)}
					/>
				</Fragment>
			)}
		</Fragment>
	);
};

export default DevicesOptions;
