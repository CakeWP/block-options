/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { RawHTML } = wp.element;
const { Modal } = wp.components;

export function AboutGutenbergEditor( { closeModal } ) {
	const { core, editor, plugin } = window.editorskitInfo;
	return (
		<Modal
			title={ __( 'About Gutenberg Block Editor', 'block-options' ) }
			shouldCloseOnClickOutside={ false }
			onRequestClose={ () => closeModal() }
			closeLabel={ __( 'Close', 'block-options' ) }
			icon={ null }
			className="editorskit-modal-component components-modal--editorskit-overview"
		>
			<p>{ __( 'Editor Version is', 'block-options' ) } <strong>{ editor.version }</strong></p>
			<p>{ __( 'WordPress Version is', 'block-options' ) } <strong>{ core.version }</strong></p>
			<p>{ editor.is_core ?
				sprintf( __( 'You are using the new block editor bundled on WordPress core %s', 'block-options' ), core.version ) :
				<RawHTML>{ sprintf( __( 'You are using the new block editor powered by the %sGutenberg Plugin%s.', 'block-options' ), '<a href="https://wordpress.org/plugins/gutenberg/" target="_blank" rel="noreferrer noopener nofollow">', '</a>' ) }</RawHTML>
			}</p>
			<p><RawHTML>{ sprintf( __( ' Want to help? %sGet involved or report an issue%s.', 'block-options' ), '<a href="https://github.com/WordPress/gutenberg/issues" target="_blank" rel="noreferrer noopener nofollow">', '</a>' ) }</RawHTML></p>
			<p className="editorskit-version-small">{ sprintf( __( 'EditorsKit %s', 'block-options' ), plugin.version ) }</p>
		</Modal>
	);
}
