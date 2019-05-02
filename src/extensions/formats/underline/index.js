/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;

/**
 * Block constants
 */
const name = 'editorskit/underline';

export const underline = {
	name,
	title: __( 'Underline' ),
	tagName: 'span',
	className: null,
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange } ) {
		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: name,
					attributes: {
						style: 'text-decoration: underline;',
					},
				} ) 
			);
		};
		return (
			<Fragment>
				<RichTextShortcut
					type="access"
					character="u"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon="editor-underline"
					title={ __( 'Underline' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="access"
					shortcutCharacter="u"
				/>
			</Fragment>
		);

	},
};
