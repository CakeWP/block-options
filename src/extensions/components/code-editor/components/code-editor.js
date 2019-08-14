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
	}

	componentDidMount() {
		this.addCodeMirror();
	}

	componentDidUpdate() {
		this.addCodeMirror();
	}

	addCodeMirror(){
		const {
			editorMode,
		} = this.props;

		if( editorMode == 'text' ){
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
		}
	}
	
	render(){
		return null;
	}
};

export default compose( [
	withSelect( ( select ) => ( {
		readyState: document.readyState,
		// isActive: select( 'core/edit-post' ).isFeatureActive( 'editorMinHeight' ),
		// isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitHeightTools' ),
		editorMode: select( 'core/edit-post' ).getEditorMode(),
	} ) ),
	withDispatch( ( dispatch, ownProps ) => ( {
		onToggle() {
			// dispatch( 'core/edit-post' ).toggleFeature( 'editorMinHeight' );
		},
	} ) ),
	ifCondition( props => {
		return props.readyState === 'complete' ;
	}),
	withSpokenMessages,
] )( CodeEditor );