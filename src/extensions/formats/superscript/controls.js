/**
 * Internal dependencies
 */
import icon from './icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment, Component } = wp.element;
const { compose, ifCondition } = wp.compose;
const { withSelect } = wp.data;
const { RichTextToolbarButton, RichTextShortcut } = wp.blockEditor;
const { toggleFormat, removeFormat } = wp.richText;

class SuperscriptControl extends Component {
	render() {
		const {
			name,
			value,
			isActive,
			onChange,
		} = this.props;

		const onToggle = () => {
			//remove subscript format if applied
			const record = removeFormat( value, 'editorskit/subscript' );

			onChange(
				toggleFormat( record, {
					type: name,
				} )
			);
		};
		return (
			<Fragment>
				<RichTextShortcut
					type="primary"
					character="."
					onUse={ onToggle }
				/>

				<RichTextToolbarButton
					icon={ icon.superscript }
					title={ __( 'Superscript', 'block-options' ) }
					onClick={ onToggle }
					isActive={ isActive }
				/>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitSuperscriptFormats' ),
		};
	} ),
	ifCondition( ( props ) => ! props.isDisabled ),
)( SuperscriptControl );
