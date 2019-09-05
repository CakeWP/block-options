/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { select, withSelect } = wp.data;
const { BlockControls } = wp.blockEditor;
const { applyFormat, removeFormat, getActiveFormat } = wp.richText;
const { Toolbar, IconButton, Popover, ColorPalette } = wp.components;
const { compose, ifCondition } = wp.compose;

const name = 'editorskit/color';
const title = __( 'Text Color', 'block-options' );

class Edit extends Component {
	constructor() {
		super( ...arguments );

		this.toggle = this.toggle.bind( this );

		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState( ( state ) => ( {
			isOpen: ! state.isOpen,
		} ) );
	}

	render() {
		const { isOpen } = this.state;
		const {
			value,
			onChange,
		} = this.props;

		let activeColor;

		const colors = get( select( 'core/block-editor' ).getSettings(), [ 'colors' ], [] );
		const activeColorFormat = getActiveFormat( value, name );

		if ( activeColorFormat ) {
			const styleColor = activeColorFormat.attributes.style;
			if ( styleColor ) {
				activeColor = styleColor.replace( new RegExp( `^color:\\s*` ), '' );
			}
		}

		return (
			<Fragment>
				<BlockControls>
					<Toolbar className="editorskit-components-toolbar">
						<IconButton
							className="components-button components-icon-button components-editorskit-toolbar__control components-toolbar__control components-editorskit-color-format"
							icon="editor-textcolor"
							aria-haspopup="true"
							tooltip={ title }
							onClick={ this.toggle }
						>
							<span
								className="components-editorskit-inline-color__indicator"
								style={ {
									backgroundColor: activeColor,
								} }
							/>
						</IconButton>

						{ isOpen && (
							<Popover
								position="bottom center"
								className="components-editorskit__inline-color-popover"
								focusOnMount="container"
								onClickOutside={ ( onClickOutside ) => {
									if ( ( ! onClickOutside.target.classList.contains( 'components-editorskit-color-format' ) && ! document.querySelector( '.components-editorskit-color-format' ).contains( onClickOutside.target ) ) && ( ! document.querySelector( '.components-color-palette__picker' ) || ( document.querySelector( '.components-color-palette__picker' ) && ! document.querySelector( '.components-color-palette__picker' ).contains( onClickOutside.target ) ) ) ) {
										this.setState( { isOpen: ! isOpen } );
									}
								} }
							>
								<ColorPalette
									colors={ colors }
									value={ activeColor }
									onChange={ ( color ) => {
										if ( color ) {
											onChange(
												applyFormat( value, {
													type: name,
													attributes: {
														style: `color:${ color }`,
													},
												} )
											);
										} else {
											onChange( removeFormat( value, name ) );
										}
									} }
								>
								</ColorPalette>
							</Popover>
						) }

					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( () => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitColorsFormats' ),
		};
	} ),
	ifCondition( ( props ) => ! props.isDisabled ),
)( Edit );
