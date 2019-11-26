/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { withDispatch } = wp.data;
const { compose, createHigherOrderComponent } = wp.compose;
const { getBlockType } = wp.blocks;
const { InspectorAdvancedControls } = wp.blockEditor;
const { Button } = wp.components;

const enhance = compose(
	withDispatch( ( dispatch ) => {
		const {
			hideBlockTypes,
		} = dispatch( 'core/edit-post' );

		const {
			createNotice,
		} = dispatch( 'core/notices' );

		const {
			removeBlock,
			clearSelectedBlock,
		} = dispatch( 'core/block-editor' );

		return {
			editorsKitDisableBlock( blockName, clientId ) {
				hideBlockTypes( blockName );
				removeBlock( clientId );
				clearSelectedBlock();

				const blockTitle = getBlockType( blockName ).title;

				createNotice(
					'info',
					blockTitle + __( ' block has been disabled.', 'block-options' ),
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
		};
	} ),
);

/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {Function} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		const {
			name,
			clientId,
			attributes,
			editorsKitDisableBlock,
		} = props;

		const {
			editorskit,
		} = attributes;

		if ( typeof editorskit !== 'undefined' && typeof editorskit.unit_test !== 'undefined' && editorskit.unit_test && props.isSelected ) {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorAdvancedControls>
						<div className="components-base-control components-button-control components-editorskit-disable-block">
							<div className="components-base-control__field">
								<Button
									isPrimary
									isLarge
									isDestructive
									onClick={ () => {
										editorsKitDisableBlock( name, clientId );
									} }>
									{ __( 'Remove & Disable Block', 'block-options' ) }
								</Button>
							</div>
							<p className="components-base-control__help">
								{ __( 'Click if you want this block to be disabled on Block Manager.', 'block-options' ) }
							</p>
						</div>
					</InspectorAdvancedControls>
				</Fragment>
			);
		}

		return <BlockEdit { ...props } />;
	} );
}, 'withInspectorControl' );

addFilter(
	'editor.BlockEdit',
	'editorskit/advanced/disable-block',
	withInspectorControl
);
