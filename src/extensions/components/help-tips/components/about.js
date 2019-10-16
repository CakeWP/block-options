/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { withSelect, withDispatch, select } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Fragment, Component, RawHTML } = wp.element;
const { DOWN } = wp.keycodes;
const { withSpokenMessages, Modal, Button, IconButton, Dropdown, NavigableMenu } = wp.components;

export function AboutGutenbergEditor( { closeModal } ) {
	return (
		<Modal
			title={ __( 'About Gutenberg Block Editor', 'block-options' ) }
			shouldCloseOnClickOutside={ false }
			onRequestClose={ () => closeModal() }
			closeLabel={ __( 'Close', 'block-options' ) }
			icon={ null }
			className="editorskit-modal-component components-modal--editorskit-overview"
		>
			<p>{ __( 'Version', 'block-options' ) } <strong>6.6.0</strong></p>
			<p><RawHTML>{ sprintf( __( ' You are using the new block editor powered by the %sGutenberg Plugin%s.', 'block-options' ), '<a href="https://wordpress.org/plugins/gutenberg/" target="_blank" rel="noreferrer noopener nofollow">', '</a>' ) }</RawHTML></p>
			{
				//You are using the new block editor bundled on WordPress core 5.3.0
			}
			<p><RawHTML>{ sprintf( __( ' Want to help? %sGet involved or report an issue%s.', 'block-options' ), '<a href="https://github.com/WordPress/gutenberg/issues" target="_blank" rel="noreferrer noopener nofollow">', '</a>' ) }</RawHTML></p>
		</Modal>
	);
}
