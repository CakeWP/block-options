/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { displayShortcutList, shortcutAriaLabel } = wp.keycodes;

const markdownShortcuts = {
	title: __( 'Markdown Formatting' ),
	shortcuts: [
		{
			keyCombination: [ '##', 'SPACE' ],
			description: __( 'Large header (h2)' ),
		},
		{
			keyCombination: [ '###', 'SPACE' ],
			description: __( 'Medium header (h3)' ),
		},
		{
			keyCombination: [ '####', 'SPACE' ],
			description: __( 'Small header (h4)' ),
		},
		{
			keyCombination: [ '1.', 'SPACE' ],
			description: __( 'Numbered list' ),
		},
		{
			keyCombination: [ '*', 'SPACE' ],
			description: __( 'Bulleted list' ),
		},
		{
			keyCombination: [ '>', 'SPACE' ],
			description: __( 'Blockquote' ),
		},
		{
			keyCombination: [ '_italic_' ],
			description: __( 'Italic' ),
		},
		{
			keyCombination: [ '*bold*' ],
			description: __( 'Bold' ),
		},
		{
			keyCombination: [ '~Strikethrough~' ],
			description: __( 'Strikethrough' ),
		},
		{
			keyCombination: [ '`code`' ],
			description: __( 'Code' ),
		},
	],
};

export default [
	markdownShortcuts,
];