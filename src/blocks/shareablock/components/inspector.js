/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ENTER } = wp.keycodes;
const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, Button } = wp.components;

class Inspector extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			apiKey: props.apiKey,
			accessToken: props.accessToken,
			hasValidApiKey: props.hasValidApiKey,
			isSavedKey: false,
			isLoading: true,
			isSaving: false,
			keySaved: false,
			address: props.attributes.address,
		};

		this.updateApiKey = this.updateApiKey.bind( this );
		this.removeApiKey = this.removeApiKey.bind( this );
		this.handleKeyDown = this.handleKeyDown.bind( this );
	}

	componentDidMount() {
		this.setState( { apiKey: this.props.apiKey, accessToken: this.props.accessToken, hasValidApiKey: this.props.hasValidApiKey } );
	}

	updateApiKey() {
		this.props.updateApiKeyCallBack( this.state.apiKey, this.state.accessToken, this.state.hasValidApiKey );
	}

	removeApiKey() {
		this.setState( { apiKey: '', accessToken: '' } );
		this.props.updateApiKeyCallBack( '', '' );
	}

	handleKeyDown( keyCode ) {
		if ( keyCode !== ENTER ) {
			return;
		}

		this.updateApiKey();
	}

	render() {
		const {
			apiKey,
			accessToken,
		} = this.props;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'API Settings', 'block-options' ) }
						initialOpen={ false }
						className="components-shareablock-block-settings-sidebar"
					>
						<p>{ __( 'Add API key and Access Token. Updating this API key will set all your downloads to use the new key.', 'block-options' ) }</p>
						<TextControl
							value={ this.state.apiKey }
							onChange={ ( value ) => this.setState( { apiKey: value } ) }
							placeholder={ __( 'Enter API Key…', 'block-options' ) }
							onKeyDown={ ( { keyCode } ) => this.handleKeyDown( keyCode ) }
						/>

						<TextControl
							value={ this.state.accessToken }
							onChange={ ( value ) => this.setState( { accessToken: value } ) }
							placeholder={ __( 'Enter Access Token…', 'block-options' ) }
							onKeyDown={ ( { keyCode } ) => this.handleKeyDown( keyCode ) }
						/>
						<Button
							isPrimary
							isLarge
							onClick={ this.updateApiKey }
							disabled={ ( this.state.apiKey === '' && this.state.accessToken === '' ) || ( this.state.apiKey === this.props.apiKey && this.state.accessToken === this.props.accessToken ) }
						>
							{ ( this.state.apiKey === this.props.apiKey && this.props.apiKey !== '' ) && ( this.state.accessToken === this.props.accessToken && this.props.accessToken !== '' ) ? __( 'Saved', 'block-options' ) : __( 'Save', 'block-options' ) }
						</Button>
						{ apiKey && accessToken &&
							<Button
								isSecondary
								isLarge
								onClick={ this.removeApiKey }
								disabled={ this.state.apiKey !== this.props.apiKey || ! this.state.apiKey }
							>
								{ __( 'Remove', 'block-options' ) }
							</Button>
						}
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;
