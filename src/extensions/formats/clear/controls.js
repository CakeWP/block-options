/**
 * External dependencies
 */
import map from 'lodash/map';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { select, withSelect, withDispatch } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { removeFormat } = wp.richText;

class ClearFormatting extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		const {
			value,
			isActive,
			onChange,
			activeAttributes,
		} = this.props;

		const onToggle = () => {
			const formatTypes = select( 'core/rich-text' ).getFormatTypes();
			if ( formatTypes.length > 0 ) {
				let newValue = value;

				map( formatTypes, ( activeFormat ) => {
					newValue = removeFormat( newValue, activeFormat.name );
				} );

				onChange( { ...newValue } );
			}
		};
		return (
			<RichTextToolbarButton
				icon="editor-removeformatting"
				title={ __( 'Clear Formatting' ) }
				onClick={ onToggle }
				isActive={ isActive }
			/>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitClearFormattingFormats' ),
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} )
)( ClearFormatting );
