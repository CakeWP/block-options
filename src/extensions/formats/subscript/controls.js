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
const { toggleFormat, removeFormat } = wp.richText;

class SubscriptControl extends Component {
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
			//remove superscript format if applied
			let record = removeFormat( value, 'editorskit/superscript' );
			
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
					character=","
					onUse={ onToggle }
				/>

				<RichTextToolbarButton
					icon={ icon.subscript }
					title={ __( 'Subscript' ) }
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
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitSubscriptFormats' ),
		};
	} ),
	ifCondition( props => !props.isDisabled ),
)( SubscriptControl );