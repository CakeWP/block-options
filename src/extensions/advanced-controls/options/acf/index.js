/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import './api.js';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { dispatch, withSelect } = wp.data;
const { Fragment, Component } = wp.element;
const { SelectControl, TextareaControl } = wp.components;

class ACFOptions extends Component {
	render() {
		const {
			acf,
			selectedBlock,
		} = this.props;

		const {
			clientId,
			attributes,
			reloadModal,
		} = selectedBlock;

		const {
			editorskit,
		} = attributes;

		const onSelectFields = ( key, value ) => {
			delete editorskit[ key ];

			const blockOptions = Object.assign( { [ key ]: value }, editorskit );

			dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, { editorskit: blockOptions } );

			if ( reloadModal ) {
				reloadModal();
			}
		};

		const acfFields = [ {
			label: __( 'Select Field', 'block-options' ),
			value: '',
		} ];

		if ( ! acf ) {
			return;
		}

		if ( typeof acf !== 'undefined' ) {
			if ( ! isEmpty( acf ) ) {
				const acfFlds = acf;
				for ( const acfFld in acfFlds ) {
					acfFields.push( {
						label: acfFlds[ acfFld ],
						value: acfFld,
					} );
				}

				return (
					<Fragment>
						<div className="editorskit-button-group-container editorskit-button-group-acf">
							<label className="components-base-control__label" >{ __( 'Advanced Custom Fields', 'block-options' ) }</label> { /* eslint-disable-line jsx-a11y/label-has-for */ }
							<SelectControl
								value={ ( typeof editorskit.acf_visibility !== 'undefined' && editorskit.acf_visibility !== '' ) ? editorskit.acf_visibility : '' }
								options={ [
									{
										label: __( 'Select Visibility Option', 'block-options' ),
										value: 'none',
									},
									{
										label: __( 'Hide when Condition\'s met', 'block-options' ),
										value: 'hide',
									},
									{
										label: __( 'Show when Condition\'s met', 'block-options' ),
										value: 'show',
									},
								] }
								onChange={ ( n ) => onSelectFields( 'acf_visibility', n ) }
							/>

							<SelectControl
								value={ ( typeof editorskit.acf_field !== 'undefined' && editorskit.acf_field !== '' ) ? editorskit.acf_field : '' }
								options={ acfFields }
								onChange={ ( n ) => onSelectFields( 'acf_field', n ) }
							/>

							<SelectControl
								value={ ( typeof editorskit.acf_condition !== 'undefined' && editorskit.acf_condition !== '' ) ? editorskit.acf_condition : '' }
								options={ [
									{
										label: __( 'Select Condition', 'block-options' ),
										value: 'none',
									},
									{
										label: __( 'Is Equal to', 'block-options' ),
										value: 'equal',
									},
									{
										label: __( 'Is Not Equal to', 'block-options' ),
										value: 'not_equal',
									},
									{
										label: __( 'Contains', 'block-options' ),
										value: 'contains',
									},
									{
										label: __( 'Does Not Contain', 'block-options' ),
										value: 'not_contains',
									},
									{
										label: __( 'Is Empty', 'block-options' ),
										value: 'empty',
									},
									{
										label: __( 'Is Not Empty', 'block-options' ),
										value: 'not_empty',
									},
								] }
								onChange={ ( n ) => onSelectFields( 'acf_condition', n ) }
							/>

							<TextareaControl
								label={ __( 'Conditional Value', 'block-options' ) }
								rows="3"
								value={ editorskit.acf_value }
								onChange={ ( n ) => onSelectFields( 'acf_value', n ) }
								help={ __( 'Additional support for Advanced Custom Fields plugin. Will automatically show when you have the plugin installed and activated.', 'block-options' ) }
							/>
						</div>
					</Fragment>
				);
			}
		}

		return null;
	}
}

export default withSelect( ( select ) => {
	return {
		acf: select( 'editorskit/acf' ).receiveACFields(),
	};
} )( ACFOptions );
