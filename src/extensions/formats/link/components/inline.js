/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, createRef, useMemo, Fragment, useState } from "@wordpress/element";
import {
	ToggleControl,
	withSpokenMessages,
	Popover
} from "@wordpress/components";
import { LEFT, RIGHT, UP, DOWN, BACKSPACE, ENTER, ESCAPE } from "@wordpress/keycodes";
import { getRectangleFromRange } from "@wordpress/dom";
import { prependHTTP } from "@wordpress/url";
import {
	slice,
	create,
	insert,
	isCollapsed,
	applyFormat,
	getTextContent,
	useAnchor,
} from "@wordpress/richText";
import { URLPopover, useCachedTruthy, __experimentalLinkControl as LinkControl } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { createLinkFormat, isValidHref } from './utils';
import PositionedAtSelection from './positioned-at-selection';
import LinkEditor from './link-editor';
import LinkViewer from './link-viewer';
import { link } from "..";
const stopKeyPropagation = ( event ) => event.stopPropagation();

function isShowingInput( props, state ) {
	return props.addingLink || state.editLink;
}


function InlineLinkUI(props)  {
	const [ state, setState ] = useState({
		opensInNewWindow: false,
		noFollow: false,
		sponsored: false,
		inputValue: '',
	})


	const  getDerivedStateFromProps = (   state )=> {
		const { activeAttributes:{ url, target, rel }} = props;
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

	const onKeyDown = ( event ) => {
		if ( [ LEFT, DOWN, RIGHT, UP, BACKSPACE, ENTER ].indexOf( event.keyCode ) > -1 ) {
			// Stop the key event from propagating up to ObserveTyping.startTypingInTextField.
			event.stopPropagation();
		}

		if ( [ ESCAPE ].indexOf( event.keyCode ) > -1 ) {
			resetState();
		}
	}

	const onChangeInputValue = ( inputValue ) => {
		setState( { inputValue } );
	}

	const setLinkTarget = ( opensInNewWindow ) => {
		const { activeAttributes: { url = '' }, value, onChange } = props;

		setState( { opensInNewWindow } );

		// Apply now if URL is not being edited.
		if ( ! isShowingInput( props, state ) ) {
			const selectedText = getTextContent( slice( value ) );

			onChange( applyFormat( value, createLinkFormat( {
				url,
				opensInNewWindow,
				noFollow: state.noFollow,
				sponsored: state.sponsored,
				text: selectedText,
			} ) ) );
		}
	}

	const setNoFollow = ( noFollow ) => {
		const { activeAttributes: { url = '' }, value, onChange } = props;

		setState( { noFollow } );

		// Apply now if URL is not being edited.
		if ( ! isShowingInput( props, state ) ) {
			const selectedText = getTextContent( slice( value ) );

			onChange( applyFormat( value, createLinkFormat( {
				url,
				opensInNewWindow: state.opensInNewWindow,
				noFollow,
				sponsored: state.sponsored,
				text: selectedText,
			} ) ) );
		}
	}

	const setSponsored = ( sponsored ) =>{
		const { activeAttributes: { url = '' }, value, onChange } = props;

		setState( { sponsored } );

		// Apply now if URL is not being edited.
		if ( ! isShowingInput( props, state ) ) {
			const selectedText = getTextContent( slice( value ) );

			onChange( applyFormat( value, createLinkFormat( {
				url,
				opensInNewWindow: state.opensInNewWindow,
				noFollow: state.noFollow,
				sponsored,
				text: selectedText,
			} ) ) );
		}
	}

	const editLink = ( event ) => {
		setState( { editLink: true } );
		event.preventDefault();
	}

	const submitLink = ( event ) => {
		const { isActive, value, onChange, speak } = props;
		const { inputValue, opensInNewWindow } = state;
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

		resetState();

		if ( ! isValidHref( url ) ) {
			speak( __( 'Warning: the link has been inserted but may have errors. Please test it.', 'block-options' ), 'assertive' );
		} else if ( isActive ) {
			speak( __( 'Link edited.', 'block-options' ), 'assertive' );
		} else {
			speak( __( 'Link inserted.', 'block-options' ), 'assertive' );
		}
	}

	const onFocusOutside = () => {
		// The autocomplete suggestions list renders in a separate popover (in a portal),
		// so onClickOutside fails to detect that a click on a suggestion occured in the
		// LinkContainer. Detect clicks on autocomplete suggestions using a ref here, and
		// return to avoid the popover being closed.
		const autocompleteElement = autocompleteRef.current;
		if ( autocompleteElement && autocompleteElement.contains( event.target ) ) {
			return;
		}

		resetState();
	}

	const resetState = () => {
		props.stopAddingLink();
		setState( { editLink: false } );
	}

		const { isActive, activeAttributes: { url, target, rel }, addingLink, value } = props;

		if ( ! isActive && ! addingLink ) {
			return null;
		}

		const { inputValue, opensInNewWindow, noFollow, sponsored } = state;
		const showInput = isShowingInput( props, state );

		if ( ! opensInNewWindow && target === '_blank' ) {
			setState( { opensInNewWindow: true } );
		}

		if ( typeof rel === 'string' ) {
			const relNoFollow = rel.split( ' ' ).includes( 'nofollow' );
			const relSponsored = rel.split( ' ' ).includes( 'sponsored' );

			if ( relNoFollow !== noFollow ) {
				setState( { noFollow: relNoFollow } );
			}

			if ( relSponsored !== sponsored ) {
				setState( { sponsored: relSponsored } );
			}
		}

		return (
			<Popover>
				<LinkControl
						searchInputPlaceholder="Search here..."
						value={ props.value }
						settings={[
							{
								id: 'opensInNewWindow',
								title: __( 'Open in New Tab', 'block-options' ),
							},
							{
								id: 'noFollow',
								title: __( 'No Follow', 'block-options' )
							},
							{
								id: 'sponsored',
								title: __( 'Sponsored', 'block-options' )
							}
						]}
						onChange={ newSettings => {

							const isSponsored = newSettings?.sponsored ?? false;
							const isNoFollow = newSettings?.noFollow ?? false;
							const isOpenInNewWindow = newSettings?.opensInNewWindow ?? false;

							setSponsored(isSponsored);
							setNoFollow(isNoFollow);
							setLinkTarget(isOpenInNewWindow)

						} }
						withCreateSuggestion={true}
						createSuggestionButtonText={ (newValue) => `${__("New:")} ${newValue}` }
					>
					</LinkControl>
				</Popover>
		);
}

export default withSpokenMessages( InlineLinkUI );
	// <PositionedAtSelection
	// 			key={ `${ value.start }${ value.end }` /* Used to force rerender on selection change */ }
	// 			>
	// 			<URLPopover
	// 				expandOnMobile
	// 				value={ value }
	// 				isActive={ isActive }
	// 				addingLink={ addingLink }
	// 				onFocusOutside={ onFocusOutside }
	// 				onClose={ () => {
	// 					if ( ! inputValue ) {
	// 						resetState();
	// 					}
	// 				} }
	// 				focusOnMount={ showInput ? 'firstElement' : false }
	// 				className="editorskit-url-popover"
	// 				renderSettings={ () => (
	// 					<Fragment>
	// 						<ToggleControl
	// 							label={ __( 'Open in New Tab', 'block-options' ) }
	// 							checked={ opensInNewWindow }
	// 							onChange={ setLinkTarget }
	// 						/>
	// 						<ToggleControl
	// 							label={ __( 'No Follow', 'block-options' ) }
	// 							checked={ noFollow }
	// 							onChange={ setNoFollow }
	// 						/>
	// 						<ToggleControl
	// 							label={ __( 'Sponsored', 'block-options' ) }
	// 							checked={ sponsored }
	// 							onChange={ setSponsored }
	// 						/>
	// 					</Fragment>
	// 				) }
	// 			>
	// 				{ showInput ? (
	// 					<LinkEditor
	// 						className="editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content"
	// 						value={ inputValue }
	// 						onChangeInputValue={ onChangeInputValue }
	// 						onKeyDown={ onKeyDown }
	// 						onKeyPress={ stopKeyPropagation }
	// 						onSubmit={ submitLink }
	// 						autocompleteRef={ autocompleteRef }
	// 					/>
	// 				) : (
	// 					<LinkViewer
	// 						className="editor-format-toolbar__link-container-content block-editor-format-toolbar__link-container-content"
	// 						onKeyPress={ stopKeyPropagation }
	// 						url={ url }
	// 						onEditLinkClick={ editLink }
	// 						linkClassName={ url && isValidHref( prependHTTP( url ) ) ? undefined : 'has-invalid-link' }
	// 					/>
	// 				) }

	// 			</URLPopover>
	// 		</PositionedAtSelection>