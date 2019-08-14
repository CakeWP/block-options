/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { compose, withState, ifCondition } = wp.compose;
const { Fragment, Component } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { MenuGroup, MenuItemsChoice, MenuItem, withSpokenMessages } = wp.components;


/**
 * Render plugin
 */
class CodeEditor extends Component {

	constructor( props ) {
		super( ...arguments );

		// this.addCodeMirror = this.addCodeMirror.bind( this );

		this.state   = {
			isLoaded: false,
		}
	}

	componentDidMount() {
		this.addCodeMirror();
	}

	componentDidUpdate() {
		this.addCodeMirror();
	}

	addCodeMirror(){
		const {
			isDisabled,
			editorMode,
		} = this.props;

		if( isDisabled ){
			return null;
		}

		if( editorMode == 'text' && !this.state.isLoaded ){
			var editorSettings = wp.codeEditor.defaultSettings ? _.clone( wp.codeEditor.defaultSettings ) : {};

			//add placeholder class
			document.body.classList.add( 'editorskit-editor-loaded' );
			
			editorSettings.codemirror = _.extend(
                {},
                editorSettings.codemirror,
                {
                    indentUnit: 2,
                    tabSize: 2,
                    height: 'auto',
                    lineWrapping: true,
                    scrollbarStyle: "null",
                }
            );

            var textEditor = document.querySelector('.editor-post-text-editor');
            var editor = wp.codeEditor.initialize( textEditor , editorSettings );

            this.setState({ isLoaded : true });
		}else if( editorMode == 'visual' && this.state.isLoaded ){

			this.setState({ isLoaded : false });
		}
	}
	
	render(){
		return null;
	}
};

export default compose( [
	withSelect( ( select ) => ( {
		readyState: document.readyState,
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitCodeHighlightTools' ),
		editorMode: select( 'core/edit-post' ).getEditorMode(),
	} ) ),
	withSpokenMessages,
] )( CodeEditor );