/**
 * External dependencies
 */
import { map, find } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { withSpokenMessages, DropdownMenu } = wp.components;

const defaultUnits = {
	'font-size-unit': 'px',
	'line-height-unit': 'px',
	'letter-spacing-unit': 'px',
};

const defaultContentCSS = {
	content: defaultUnits,
	heading: {
		H1: defaultUnits,
		H2: defaultUnits,
		H3: defaultUnits,
		H4: defaultUnits,
		H5: defaultUnits,
		H6: defaultUnits,
	},
	button: defaultUnits,
	fonts: {},
};

class TypographyDropdownMenu extends Component {
	constructor() {
		super( ...arguments );

		this.duplicateFont = this.duplicateFont.bind( this );
	}

	duplicateFont() {
		const { updateState, selectedItem, Fonts, GoogleFonts, saveMeta } = this.props;

		const elementTypes = [ 'content', 'heading', 'button' ];
		const headings = [ 'H1', 'H2', 'H3', 'H4', 'H5', 'H6' ];
		const fontNames = Fonts[ selectedItem ].name.split( ' + ' );
		const primaryFont = find( GoogleFonts.fonts, [ 'name', fontNames[ 0 ] ] );
		const secondaryFont = find( GoogleFonts.fonts, [ 'name', fontNames[ 1 ] ] );
		const headerCSS = Fonts[ selectedItem ].headerCss;
		let headingCSS, fontCSS, innerHeadingCSS, innerCSS, innerFontCSS;

		const contentCSS = Object.assign( defaultContentCSS, { name: Fonts[ selectedItem ].name + ' Custom' } );

		map( elementTypes, ( elementType ) => {
			switch ( elementType ) {
				case 'heading':

					headingCSS = Object.assign( {}, contentCSS[ elementType ] );

					if ( primaryFont ) {
						headingCSS = Object.assign( headingCSS, {
							'font-family': primaryFont.name,
						} );
					}

					contentCSS[ elementType ] = headingCSS;

					fontCSS = Object.assign( {}, contentCSS.fonts );
					fontCSS = Object.assign( fontCSS, {
						[ elementType ]: primaryFont,
					} );

					contentCSS.fonts = fontCSS;

					if ( headerCSS ) {
						map( headerCSS, ( value, syntax ) => {
							map( headings, ( heading ) => {
								innerHeadingCSS = Object.assign( {}, contentCSS[ elementType ][ heading ] );

								innerHeadingCSS = Object.assign( innerHeadingCSS, {
									[ syntax ]: value,
								} );

								contentCSS[ elementType ][ heading ] = innerHeadingCSS;
							} );
						} );
					}

					break;
				case 'content':

					innerCSS = Object.assign( {}, contentCSS[ elementType ] );

					if ( secondaryFont ) {
						innerCSS = Object.assign( innerCSS, {
							'font-family': secondaryFont.name,
						} );
					}

					contentCSS[ elementType ] = innerCSS;

					innerFontCSS = Object.assign( {}, contentCSS.fonts );
					innerFontCSS = Object.assign( innerFontCSS, {
						[ elementType ]: secondaryFont,
					} );

					contentCSS.fonts = innerFontCSS;

					break;
			}
		} );
		updateState( 'isAddingCustom', true );
		updateState( 'contentCSS', contentCSS );
		saveMeta( contentCSS );
	}

	render() {
		const { onToggle, selectedItem, itemType, contentCSS, updateState, settingsPanel, currentMetaId, setVariables } = this.props;

		let controls = [
			{
				title: __( 'Duplicate', 'editorskit-typography-addon' ),
				icon: 'admin-page',
				onClick: () => {
					setVariables( selectedItem );
					const newKey = new Date().valueOf();
					updateState( 'customKey', newKey );

					if ( 'default' === itemType ) {
						this.duplicateFont();
					} else {
						let newContentCSS = Object.assign( {}, contentCSS );
						newContentCSS = Object.assign( newContentCSS, { name: contentCSS.name + __( ' Duplicate', 'editorskit-typography-addon' ) } );
						updateState( 'isAddingCustom', true );
						updateState( 'contentCSS', newContentCSS );
					}
				},
			},
		];
		if ( itemType === 'custom' && parseInt( selectedItem ) === parseInt( currentMetaId ) ) {
			controls.push( {
				title: __( 'Edit', 'editorskit-typography-addon' ),
				icon: 'edit',
				onClick: () => {
					onToggle( selectedItem );
				},
			} );
		}

		if ( settingsPanel ) {
			controls = [
				currentMetaId === selectedItem ?
					{
						title: __( 'Remove as Default', 'editorskit-typography-addon' ),
						icon: 'admin-page',
						onClick: () => {
							updateState( 'isRemovingDefault', true );
							updateState( 'itemSelected', selectedItem );
						},
					} : {
						title: __( 'Set as Default', 'editorskit-typography-addon' ),
						icon: 'admin-page',
						onClick: () => {
							updateState( 'isSettingDefault', true );
							updateState( 'itemSelected', selectedItem );
						},
					},
			];

			if ( itemType === 'custom' ) {
				controls.push( {
					title: __( 'Delete', 'editorskit-typography-addon' ),
					icon: 'trash',
					onClick: () => {
						updateState( 'isDeleting', true );
						updateState( 'itemSelected', selectedItem );
					},
				} );
			}
		}

		return (
			<DropdownMenu
				icon="admin-generic"
				label={ __( 'More Options', 'editorskit-typography-addon' ) }
				controls={ controls }
			/>
		);
	}
}

export default withSpokenMessages( TypographyDropdownMenu );
