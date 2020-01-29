/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockStyle } = wp.blocks;

registerBlockStyle( 'core/columns', {
	name: 'default',
	label: __( 'Default', 'block-options' ),
	isDefault: true,
} );

registerBlockStyle( 'core/columns', {
	name: 'gapless',
	label: __( 'Gapless', 'block-options' ),
	isDefault: false,
} );
