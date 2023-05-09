/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockStyle } = wp.blocks;

function registerStyles() {
	[
		'core/image',
		'core/cover',
	].forEach( ( block ) => {
		registerBlockStyle( block, {
			name: 'default',
			label: __( 'Default', 'block-options' ),
			isDefault: true,
		} );

		registerBlockStyle( block, {
			name: 'editorskit-circular',
			label: __( 'Circular', 'block-options' ),
			isDefault: false,
		} );

		registerBlockStyle( block, {
			name: 'editorskit-rounded',
			label: __( 'Rounded Corners', 'block-options' ),
			isDefault: false,
		} );

		registerBlockStyle( block, {
			name: 'editorskit-diagonal',
			label: __( 'Diagonal', 'block-options' ),
			isDefault: false,
		} );

		registerBlockStyle( block, {
			name: 'editorskit-inverted-diagonal',
			label: __( 'Inverted Diagonal', 'block-options' ),
			isDefault: false,
		} );

		registerBlockStyle( block, {
			name: 'editorskit-shadow',
			label: __( 'Shadow', 'block-options' ),
			isDefault: false,
		} );
	} );
}
registerStyles();
