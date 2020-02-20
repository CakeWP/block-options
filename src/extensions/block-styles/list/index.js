/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockStyle } = wp.blocks;

registerBlockStyle( 'core/list', {
	name: 'default',
	label: __( 'Default', 'block-options' ),
	isDefault: true,
} );

registerBlockStyle( 'core/list', {
	name: 'none',
	label: __( 'None', 'block-options' ),
	isDefault: false,
} );

registerBlockStyle( 'core/list', {
	name: 'arrow',
	label: __( 'Arrow', 'block-options' ),
	isDefault: false,
} );

registerBlockStyle( 'core/list', {
	name: 'checked',
	label: __( 'Checked', 'block-options' ),
	isDefault: false,
} );

registerBlockStyle( 'core/list', {
	name: 'crossed',
	label: __( 'Crossed', 'block-options' ),
	isDefault: false,
} );

registerBlockStyle( 'core/list', {
	name: 'connected',
	label: __( 'Connected', 'block-options' ),
	isDefault: false,
} );

registerBlockStyle( 'core/list', {
	name: 'dashed',
	label: __( 'Dashed', 'block-options' ),
	isDefault: false,
} );

registerBlockStyle( 'core/list', {
	name: 'starred',
	label: __( 'Starred', 'block-options' ),
	isDefault: false,
} );
