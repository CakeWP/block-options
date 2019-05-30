/**
 * External dependencies
 */
import { get } from 'lodash';

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
const { select, withSelect, withDispatch } = wp.data;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { toggleFormat } = wp.richText;

class SuperscriptControl extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			name,
			value,
			isActive,
			onChange,
		} = this.props;
		
		const onToggle = () => {
			onChange(
				toggleFormat( value, {
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
					title={ __( 'Superscript' ) }
					onClick={ onToggle }
					isActive={ isActive }
				/>
			</Fragment>
		);
	}

}

export default compose(
	withSelect( select => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitSuperscriptFormats' ),
		};
	} ),
	ifCondition( props => !props.isDisabled ),
)( SuperscriptControl );