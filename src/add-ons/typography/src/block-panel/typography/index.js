/**
 * External Dependencies
 */
import { map, find } from 'lodash';

/**
 * Internal Dependencies
 */
import GoogleFonts from '../../defaults/google-fonts.json';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withDispatch, useSelect, withSelect } = wp.data;
const { Fragment, useMemo } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, Button, withSpokenMessages } = wp.components;

const googleLink = 'https://fonts.googleapis.com/css?family=';

const TypographySettings = ( props ) => {
	const {
		attributes,
		setAttributes,
		saveBlockTypography,
		isDisabled,
	} = props;

	if ( isDisabled ) {
		return false;
	}

	const meta = useSelect( ( select ) =>
		select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		[]
	);

	let editorskit_blocks_typography = useMemo(
		() => {
			if ( meta !== null && typeof meta !== 'undefined' ) {
				return meta[ '_editorskit_blocks_typography' ] || '';
			}
		},
		[ meta ]
	);

	if ( typeof meta === 'undefined' ) {
		return null;
	}

	const {
		editorskit_typography,
	} = attributes;

	if ( typeof editorskit_typography === 'undefined' ) {
		return null;
	}

	const selectOptions = () => {
		return [
			{ label: __( 'Select Google Font', 'editorskit-typography-addon' ), value: '' },
			{ label: __( 'Arial', 'editorskit-typography-addon' ), value: 'Arial' },
			{ label: __( 'Helvetica', 'editorskit-typography-addon' ), value: 'Helvetica' },
			{ label: __( 'Times New Roman', 'editorskit-typography-addon' ), value: 'Times New Roman' },
			{ label: __( 'Georgia', 'editorskit-typography-addon' ), value: 'Georgia' },
			...GoogleFonts.fonts.map( ( { name } ) => ( { label: name, value: name } ) ),
		];
	};

	const googleFontWeights = find( GoogleFonts.fonts, [ 'name', editorskit_typography.family ] );
	const fontWeightOptions = () => {
		const fontWeights = [
			{ label: __( 'Select Font Weight', 'editorskit-typography-addon' ), value: '' },
		];
		if ( typeof googleFontWeights !== 'undefined' && typeof googleFontWeights.weights !== 'undefined' ) {
			map( googleFontWeights.weights.split( ',' ), ( weight ) => {
				if ( weight && ! weight.includes( 'i' ) ) {
					fontWeights.push( { label: weight, value: parseInt( weight ) } );
				}
			} );
		}
		return fontWeights;
	};

	const onSelectFamily = ( key, value ) => {
		const oldValue = editorskit_typography[ key ];
		delete editorskit_typography[ key ];

		// Add Google Font
		const link = document.createElement( 'link' );
		link.rel = 'stylesheet';
		const googleFontData = find( GoogleFonts.fonts, [ 'name', value ] );

		if ( googleFontData ) {
			link.href = googleLink + value.replace( ' ', '+' ) + ':' + googleFontData.weights;
		}

		document.head.appendChild( link );

		const blockOptions = Object.assign( { [ key ]: value }, editorskit_typography );

		setAttributes( { editorskit_typography: blockOptions } );

		// Save meta
		if ( googleFontData ) {
			editorskit_blocks_typography += value.replace( ' ', '+' ) + ':' + googleFontData.weights + '|';
		}
		if ( oldValue ) {
			let oldFontData = find( GoogleFonts.fonts, [ 'name', oldValue ] );
			if ( oldFontData ) {
				oldFontData = oldValue.replace( ' ', '+' ) + ':' + oldFontData.weights + '|';
				editorskit_blocks_typography = editorskit_blocks_typography.replace( oldFontData, '' );
			}
		}

		saveBlockTypography( editorskit_blocks_typography );
	};

	const onSelectFields = ( key, value ) => {
		delete editorskit_typography[ key ];

		const blockOptions = Object.assign( { [ key ]: value }, editorskit_typography );

		setAttributes( { editorskit_typography: blockOptions } );
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={ __( 'Typography Settings', 'editorskit-typography-addon' ) }
					initialOpen={ false }
					className="editorskit-panel editorskit-panel-typography"
				>

					<SelectControl
						label={ __( 'Font Family', 'editorskit-typography-addon' ) }
						options={ selectOptions() }
						value={ typeof editorskit_typography.family !== 'undefined' ? editorskit_typography.family : '' }
						onChange={ ( n ) => onSelectFamily( 'family', n ) }
					/>

					{
						fontWeightOptions() && fontWeightOptions().length > 1 ?
							<SelectControl
								label={ __( 'Font Weight', 'editorskit-typography-addon' ) }
								options={ fontWeightOptions() }
								value={ typeof editorskit_typography.weight !== 'undefined' ? editorskit_typography.weight : '' }
								onChange={ ( n ) => onSelectFields( 'weight', n ) }
							/> :
							''
					}

					<div className="editorskit-reset-button">
						<Button
							isSmall
							isSecondary
							onClick={ () => {
								onSelectFamily( 'family', '' );
								onSelectFields( 'weight', '' );
							} }>
							{ __( 'Reset', 'editorskit-typography-addon' ) }
						</Button>
					</div>

				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
};

export default compose( [
	withSelect( ( select ) => {
		const { isFeatureActive } = select('core/edit-post');
		return {
			isDisabled: isFeatureActive('disableEditorsKitTypography'),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			editPost,
		} = dispatch( 'core/editor' );

		return {
			saveBlockTypography( value ) {
				editPost( {
					meta: {
						_editorskit_blocks_typography: value,
					},
				} );
			},
		};
	} ),
	withSpokenMessages,
] )( TypographySettings );
