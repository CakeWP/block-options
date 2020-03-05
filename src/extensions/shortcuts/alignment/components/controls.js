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
class RegisterAlignmentShortcut extends Component {
	constructor() {
		super( ...arguments );
		this.triggerShortcut = this.triggerShortcut.bind( this );
		this.state = {
			isOpen: false,
		};
	}

	triggerShortcut( event ) {
		const { keyCode, code } = event;
		const { selectedBlock, updateBlockAttributes } = this.props;

		if ( typeof selectedBlock.attributes.hasAlignmentOption !== 'undefined' && selectedBlock.attributes.hasAlignmentOption ) {
			if ( 67 === keyCode || code === 'KeyC' ) {
				updateBlockAttributes( selectedBlock.clientId, { textAlign: 'center', align: 'center' } );
			} else if ( 76 === keyCode || code === 'KeyL' ) {
				updateBlockAttributes( selectedBlock.clientId, { textAlign: 'left', align: 'left' } );
			} else if ( 82 === keyCode || code === 'KeyR' ) {
				updateBlockAttributes( selectedBlock.clientId, { textAlign: 'right', align: 'right' } );
			} else if ( ( 74 === keyCode || code === 'KeyJ' ) && 'core/paragraph' === selectedBlock.name ) {
				updateBlockAttributes( selectedBlock.clientId, { textAlign: 'justify', align: 'justify' } );
			}
		}
		event.preventDefault();
	}

	render() {
		const { selectedBlock } = this.props;

		if ( typeof selectedBlock === 'undefined' ) {
			return false;
		}

		if ( typeof selectedBlock.attributes.hasAlignmentOption === 'undefined' ) {
			return false;
		}

		return (
			<Fragment>
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						'ctrl+alt+c': this.triggerShortcut,
						'ctrl+alt+r': this.triggerShortcut,
						'ctrl+alt+l': this.triggerShortcut,
						'ctrl+alt+j': this.triggerShortcut,
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
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitSelectParentShortcuts' ),
		};
	} ),
	withDispatch( ( dispatch ) => ( {
		updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
	} ) ),
	ifCondition( ( props ) => {
		return ! props.isDisabled && props.selectedBlock !== 'undefined' && props.selectedBlock !== 'undefined';
	} ),
	withSpokenMessages,
] )( RegisterAlignmentShortcut );
