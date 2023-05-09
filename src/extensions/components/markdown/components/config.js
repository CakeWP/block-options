/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const markdownShortcuts = {
	title: __( 'Markdown Formatting', 'block-options' ),
	shortcuts: [
		{
			keyCombination: [ '##', 'SPACE' ],
			description: __( 'Large header (h2)', 'block-options' ),
		},
		{
			keyCombination: [ '###', 'SPACE' ],
			description: __( 'Medium header (h3)', 'block-options' ),
		},
		{
			keyCombination: [ '####', 'SPACE' ],
			description: __( 'Small header (h4)', 'block-options' ),
		},
		{
			keyCombination: [ '1.', 'SPACE' ],
			description: __( 'Numbered list', 'block-options' ),
		},
		{
			keyCombination: [ '*', 'SPACE' ],
			description: __( 'Bulleted list', 'block-options' ),
		},
		{
			keyCombination: [ '>', 'SPACE' ],
			description: __( 'Blockquote', 'block-options' ),
		},
		{
			keyCombination: [ '_italic_' ],
			description: __( 'Italic', 'block-options' ),
		},
		{
			keyCombination: [ '*bold*' ],
			description: __( 'Bold', 'block-options' ),
		},
		{
			keyCombination: [ '~Strikethrough~' ],
			description: __( 'Strikethrough', 'block-options' ),
		},
		{
			keyCombination: [ '`code`' ],
			description: __( 'Code', 'block-options' ),
		},
	],
};

export default [
	markdownShortcuts,
];
