/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import icon from './icon';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { toggleFormat } = wp.richText;

class UppercaseControl extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			onChange,
			isActive,
			value,
			name,
		} = this.props;

		const onToggle = () => {
			onChange( toggleFormat( value, { type: name } ) );
		};

		return (
			<RichTextToolbarButton
				icon={ icon.uppercase }
				title={ __( 'Uppercase' ) }
				onClick={ onToggle }
				isActive={ isActive }
			/>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitUppercaseFormats' ),
			formatTypes: select( 'core/rich-text' ).getFormatTypes(),
		};
	} ),
	ifCondition( ( props ) => {
		const checkFormats = props.formatTypes.filter( ( formats ) => formats.name === 'coblocks/uppercase' );
		return ! props.isDisabled && checkFormats.length === 0;
	} )
)( UppercaseControl );
