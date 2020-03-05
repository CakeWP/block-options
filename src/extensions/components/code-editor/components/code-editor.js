/**
 * WordPress dependencies
 */
const { withSelect, dispatch } = wp.data;
const { compose } = wp.compose;
const { parse } = wp.blocks;
const { Component } = wp.element;
const { withSpokenMessages } = wp.components;

/**
 * Render plugin
 */
class CodeEditor extends Component {
	constructor() {
		super( ...arguments );

		// this.addCodeMirror = this.addCodeMirror.bind( this );

		this.state = {
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.addCodeMirror();
	}

	componentDidUpdate() {
		this.addCodeMirror();
	}

	addCodeMirror() {
		const {
			isDisabled,
			editorMode,
		} = this.props;

		if ( isDisabled ) {
			return null;
		}

		const textEditor = document.querySelector( '.editor-post-text-editor' );

		if ( editorMode === 'text' && textEditor && ! this.state.isLoaded ) {
			const editorSettings = wp.codeEditor.defaultSettings ? _.clone( wp.codeEditor.defaultSettings ) : {};

			//add placeholder class
			document.body.classList.add( 'editorskit-editor-loaded' );

			editorSettings.codemirror = _.extend(
				{},
				editorSettings.codemirror,
				{
					mode: 'text/html',
					lineNumbers: true,
					indentUnit: 2,
					tabSize: 2,
					height: 'auto',
					lineWrapping: true,
					scrollbarStyle: 'null',
				}
			);

			const checkChanges = wp.codeEditor.initialize( textEditor, editorSettings );

			checkChanges.codemirror.on( 'change', function( params ) {
				const content = params.getValue();
				textEditor.innerHTML = content;
				dispatch( 'core/editor' ).editPost( { content } );
			} );

			checkChanges.codemirror.on( 'blur', function( params ) {
				const content = params.getValue();
				const blocks = parse( content );
				dispatch( 'core/editor' ).resetEditorBlocks( blocks );
			} );

			this.setState( { isLoaded: true } );
		} else if ( editorMode === 'visual' && this.state.isLoaded ) {
			this.setState( { isLoaded: false } );
		}
	}

	render() {
		return null;
	}
}

export default compose( [
	withSelect( ( select ) => ( {
		readyState: document.readyState,
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCodeHighlightTools' ),
		editorMode: select( 'core/edit-post' ).getEditorMode(),
	} ) ),
	withSpokenMessages,
] )( CodeEditor );
