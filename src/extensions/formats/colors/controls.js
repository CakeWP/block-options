/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import './styles/editor.scss';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { select } = wp.data;
const { BlockControls } = wp.editor;
const { applyFormat, toggleFormat, removeFormat } = wp.richText;
const { Toolbar, IconButton, Popover, ColorPalette } = wp.components;

class InlineColorsToolbar extends Component {
	constructor( props ) {
		super( ...arguments );

		this.state = {
			openPopover: false,
		};
	}

	render() {

		const {
			name,
			isActive,
			value,
			onChange,
			activeAttributes,
		} = this.props;

		const colors = get( select( 'core/block-editor' ).getSettings(), [ 'colors' ], [] );

		let activeColor = activeAttributes.style ? activeAttributes.style.replace(new RegExp(`^color:\\s*`), '') : '';
		
		return (
			<Fragment>
				<BlockControls>
					<Toolbar>
						<IconButton
							className="components-dropdown-menu__toggle components-editorskit-dropdown-menu__toggle"
							icon="editor-textcolor"
							aria-haspopup="true"
							label={ __( 'Text Color' ) }
							tooltip={ __( 'Text Color' ) }
							onClick={ () => this.setState( { openPopover: ! this.state.openPopover } ) }
						>
							<span className="components-dropdown-menu__indicator" />
						</IconButton>
						
						{ this.state.openPopover && (
							<Popover
								position="bottom center"
								className="components-editorskit__inline-color-popover"
								focusOnMount="container"
								onClickOutside={ ( onClickOutside ) => { 
									if( ( ! onClickOutside.target.classList.contains( 'components-editorskit-dropdown-menu__toggle' ) && ! document.querySelector('.components-editorskit-dropdown-menu__toggle').contains( onClickOutside.target ) ) && ( !document.querySelector('.components-color-palette__picker') || ( document.querySelector('.components-color-palette__picker') && ! document.querySelector('.components-color-palette__picker').contains( onClickOutside.target ) ) ) ) {
										this.setState( { openPopover: ! this.state.openPopover } );
									}
								} }
							>
								<span class="components-base-control__label">{ __( 'Highlighted Text Color' ) }</span>
								<ColorPalette
									colors={ colors }
									value={ activeColor }
									onChange={ ( color ) => {
										if( color ){
											onChange(
												toggleFormat( value, {
													type: name,
													attributes: {
														style: `color:${color}`,
													},
												} ) 
											);
											console.log( color );
										}else{
											onChange( removeFormat( value, name ) )
										}
									} }
								>
								</ColorPalette>

								<div class="editorskit-settings__separator"></div>

								<span class="components-base-control__label">{ __( 'Highlighted Text Background Color' ) }</span>
								<ColorPalette
									colors={ colors }
									value={ activeColor }
									onChange={ ( color ) => {
										if( color ){
											onChange(
												applyFormat( value, {
													type: name,
													attributes: {
														style: `color:${color}`,
													},
												} ) 
											);
										}else{
											onChange( removeFormat( value, name ) )
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

export default InlineColorsToolbar;