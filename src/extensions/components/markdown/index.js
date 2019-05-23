/**
 * External Dependencies
 */
import classnames from 'classnames';
import showdown from 'showdown';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks; 
const { Fragment } = wp.element; 
const { select, dispatch, withSelect, withDispatc } = wp.data; 
const { createHigherOrderComponent } = wp.compose;
const { SPACE } = wp.keycodes;

/**
 * Corrects the Slack Markdown variant of the code block.
 * If uncorrected, it will be converted to inline code.
 *
 * @see https://get.slack.help/hc/en-us/articles/202288908-how-can-i-add-formatting-to-my-messages-#code-blocks
 *
 * @param {string} text The potential Markdown text to correct.
 *
 * @return {string} The corrected Markdown.
 */
function slackMarkdownVariantCorrector( text ) {
	return text.replace(
		/((?:^|\n)```)([^\n`]+)(```(?:$|\n))/,
		( match, p1, p2, p3 ) => `${ p1 }\n${ p2 }\n${ p3 }`
	);
} 

addFilter( 'experimentalRichText', 'editorskit/markdown', ( OriginalComponent ) => {
	const selectPrefix = `format_prepare_props_(${ name })_`;
	const dispatchPrefix = `format_on_change_props_(${ name })_`;

	// Reuse the same showdown converter.
	const converter = new showdown.Converter( {
		noHeaderId: true,
		tables: true,
		literalMidWordUnderscores: true,
		omitExtraWLInCodeBlocks: true,
		simpleLineBreaks: true,
		strikethrough: true,
	} );

	const Component = ( props ) => {
		const newProps = { ...props };

		const args = {
			richTextIdentifier: props.identifier,
			blockClientId: props.clientId,
		};
		console.log( newProps );
		document.addEventListener('keydown', ( event ) =>{
			const { keyCode } = event;
			if ( keyCode === SPACE ) {
				// console.log( props.clientId );
				// return newProps.value = converter.makeHtml( slackMarkdownVariantCorrector( newProps.value ) );
			}
		} );

		return <OriginalComponent { ...newProps } />;
	};

	const hocs = [];


	return Component;
} );