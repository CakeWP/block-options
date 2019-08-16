/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockStyle } = wp.blocks;

function registerStyles () {
	[
		'core/image',
		'core/cover',
	].forEach( ( block ) => {

		registerBlockStyle( block , {
			name: 'default',
			label: __( 'Default' ),
			isDefault: true,
		});

		registerBlockStyle( block, {
			name: 'editorskit-circular',
			label: __( 'Circular' ),
			isDefault: false,
		});

		registerBlockStyle( block, {
			name: 'editorskit-rounded',
			label: __( 'Rounded Corners' ),
			isDefault: false,
		});

		registerBlockStyle( block, {
			name: 'editorskit-diagonal',
			label: __( 'Diagonal' ),
			isDefault: false,
		});

		registerBlockStyle( block, {
			name: 'editorskit-inverted-diagonal',
			label: __( 'Inverted Diagonal' ),
			isDefault: false,
		});

		registerBlockStyle( block, {
			name: 'editorskit-shadow',
			label: __( 'Shadow' ),
			isDefault: false,
		});

	} );
};
registerStyles();