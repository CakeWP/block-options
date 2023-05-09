/**
 * WordPress dependencies
 */
const { withSelect, withDispatch, select } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Fragment, Component } = wp.element;
const { rawShortcut } = wp.keycodes;
const { withSpokenMessages, KeyboardShortcuts } = wp.components;

/**
 * Render plugin
 */
class RegisterShortcut extends Component {
	constructor() {
		super( ...arguments );
		this.triggerShortcut = this.triggerShortcut.bind( this );
		this.state = {
			isOpen: false,
		};
	}

	triggerShortcut( event ) {
		const { parentBlockId, onSelect } = this.props;

		onSelect( parentBlockId );

		event.preventDefault();
	}

	render() {
		const { parentBlockId } = this.props;

		if ( ! parentBlockId ) {
			return false;
		}

		return (
			<Fragment>
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primaryShift( '.' ) ]: this.triggerShortcut,
					} }
				/>
			</Fragment>
		);
	}
}

export default compose( [
	withSelect( () => {
		const { getSelectedBlockClientId, getBlockRootClientId } = select( 'core/block-editor' );
		const selectedBlockId = getSelectedBlockClientId();

		if ( ! selectedBlockId ) {
			return {};
		}

		const parentBlockId = getBlockRootClientId( selectedBlockId );

		return {
			selectedBlockId,
			parentBlockId,
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitSelectParentShortcuts' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { selectBlock } = dispatch( 'core/block-editor' );
		return {
			onSelect( clientId ) {
				selectBlock( clientId );
			},
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
] )( RegisterShortcut );
