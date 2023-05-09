/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, createRef, useMemo, Fragment } = wp.element;
const {
	ToggleControl,
	withSpokenMessages,
} = wp.components;
const { LEFT, RIGHT, UP, DOWN, BACKSPACE, ENTER, ESCAPE } = wp.keycodes;
const { getRectangleFromRange } = wp.dom;
const { prependHTTP } = wp.url;
const {
	create,
	insert,
	isCollapsed,
	applyFormat,
	getTextContent,
	slice,
	useAnchor
} = wp.richText;
const { URLPopover, useCachedTruthy } = wp.blockEditor;

/**
 * Internal dependencies
 */
import { createLinkFormat, isValidHref } from './utils';
import PositionedAtSelection from './positioned-at-selection';
import {link as settings} from "../index"


const stopKeyPropagation = ( event ) => event.stopPropagation();

function isShowingInput( props, state ) {
	return props.addingLink || state.editLink;
}

const URLPopoverAtLink = ( { isActive, addingLink, value, contentRef, ...props } ) => {
	const popoverAnchor = useCachedTruthy(
		useAnchor( {
			value,
			editableContentElement: contentRef.current,
			settings,
		} )
	);

	if( !popoverAnchor ){
		return null;
	}
	return <URLPopover anchor={ popoverAnchor } { ...props } />;
};

class InlineLinkUI extends Component {
	constructor() {
		super( ...arguments );

		this.editLink = this.editLink.bind( this );
		this.submitLink = this.submitLink.bind( this );
		this.onKeyDown = this.onKeyDown.bind( this );
		this.onChangeInputValue = this.onChangeInputValue.bind( this );
		this.setLinkTarget = this.setLinkTarget.bind( this );
		this.setNoFollow = this.setNoFollow.bind( this );
		this.setSponsored = this.setSponsored.bind( this );
		this.onFocusOutside = this.onFocusOutside.bind( this );
		this.resetState = this.resetState.bind( this );
		this.autocompleteRef = createRef();

		this.state = {
			opensInNewWindow: false,
			noFollow: false,
			sponsored: false,
			inputValue: '',
		};
	}

	static getDerivedStateFromProps( props, state ) {
		const { activeAttributes: { url, target, rel } } = props;
		const opensInNewWindow = target === '_blank';

		if ( ! isShowingInput( props, state ) ) {
			if ( url !== state.inputValue ) {
				return { inputValue: url };
			}

			if ( opensInNewWindow !== state.opensInNewWindow ) {
				return { opensInNewWindow };
			}

			if ( typeof rel === 'string' ) {
				const noFollow = rel.split( ' ' ).includes( 'nofollow' );
				const sponsored = rel.split( ' ' ).includes( 'sponsored' );

				if ( noFollow !== state.noFollow ) {
					return { noFollow };
				}

				if ( sponsored !== state.sponsored ) {
					return { sponsored };
				}
			}
		}

		return null;
	}

	onKeyDown( event ) {
		if ( [ LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER ].indexOf( event.keyCode ) > -1 ) {
			// Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
			event.stopPropagation();
		}

		if ( [ ESCAPE ].indexOf( event.keyCode ) > -1 ) {
			this.resetState();
		}
	}

	onChangeInputValue( inputValue ) {
		this.setState( { inputValue } );
	}

	setLinkTarget( opensInNewWindow ) {
		const { activeAttributes: { url = '' }, value, onChange } = this.props;

		this.setState( { opensInNewWindow } );

		// Apply now if URL is not being edited.
		if ( ! isShowingInput( this.props, this.state ) ) {
			const selectedText = getTextContent( slice( value ) );

			onChange( applyFormat( value, createLinkFormat( {
				url,
				opensInNewWindow,
				noFollow: this.state.noFollow,
				sponsored: this.state.sponsored,
				text: selectedText,
			} ) ) );
		}
	}

	setNoFollow( noFollow ) {
		const { activeAttributes: { url = '' }, value, onChange } = this.props;

		this.setState( { noFollow } );

		// Apply now if URL is not being edited.
		if ( ! isShowingInput( this.props, this.state ) ) {
			const selectedText = getTextContent( slice( value ) );

			onChange( applyFormat( value, createLinkFormat( {
				url,
				opensInNewWindow: this.state.opensInNewWindow,
				noFollow,
				sponsored: this.state.sponsored,
				text: selectedText,
			} ) ) );
		}
	}

	setSponsored( sponsored ) {
		const { activeAttributes: { url = '' }, value, onChange } = this.props;

		this.setState( { sponsored } );

		// Apply now if URL is not being edited.
		if ( ! isShowingInput( this.props, this.state ) ) {
			const selectedText = getTextContent( slice( value ) );

			onChange( applyFormat( value, createLinkFormat( {
				url,
				opensInNewWindow: this.state.opensInNewWindow,
				noFollow: this.state.noFollow,
				sponsored,
				text: selectedText,
			} ) ) );
		}
	}

	editLink( event ) {
		this.setState( { editLink: true } );
		event.preventDefault();
	}

	submitLink( event ) {
		const { isActive, value, onChange, speak } = this.props;
		const { inputValue, opensInNewWindow } = this.state;
		const url = prependHTTP( inputValue );
		const selectedText = getTextContent( slice( value ) );
		const format = createLinkFormat( {
			url,
			opensInNewWindow,
			text: selectedText,
		} );

		event.preventDefault();

		if ( isCollapsed( value ) && ! isActive ) {
			const toInsert = applyFormat( create( { text: url } ), format, 0, url.length );
			onChange( insert( value, toInsert ) );
		} else {
			onChange( applyFormat( value, format ) );
		}

		this.resetState();

		if ( ! isValidHref( url ) ) {
			speak( __( 'Warning: the link has been inserted but may have errors. Please test it.', 'block-options' ), 'assertive' );
		} else if ( isActive ) {
			speak( __( 'Link edited.', 'block-options' ), 'assertive' );
		} else {
			speak( __( 'Link inserted.', 'block-options' ), 'assertive' );
		}
	}

	onFocusOutside() {
		// The autocomplete suggestions list renders in a separate popover (in a portal),
		// so onClickOutside fails to detect that a click on a suggestion occured in the
		// LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
		// return to avoid the popover being closed.
		const autocompleteElement = this.autocompleteRef.current;
		if ( autocompleteElement && autocompleteElement.contains( event.target ) ) {
			return;
		}

		this.resetState();
	}

	resetState() {
		this.props.stopAddingLink();
		this.setState( { editLink: false } );
	}

	render() {
		const { isActive, activeAttributes: { url, target, rel }, addingLink, value } = this.props;

		if ( ! isActive && ! addingLink ) {
			return null;
		}

		const { inputValue, opensInNewWindow, noFollow, sponsored } = this.state;
		const showInput = isShowingInput( this.props, this.state );

		if ( ! opensInNewWindow && target === '_blank' ) {
			this.setState( { opensInNewWindow: true } );
		}

		if ( typeof rel === 'string' ) {
			const relNoFollow = rel.split( ' ' ).includes( 'nofollow' );
			const relSponsored = rel.split( ' ' ).includes( 'sponsored' );

			if ( relNoFollow !== noFollow ) {
				this.setState( { noFollow: relNoFollow } );
			}

			if ( relSponsored !== sponsored ) {
				this.setState( { sponsored: relSponsored } );
			}
		}

		return (
					<URLPopoverAtLink
						value={ value }
						contentRef={this.props.contentRef}
						isActive={ isActive }
						addingLink={ addingLink }
						onFocusOutside={ this.onFocusOutside }
						onClose={ () => {
							if ( ! inputValue ) {
								this.resetState();
							}
						} }
						focusOnMount={ showInput ? 'firstElement' : false }
						className="editorskit-url-popover"
						renderSettings={ () => (
							<Fragment>
								<ToggleControl
									label={ __( 'Open in New Tab', 'block-options' ) }
									checked={ opensInNewWindow }
									onChange={ this.setLinkTarget }
								/>
								<ToggleControl
									label={ __( 'No Follow', 'block-options' ) }
									checked={ noFollow }
									onChange={ this.setNoFollow }
								/>
								<ToggleControl
									label={ __( 'Sponsored', 'block-options' ) }
									checked={ sponsored }
									onChange={ this.setSponsored }
								/>
							</Fragment>
						) }
					>
						{showInput ? (
							<URLPopover.LinkEditor
								className="editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content"
								value={ inputValue }
								onChangeInputValue={ this.onChangeInputValue }
								onKeyDown={ this.onKeyDown }
								onKeyPress={ stopKeyPropagation }
								onSubmit={ this.submitLink }
								autocompleteRef={ this.autocompleteRef }
							/>
						) : (
							<URLPopover.LinkViewer
								className="editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content"
								onKeyPress={ stopKeyPropagation }
								url={ url }
								onEditLinkClick={ this.editLink }
								linkClassName={ url && isValidHref( prependHTTP( url ) ) ? undefined : 'has-invalid-link' }
							/>
						) }

					</URLPopoverAtLink>
		);
	}
}

export default withSpokenMessages( InlineLinkUI );