/**
 * Internal dependencies
 */
import icon from './icons';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch, select } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Component, Fragment } = wp.element;
const { withSpokenMessages, Button, IconButton, Tooltip, ClipboardButton, Popover, TextControl } = wp.components;

/**
 * Render plugin
 */
class GradientControls extends Component {
	constructor() {
		super( ...arguments );
		this.handleClickListener = this.handleClickListener.bind( this );

		this.state = {
			isOpen: false,
			anchorRect: {},
			value: '',
			count: null,
		};
	}

	componentDidMount() {
		document.addEventListener( 'mousedown', this.handleClickListener );
	}

	componentWillUnmount() {
		document.removeEventListener( 'mousedown', this.handleClickListener );
	}

	handleClickListener() {
		const { onCopy } = this.props;

		const ButtonControls = ( { count } ) => {
			const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
			const { customGradient } = selectedBlock.attributes;
			return (
				<Fragment>
					<Tooltip text={ __( 'Copy Gradient Value', 'block-options' ) }>
						<ClipboardButton
							text={ customGradient }
							icon={ icon.copy }
							isSecondary
							isSmall
							disabled={ typeof customGradient !== 'undefined' ? false : true }
							onCopy={ onCopy }
						>
						</ClipboardButton>
					</Tooltip>

					<Tooltip text={ __( 'Paste Gradient', 'block-options' ) }>
						<IconButton
							className="ek-paste"
							isSecondary
							isSmall
							icon={ icon.paste }
							onClick={ ( evt ) => {
								this.setState( { isOpen: ! this.state.isOpen, anchorRect: evt.target.getBoundingClientRect(), count } );
							} }
						>
						</IconButton>
					</Tooltip>

				</Fragment>
			);
		};

		setTimeout( function() {
			const wrapper = document.querySelectorAll( '.components-circular-option-picker__custom-clear-wrapper' );

			Array.from( wrapper ).map( ( elem, count ) => {
				const container = elem.parentNode;
				if ( container.querySelector( '.components-custom-gradient-picker' ) && elem && ! elem.classList.contains( 'ek-gradient-controls' ) ) {
					elem.classList.add( 'ek-gradient-controls' );
					elem.insertAdjacentHTML( 'beforeend',
						'<div class="ek-gradient-controls-wrapper" id="ek-gradient-controls-wrapper' + count + '"></div>'
					);

					ReactDOM.render(
						<ButtonControls count={ count } />,
						document.getElementById( 'ek-gradient-controls-wrapper' + count )
					);
				}

				return false;
			} );
		}, 100 );
	}

	render() {
		const { updateBlockAttributes, onPaste } = this.props;
		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();

		if ( this.state.isOpen ) {
			return (
				<Popover
					className="ek-gradient-control-popover"
					position="bottom center"
					onClick={ () => { } }
					anchorRect={ this.state.anchorRect }
					expandOnMobile={ true }
					headerTitle={ __( 'Paste Gradient Value', 'block-options' ) }
					onFocusOutside={ () => {
						this.setState( { isOpen: false } );
					} }
				>
					<TextControl
						label={ __( 'Paste Gradient Value', 'block-options' ) }
						value={ this.state.value }
						onChange={ ( newValue ) => this.setState( { value: newValue } ) }
					/>
					<Button
						isPrimary
						onClick={ () => {
							updateBlockAttributes( selectedBlock.clientId, { gradient: '', customGradient: this.state.value } );
							onPaste();
							this.setState( { value: '' } );

							//reload buttons
							const wrapper = document.getElementById( 'ek-gradient-controls-wrapper' + this.state.count );
							wrapper.parentNode.classList.remove( 'ek-gradient-controls' );
							wrapper.remove();
							this.handleClickListener();
						} }
					>
						{ __( 'Apply', 'block-options' ) }
					</Button>
				</Popover>
			);
		}
		return null;
	}
}

export default compose( [
	withSelect( () => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitGradientControlsTools' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			onCopy() {
				createNotice(
					'info',
					__( 'Custom Gradient copied to your clipboard.', 'block-options' ),
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
			onPaste() {
				createNotice(
					'info',
					__( 'Custom Gradient applied to selected block.', 'block-options' ),
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
			updateBlockAttributes: dispatch( 'core/block-editor' ).updateBlockAttributes,
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages,
] )( GradientControls );
