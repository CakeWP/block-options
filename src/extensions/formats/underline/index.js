/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { select } = wp.data;

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
		const isDisabled = select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitUnderlineFormats' );
		
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
					type="primary"
					character="u"
					onUse={ onToggle }
				/>
				{ !isDisabled && ( <RichTextToolbarButton
						icon="editor-underline"
						title={ __( 'Underline' ) }
						onClick={ onToggle }
						isActive={ isActive }
						shortcutType="primary"
						shortcutCharacter="u"
					/> )
				}
			</Fragment>
		);

	},
};
