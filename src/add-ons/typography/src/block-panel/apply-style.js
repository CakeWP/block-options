/**
 * External dependencies
 */
 import { find } from 'lodash';

 /**
  * Internal Dependencies
  */
 import GoogleFonts from '../defaults/google-fonts';
 
 function applyFontStyle( attributes, blockName, wrapperProps ) {
     const {
         editorskit_typography,
     } = attributes;
 
     let style = {};
 
     if ( typeof wrapperProps !== 'undefined' && typeof wrapperProps.style !== 'undefined' ) {
         style = wrapperProps.style;
     }
 
     if ( typeof editorskit_typography !== 'undefined' && typeof editorskit_typography.family !== 'undefined' ) {
         const googleFontData = find( GoogleFonts.fonts, [ 'name', editorskit_typography.family ] );
         if ( googleFontData ) {
             if ( [ 'core/heading' ].includes( blockName ) ) {
                 style[ '--ek-heading-font-family' ] = googleFontData[ 'font-family' ];
                 if ( typeof editorskit_typography.weight !== 'undefined' && '' !== editorskit_typography.weight ) {
                     style[ '--ek-heading-font-weight' ] = editorskit_typography.weight;
                 }
             } else if ( [ 'core/buttons', 'core/button' ].includes( blockName ) ) {
                 style[ '--ek-button-font-family' ] = googleFontData[ 'font-family' ];
                 if ( typeof editorskit_typography.weight !== 'undefined' && '' !== editorskit_typography.weight ) {
                     style[ '--ek-button-font-weight' ] = editorskit_typography.weight;
                 }
             } else {
                 style[ '--ek-font-family' ] = googleFontData[ 'font-family' ];
                 if ( typeof editorskit_typography.weight !== 'undefined' && '' !== editorskit_typography.weight ) {
                     style[ '--ek-font-weight' ] = editorskit_typography.weight;
                 }
             }
         } else if ( editorskit_typography.family !== '' ) {
             if ( [ 'core/heading' ].includes( blockName ) ) {
                 style[ '--ek-heading-font-family' ] = editorskit_typography.family;
             } else if ( [ 'core/buttons' ].includes( blockName ) ) {
                 style[ '--ek-button-font-family' ] = editorskit_typography.family;
             } else {
                 style[ '--ek-font-family' ] = editorskit_typography.family;
             }
         }
     }
 
     return style;
 }
 
 export default applyFontStyle;