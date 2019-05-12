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
const { applyFormat, toggleFormat, removeFormat, getActiveFormat } = wp.richText;
const { Toolbar, IconButton, Popover, ColorPalette, ColorIndicator } = wp.components;

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

		const backgroundColor = 'editorskit/background';
		const colors = get( select( 'core/block-editor' ).getSettings(), [ 'colors' ], [] );
		let activeColor, activeBackground;

		const activeColorFormat = getActiveFormat( value, name );
		const activeBackgroundFormat = getActiveFormat( value, backgroundColor );
    	
    	if( activeColorFormat ){
    		const styleColor = activeColorFormat.attributes.style;
    		activeColor = styleColor.replace(new RegExp(`^color:\\s*`), '') ;
    	}

    	if( activeBackgroundFormat ){
    		const styleBackground = activeBackgroundFormat.attributes.style;
			activeBackground = styleBackground.replace(new RegExp(`^background-color:\\s*`), '');
    	}
		
		return (
			<Fragment>
				<BlockControls>
					<Toolbar className="components-dropdown-menu">
						<IconButton
							className="components-button components-icon-button components-dropdown-menu__toggle components-editorskit-dropdown-menu__toggle"
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
								<span class="components-base-control__label components-base-control__title">{ __( 'Highlighted Text Settings' ) }</span>
								<span class="components-base-control__label">
									{ __( 'Text Color' ) }
									{ activeColor && (
										<ColorIndicator
											colorValue={ activeColor }
										/>
									) }
								</span>
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

								<div class="editorskit-settings__separator"></div>

								<span class="components-base-control__label">
									{ __( 'Background Color' ) }
									{ activeBackground && (
										<ColorIndicator
											colorValue={ activeBackground }
										/>
									) }
								</span>
								<ColorPalette
									colors={ colors }
									value={ activeBackground }
									onChange={ ( background ) => {
										if( background ){
											onChange(
												applyFormat( value, {
													type: backgroundColor,
													attributes: {
														style: `background-color:${background}`,
													},
												} ) 
											);
										}else{
											onChange( removeFormat( value, backgroundColor ) )
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