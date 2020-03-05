/**
 * WordPress dependencies
 */
const { withSelect, withDispatch, select } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Fragment, Component } = wp.element;
const { withSpokenMessages, KeyboardShortcuts } = wp.components;

/**
 * Render plugin
 */
class RegisterHeadingShortcuts extends Component {
	constructor() {
		super( ...arguments );
		this.triggerShortcut = this.triggerShortcut.bind( this );
	}

	triggerShortcut( event ) {
		const { selectedBlock, updateBlockAttributes } = this.props;

		const level = event.code.replace( /^\D+/g, '' );

		updateBlockAttributes( selectedBlock.clientId, { level: parseInt( level ) } );

		event.preventDefault();
	}

	render() {
		const { selectedBlock } = this.props;

		if ( typeof selectedBlock === 'undefined' ) {
			return false;
		}

		if ( ! [ 'core/heading' ].includes( selectedBlock.name ) ) {
			return false;
		}

		return (
			<Fragment>
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						'ctrl+alt+1': this.triggerShortcut,
						'ctrl+alt+2': this.triggerShortcut,
						'ctrl+alt+3': this.triggerShortcut,
						'ctrl+alt+4': this.triggerShortcut,
						'ctrl+alt+5': this.triggerShortcut,
						'ctrl+alt+6': this.triggerShortcut,
					} }
				/>
			</Fragment>
		);
	}
}

export default compose( [
	withSelect( () => {
		const { getSelectedBlock } = select( 'core/block-editor' );
		const selectedBlock = getSelectedBlock();

		if ( ! selectedBlock ) {
			return {};
		}

		return {
			selectedBlock,
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitHeadingShortcuts' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( ( props ) => {
		return ! props.isDisabled && props.selectedBlock !== 'undefined' && props.selectedBlock !== 'undefined';
	} ),
	withSpokenMessages,
] )( RegisterHeadingShortcuts );
