/**
 * External dependencies
 */
import { map, find } from 'lodash';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import UnitControl from '../../components/unit-control';
import Fonts from '../../defaults/fonts';
import GoogleFonts from '../../defaults/google-fonts';
import TypographyDropdownMenu from './components/dropdown-menu';
import HeadingLevelIcon from './heading-level-icon';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const { Fragment, Component } = wp.element;
const { withSpokenMessages, Button, TextControl, PanelBody, SelectControl, TabPanel, CheckboxControl, Modal } = wp.components;

/**
 * Get settings.
 */
let settings;
wp.api.loadPromise.then( () => {
	settings = new wp.api.models.Settings();
} );

const defaultUnits = {
	'font-size-unit': 'px',
	'line-height-unit': 'px',
	'letter-spacing-unit': 'px',
};

const stylesElement = document.getElementById( 'editorskit-typography-inline-css' );
const googleLink = 'https://fonts.googleapis.com/css?family=';
const link = document.createElement( 'link' );
link.rel = 'stylesheet';

/**
 * Block edit function
 */
class TypographySelection extends Component {
	constructor() {
		super( ...arguments );

		this.onToggle = this.onToggle.bind( this );
		this.onDelete = this.onDelete.bind( this );
		this.onSetDefault = this.onSetDefault.bind( this );
		this.createMeta = this.createMeta.bind( this );
		this.createCSS = this.createCSS.bind( this );
		this.setVariables = this.setVariables.bind( this );
		this.saveMeta = this.saveMeta.bind( this );
		this.updateState = this.updateState.bind( this );
		this.getValue = this.getValue.bind( this );

		this.state = {
			isAddingCustom: false,
			isActiveFont: '',
			contentCSS: {
				content: defaultUnits,
				heading: {
					H1: defaultUnits,
					H2: defaultUnits,
					H3: defaultUnits,
					H4: defaultUnits,
					H5: defaultUnits,
					H6: defaultUnits,
				},
				button: defaultUnits,
				fonts: {},
			},
			optionsSaved: false,
			optionsFetched: false,
			optionsData: {},
			defaultTypography: {},
			customKey: '',
			showOptionsOn: '',
			searchKeyword: '',
			isDeleting: false,
			itemSelected: '',
			isDeleted: '',
			isSettingDefault: false,
			isRemovingDefault: false,
			applyToAll: false,
		};

		settings.fetch().then( ( response ) => {
			if ( response.editorskit_typography_custom ) {
				this.setState( {
					optionsData: JSON.parse( response.editorskit_typography_custom ),
					defaultTypography: JSON.parse( response.editorskit_typography_default ),
				} );
			}
			this.setState( {
				optionsFetched: true,
			} );
		} );
	}

	onToggle( selectedItem ) {
		const { optionsData } = this.state;
		if ( typeof optionsData[ selectedItem ] !== 'undefined' ) {
			this.setVariables( selectedItem );
			this.createCSS( optionsData[ selectedItem ], selectedItem );
			this.setState( { contentCSS: optionsData[ selectedItem ], customKey: selectedItem, isAddingCustom: true } );
		}
	}

	setVariables( id ) {
		const { settingsPanel } = this.props;
		const { optionsData, customKey, contentCSS } = this.state;
		let fontData = {};
		let variables = '';
		let isCustom = false;

		if ( settingsPanel ) {
			return;
		}

		if ( typeof id === 'undefined' ) {
			id = customKey;
		}

		if ( typeof Fonts[ id ] !== 'undefined' ) {
			fontData = Fonts[ id ];
		} else if ( typeof optionsData[ id ] !== 'undefined' ) {
			fontData = optionsData[ id ];
			isCustom = true;
		}

		if ( fontData ) {
			document.body.classList.add( 'ek-has-typography' );
		}

		//reset classes
		document.body.classList.remove( 'ek-has-content-font-family' );
		document.body.classList.remove( 'ek-has-body-font-family' );
		document.body.classList.remove( 'ek-has-content-font-weight' );
		document.body.classList.remove( 'ek-has-content-font-size' );
		document.body.classList.remove( 'ek-has-content-line-height' );
		document.body.classList.remove( 'ek-has-content-letter-spacing' );
		document.body.classList.remove( 'ek-has-header-font-family' );
		document.body.classList.remove( 'ek-has-button-font-family' );
		document.body.classList.remove( 'ek-has-button-font-weight' );
		document.body.classList.remove( 'ek-has-button-text-transform' );

		const wrapFontFamily = ( family ) => {
			if ( isCustom ) {
				return "'" + family + "'";
			}

			return family;
		};

		if ( typeof fontData.content !== 'undefined' ) {
			const content = fontData.content;

			if ( content[ 'font-family' ] ) {
				variables += '--ek-font-family:' + wrapFontFamily( content[ 'font-family' ] ) + ';';
				document.body.classList.add( 'ek-has-content-font-family' );
			}

			if ( content.body ) {
				document.body.classList.add( 'ek-has-body-font-family' );
			}

			if ( content[ 'font-weight' ] ) {
				variables += '--ek-font-weight:' + content[ 'font-weight' ] + ';';
				document.body.classList.add( 'ek-has-content-font-weight' );
			}

			if ( content[ 'font-size' ] ) {
				variables += '--ek-font-size:' + content[ 'font-size' ] + content[ 'font-size-unit' ] + ';';
				document.body.classList.add( 'ek-has-content-font-size' );
			}

			if ( content[ 'line-height' ] ) {
				variables += '--ek-line-height:' + content[ 'line-height' ] + content[ 'line-height-unit' ] + ';';
				document.body.classList.add( 'ek-has-content-line-height' );
			}

			if ( content[ 'letter-spacing' ] ) {
				variables += '--ek-letter-spacing:' + content[ 'letter-spacing' ] + content[ 'letter-spacing-unit' ] + ';';
				document.body.classList.add( 'ek-has-content-letter-spacing' );
			}
		}

		if ( typeof fontData.heading !== 'undefined' ) {
			const heading = fontData.heading;

			if ( heading[ 'font-family' ] ) {
				variables += '--ek-heading-font-family:' + wrapFontFamily( heading[ 'font-family' ] ) + ';';
				document.body.classList.add( 'ek-has-header-font-family' );
			}

			if ( heading[ 'font-weight' ] ) {
				variables += '--ek-heading-font-weight:' + heading[ 'font-weight' ] + ';';
			}
		}

		map( contentCSS.heading, ( headingData, headingType ) => {
			document.body.classList.remove( 'ek-has-' + headingType + '-font-size' );
			document.body.classList.remove( 'ek-has-' + headingType + '-line-height' );
			document.body.classList.remove( 'ek-has-' + headingType + '-letter-spacing' );
			document.body.classList.remove( 'ek-apply-' + headingType + '-to-title' );

			if ( typeof fontData.heading !== 'undefined' && typeof fontData.heading[ headingType ] !== 'undefined' ) {
				const innerHeading = fontData.heading[ headingType ];

				if ( innerHeading[ 'font-weight' ] ) {
					variables += '--ek-' + headingType + '-font-weight:' + innerHeading[ 'font-weight' ] + ';';
					document.body.classList.add( 'ek-has-' + headingType + '-font-weight' );
				}

				if ( innerHeading[ 'font-size' ] ) {
					variables += '--ek-' + headingType + '-font-size:' + innerHeading[ 'font-size' ] + innerHeading[ 'font-size-unit' ] + ';';
					document.body.classList.add( 'ek-has-' + headingType + '-font-size' );
				}

				if ( innerHeading[ 'line-height' ] ) {
					variables += '--ek-' + headingType + '-line-height:' + innerHeading[ 'line-height' ] + innerHeading[ 'line-height-unit' ] + ';';
					document.body.classList.add( 'ek-has-' + headingType + '-line-height' );
				}

				if ( innerHeading[ 'letter-spacing' ] ) {
					variables += '--ek-' + headingType + '-letter-spacing:' + innerHeading[ 'letter-spacing' ] + innerHeading[ 'letter-spacing-unit' ] + ';';
					document.body.classList.add( 'ek-has-' + headingType + '-letter-spacing' );
				}

				if ( innerHeading[ 'text-transform' ] ) {
					variables += '--ek-' + headingType + '-text-transform:' + innerHeading[ 'text-transform' ] + ';';
					document.body.classList.add( 'ek-has-' + headingType + '-text-transform' );
				}

				if ( innerHeading.title ) {
					document.body.classList.add( 'ek-apply-' + headingType + '-to-title' );
				}
			}
		} );

		if ( typeof fontData.button !== 'undefined' ) {
			const button = fontData.button;

			if ( button[ 'font-family' ] ) {
				variables += '--ek-button-font-family:' + wrapFontFamily( button[ 'font-family' ] ) + ';';
				document.body.classList.add( 'ek-has-button-font-family' );
			}

			if ( button[ 'font-weight' ] ) {
				variables += '--ek-button-font-weight:' + button[ 'font-weight' ] + ';';
				document.body.classList.add( 'ek-has-button-font-weight' );
			}

			if ( button[ 'font-size' ] ) {
				variables += '--ek-button-font-size:' + button[ 'font-size' ] + button[ 'font-size-unit' ] + ';';
				document.body.classList.add( 'ek-has-button-font-size' );
			}

			if ( button[ 'line-height' ] ) {
				variables += '--ek-button-line-height:' + button[ 'line-height' ] + button[ 'line-height-unit' ] + ';';
				document.body.classList.add( 'ek-has-button-line-height' );
			}

			if ( button[ 'letter-spacing' ] ) {
				variables += '--ek-button-letter-spacing:' + button[ 'letter-spacing' ] + button[ 'letter-spacing-unit' ] + ';';
				document.body.classList.add( 'ek-has-button-letter-spacing' );
			}

			if ( button[ 'text-transform' ] ) {
				variables += '--ek-button-text-transform:' + button[ 'text-transform' ] + ';';
				document.body.classList.add( 'ek-has-button-text-transform' );
			}
		}

		stylesElement.innerHTML = 'body{' + variables + '}';
	}

	createCSS( savedOption ) {
		const { settingsPanel } = this.props;
		let { contentCSS } = this.state;

		if ( settingsPanel ) {
			return;
		}

		if ( savedOption ) {
			contentCSS = savedOption;
		}

		//add fonts
		let googleFontData = googleLink;
		if ( contentCSS.fonts ) {
			map( contentCSS.fonts, ( fontProp ) => {
				if ( fontProp ) {
					googleFontData += fontProp.name.replace( ' ', '+' ) + ':' + fontProp.weights + '|';
				}
			} );
		}
		if ( googleFontData !== googleLink ) {
			link.href = googleFontData.slice( 0, -1 );
		}

		document.head.appendChild( link );
	}

	createMeta( syntax, value, category, level ) {
		let { contentCSS } = this.state;

		if ( level ) {
			let headingLevel = Object.assign( {}, contentCSS[ category ][ level ] );
			headingLevel = Object.assign( headingLevel, { [ syntax ]: value } );
			contentCSS[ category ][ level ] = headingLevel;
		} else if ( ! category ) {
			contentCSS = Object.assign( contentCSS, { [ syntax ]: value } );
		} else {
			let categoryLevel = Object.assign( {}, contentCSS[ category ] );
			categoryLevel = Object.assign( categoryLevel, { [ syntax ]: value } );
			contentCSS[ category ] = categoryLevel;
		}

		// Add Google Font data on selected Font Family
		if ( 'font-family' === syntax ) {
			contentCSS.fonts[ category ] = find( GoogleFonts.fonts, [ 'name', value ] );
		}

		this.setVariables();
		this.setState( { contentCSS } );

		this.saveMeta( contentCSS );
	}

	updateState( key, value ) {
		this.setState( { [ key ]: value } );
	}

	saveMeta( contentCSS ) {
		const { onFontSelection } = this.props;
		let { optionsData, customKey } = this.state;

		if ( ! customKey || customKey === '' ) {
			customKey = new Date().valueOf();
			this.setState( {
				customKey,
			} );
		}

		optionsData = Object.assign( optionsData, { [ customKey ]: contentCSS } );

		//load fonts
		this.createCSS( contentCSS, customKey );

		//save meta
		onFontSelection( contentCSS, customKey );

		const model = new wp.api.models.Settings( {
			editorskit_typography_custom: JSON.stringify( optionsData ),
		} );

		model.save().then( () => {
			this.setState( {
				optionsSaved: true,
				optionsData,
				customKey,
			} );

			settings.fetch();
		} );
	}

	getValue( category, key, level ) {
		const { contentCSS } = this.state;
		if ( level ) {
			if ( typeof contentCSS[ category ] !== 'undefined' && typeof contentCSS[ category ][ level ] !== 'undefined' && typeof contentCSS[ category ][ level ][ key ] !== 'undefined' ) {
				return contentCSS[ category ][ level ][ key ];
			}
		} else if ( typeof contentCSS[ category ] !== 'undefined' && typeof contentCSS[ category ][ key ] !== 'undefined' ) {
			return contentCSS[ category ][ key ];
		}

		return '';
	}

	onDelete() {
		const { noticeMessage } = this.props;
		const { itemSelected, optionsData } = this.state;

		delete optionsData[ itemSelected ];

		const model = new wp.api.models.Settings( {
			editorskit_typography_custom: JSON.stringify( optionsData ),
		} );

		model.save().then( () => {
			this.setState( {
				isDeleting: false,
				optionsData,
			} );
			settings.fetch();
		} );

		noticeMessage( __( 'Item successfully deleted.', 'editorskit-typography-addon' ) );
	}

	onSetDefault( isRemoving = false ) {
		const { noticeMessage } = this.props;
		const { optionsData, itemSelected, applyToAll } = this.state;

		let meta = {};

		if ( typeof optionsData[ itemSelected ] !== 'undefined' ) {
			meta = optionsData[ itemSelected ];
		} else if ( typeof Fonts[ itemSelected ] !== 'undefined' ) {
			meta = Fonts[ itemSelected ];
		}

		let defaultTypography = { itemSelected, applyToAll, meta };

		if ( isRemoving ) {
			defaultTypography = {};
		}

		const model = new wp.api.models.Settings( {
			editorskit_typography_default: JSON.stringify( defaultTypography ),
		} );

		model.save().then( () => {
			this.setState( {
				isSettingDefault: false,
				isRemovingDefault: false,
				defaultTypography,
			} );
			settings.fetch();
		} );

		noticeMessage( __( 'Default Typography Successfully Set.', 'editorskit-typography-addon' ) );
	}

	render() {
		const {
			onFontSelection,
			removeFontSelection,
			postmeta,
			settingsPanel,
		} = this.props;

		let currentMetaId = '';

		if ( ! this.state.optionsFetched ) {
			return (
				<Fragment>
					<p className="ek-fetching-typography">{ __( 'Fetching Typography Data.....', 'editorskit-typography-addon' ) }</p>
				</Fragment>
			);
		}

		if ( typeof postmeta !== 'undefined' ) {
			const { _editorskit_typography_data } = postmeta; // eslint-disable-line camelcase

			if ( typeof _editorskit_typography_data.meta !== 'undefined' && typeof _editorskit_typography_data.meta.id !== 'undefined' ) {
				currentMetaId = _editorskit_typography_data.meta.id;
			}
		}

		const { isAddingCustom, contentCSS, optionsData, customKey, searchKeyword, isDeleting, isSettingDefault, isRemovingDefault, defaultTypography } = this.state;

		const selectOptions = () => {
			return [
				{ label: __( 'Select Google Font', 'editorskit-typography-addon' ), value: '' },
				{ label: __( 'Arial', 'editorskit-typography-addon' ), value: 'Arial' },
				{ label: __( 'Helvetica', 'editorskit-typography-addon' ), value: 'Helvetica' },
				{ label: __( 'Times New Roman', 'editorskit-typography-addon' ), value: 'Times New Roman' },
				{ label: __( 'Georgia', 'editorskit-typography-addon' ), value: 'Georgia' },
				...GoogleFonts.fonts.map( ( { name } ) => ( { label: name, value: name } ) ),
			];
		};

		if ( ! currentMetaId && ! customKey && typeof defaultTypography !== 'undefined' && defaultTypography && typeof defaultTypography.itemSelected !== 'undefined' ) {
			currentMetaId = defaultTypography.itemSelected;
		}

		const transformOptions = () => {
			return [
				{ label: __( 'Select Text Transform', 'editorskit-typography-addon' ), value: '' },
				{ label: __( 'None', 'editorskit-typography-addon' ), value: 'none' },
				{ label: __( 'Capitalize', 'editorskit-typography-addon' ), value: 'capitalize' },
				{ label: __( 'Uppercase', 'editorskit-typography-addon' ), value: 'uppercase' },
				{ label: __( 'Lowercase', 'editorskit-typography-addon' ), value: 'lowercase' },
				{ label: __( 'Initial', 'editorskit-typography-addon' ), value: 'initial' },
				{ label: __( 'Inherit', 'editorskit-typography-addon' ), value: 'inherit' },
			];
		};

		const fontWeightOptions = ( fontName ) => {
			const googleFontWeights = find( GoogleFonts.fonts, [ 'name', fontName ] );

			const fontWeights = [
				{ label: __( 'Select Font Weight', 'editorskit-typography-addon' ), value: '' },
			];

			if ( typeof googleFontWeights !== 'undefined' && typeof googleFontWeights.weights !== 'undefined' ) {
				map( googleFontWeights.weights.split( ',' ), ( weight ) => {
					if ( weight && ! weight.includes( 'i' ) ) {
						fontWeights.push( { label: weight, value: parseInt( weight ) } );
					}
				} );
			}
			return fontWeights;
		};

		if ( ! isAddingCustom ) {
			return (
				<Fragment>
					{ ! settingsPanel ?
						<Button
							isPrimary
							isLarge
							className="editorskit-typography--custom-button"
							onClick={ () => {
								this.setState( {
									isAddingCustom: true, customKey: '',
									contentCSS: {
										content: defaultUnits,
										heading: {
											H1: defaultUnits,
											H2: defaultUnits,
											H3: defaultUnits,
											H4: defaultUnits,
											H5: defaultUnits,
											H6: defaultUnits,
										},
										button: defaultUnits,
										fonts: {},
									},
								} );
							} }>
							<span>{ __( 'Create Custom Combination', 'editorskit-typography-addon' ) }</span>
						</Button> : null }

					<TextControl
						className="editorskit-typography-search"
						placeholder={ __( 'Search', 'editorskit-typography-addon' ) }
						onChange={ ( keyword ) => {
							this.setState( { searchKeyword: keyword.toLowerCase() } );
						} }
					/>
					<div className="editorskit-typography-selection">
						<ul className="editorskit-typography--items">
							{ typeof optionsData !== undefined && optionsData ?
								map( optionsData, ( fontCustom, id ) => {
									if ( searchKeyword && (
										fontCustom.name.toLowerCase().includes( searchKeyword ) ||
										( typeof fontCustom.heading[ 'font-family' ] !== 'undefined' && fontCustom.heading[ 'font-family' ].toLowerCase().includes( searchKeyword ) ) ||
										( typeof fontCustom.content[ 'font-family' ] !== 'undefined' && fontCustom.content[ 'font-family' ].toLowerCase().includes( searchKeyword ) ) ||
										( typeof fontCustom.button[ 'font-family' ] !== 'undefined' && fontCustom.button[ 'font-family' ].toLowerCase().includes( searchKeyword ) )
									) ) {
										//do nothing
									} else if ( searchKeyword ) {
										return false;
									}

									return (
										<li className={ classnames(
											'editorskit-typography--item',
											'editorskit-typography--item__custom',
											( parseInt( id ) === parseInt( currentMetaId ) || ( ! currentMetaId && customKey === id ) ) ? 'editorskit-typography--item__current' : null,
										) }>
											<Button onClick={ () => {
												if ( id === currentMetaId || ( ! currentMetaId && customKey === id ) ) {
													removeFontSelection();
													this.updateState( 'customKey', '' );
												} else {
													this.setVariables( id );
													this.createCSS( fontCustom, id );
													onFontSelection( fontCustom, id );
												}
											} }>
												<span>{ fontCustom.name }</span>
												<span className="editorskit-typography--item__custom-fonts">
													{ map( fontCustom, ( fontCustomData ) => {
														if ( typeof fontCustomData[ 'font-family' ] !== 'undefined' ) {
															return (
																<span>
																	{ fontCustomData[ 'font-family' ] }
																</span>
															);
														}
													} ) }
												</span>
											</Button>
											<TypographyDropdownMenu { ...this.props } itemType="custom" selectedItem={ id } onDelete={ this.onDelete } onToggle={ this.onToggle } Fonts={ Fonts } GoogleFonts={ GoogleFonts } updateState={ this.updateState } contentCSS={ fontCustom } setVariables={ this.setVariables } currentMetaId={ currentMetaId } saveMeta={ this.saveMeta } />
										</li>
									);
								} ) :
								'' }
							{ map( Fonts, ( font, i ) => {
								if ( searchKeyword && ! font.name.toLowerCase().includes( searchKeyword ) ) {
									return false;
								}
								return (
									<li className={ classnames(
										'editorskit-typography--item',
										'editorskit-typography--item__default',
										'editorskit-typography--item-' + i,
										i === currentMetaId ? 'editorskit-typography--item__current' : null,
									) }>
										<Button onClick={ () => {
											if ( settingsPanel ) {
												return;
											}

											if ( i === currentMetaId ) {
												removeFontSelection();
											} else {
												const googleFont = googleLink + font.fonts.join( '|' );

												// Set CSS variables
												this.setVariables( i );

												link.href = googleFont;
												document.head.appendChild( link );

												//save meta
												onFontSelection( font, i );
											}
										} }>
											<span>{ font.name }</span>
											<img src={ window.editorskitInfo.plugin.url + '/build/images/combinations/' + font.name + '.png' } alt={ font.name } />
										</Button>

										<TypographyDropdownMenu { ...this.props } itemType="default" selectedItem={ i } onToggle={ this.onToggle } Fonts={ Fonts } GoogleFonts={ GoogleFonts } updateState={ this.updateState } setVariables={ this.setVariables } currentMetaId={ currentMetaId } saveMeta={ this.saveMeta } />
									</li>
								);
							} ) }
						</ul>
					</div>
					{ isDeleting && (
						<Modal
							className="editorskit-delete-typography-modal"
							title={ __( 'Delete Confirmation', 'editorskit-typography-addon' ) }
							onRequestClose={ () => {
								this.updateState( 'isDeleting', false );
							} }
						>
							<p>{ __( 'Are you sure you want to delete this item?', 'editorskit-typography-addon' ) }</p>
							<Button
								isLarge
								isDestructive
								onClick={ this.onDelete }>
								{ __( 'Yes, Delete', 'editorskit-typography-addon' ) }
							</Button>
							<Button
								isDefault
								onClick={ () => {
									this.updateState( 'isDeleting', false );
								} }>
								{ __( 'No, Cancel', 'editorskit-typography-addon' ) }
							</Button>
						</Modal>
					) }
					{ isSettingDefault && (
						<Modal
							className="editorskit-default-typography-modal"
							title={ __( 'Set as Default Fonts', 'editorskit-typography-addon' ) }
							onRequestClose={ () => {
								this.updateState( 'isSettingDefault', false );
							} }
						>
							<p>{ __( 'Setting default typography will save you time when creating new posts or pages.', 'editorskit-typography-addon' ) }</p>
							<p className="editorskit-notice-box">{ __( 'Take note that this option will apply your selected default typography to old posts, post types and pages on your website without the need for you to edit them on the Gutenberg editor manually.', 'editorskit-typography-addon' ) }</p>

							<Button
								isLarge
								isPrimary
								onClick={ () => {
									this.onSetDefault();
								} }>
								{ __( 'Yes, Set as Default', 'editorskit-typography-addon' ) }
							</Button>
							<Button
								isDefault
								onClick={ () => {
									this.updateState( 'isSettingDefault', false );
								} }>
								{ __( 'No, Cancel', 'editorskit-typography-addon' ) }
							</Button>
						</Modal>
					) }
					{ isRemovingDefault && (
						<Modal
							className="editorskit-default-typography-modal"
							title={ __( 'Remove Default Fonts', 'editorskit-typography-addon' ) }
							onRequestClose={ () => {
								this.updateState( 'isRemovingDefault', false );
							} }
						>
							<p>{ __( 'Are you sure you want to remove this item as default typography?', 'editorskit-typography-addon' ) }</p>

							<Button
								isLarge
								isPrimary
								onClick={ () => {
									this.onSetDefault( true );
								} }>
								{ __( 'Yes, Set Remove Default', 'editorskit-typography-addon' ) }
							</Button>
							<Button
								isDefault
								onClick={ () => {
									this.updateState( 'isRemovingDefault', false );
								} }>
								{ __( 'No, Cancel', 'editorskit-typography-addon' ) }
							</Button>
						</Modal>
					) }
				</Fragment>
			);
		}
		return (
			<Fragment >
				<div className="editorskit-typography-custom">
					<Button isDefault className="editorskit-typography-back-btn" onClick={ () => {
						this.setState( { isAddingCustom: false, searchKeyword: '', customKey: '' } );
					} }>
						<span>‹ { __( 'Back', 'editorskit-typography-addon' ) } </span>
					</Button>
					<TextControl
						className="editorskit-typography-custom--name"
						label={ __( 'Name', 'editorskit-typography-addon' ) }
						value={ typeof contentCSS.name !== 'undefined' ? contentCSS.name : customKey }
						onChange={ ( newName ) => {
							this.createMeta( 'name', newName );
						} }
					/>
					<TextControl
						className="editorskit-typography-custom--key"
						type="hidden"
						// value={typeof contentCSS['key'] !== 'undefined' ? contentCSS['font-selected'] : ''}
					/>

					<PanelBody
						title={ __( 'Content Typography', 'editorskit-typography-addon' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Google Fonts', 'editorskit-typography-addon' ) }
							options={ selectOptions() }
							value={ this.getValue( 'content', 'font-family' ) }
							onChange={ ( selectedValue ) => {
								this.createMeta( 'font-family', selectedValue, 'content' );
							} }
						/>
						{
							fontWeightOptions( this.getValue( 'content', 'font-family' ) ) && fontWeightOptions( this.getValue( 'content', 'font-family' ) ).length > 1 ?
								<SelectControl
									label={ __( 'Font Weight', 'editorskit-typography-addon' ) }
									options={ fontWeightOptions( this.getValue( 'content', 'font-family' ) ) }
									value={ this.getValue( 'content', 'font-weight' ) }
									onChange={ ( selectedWeight ) => {
										this.createMeta( 'font-weight', parseInt( selectedWeight ), 'content' );
									} }
								/> :
								''
						}
						<UnitControl
							label={ __( 'Font Size', 'editorskit-typography-addon' ) }
							elementType="content"
							syntax="font-size"
							createMeta={ this.createMeta }
							value={ this.getValue( 'content', 'font-size' ) }
							unit={ this.getValue( 'content', 'font-size-unit' ) }
						/>
						<UnitControl
							label={ __( 'Line Height', 'editorskit-typography-addon' ) }
							elementType="content"
							syntax="line-height"
							createMeta={ this.createMeta }
							value={ this.getValue( 'content', 'line-height' ) }
							unit={ this.getValue( 'content', 'line-height-unit' ) }
						/>
						<UnitControl
							label={ __( 'Letter Spacing', 'editorskit-typography-addon' ) }
							elementType="content"
							syntax="letter-spacing"
							createMeta={ this.createMeta }
							value={ this.getValue( 'content', 'letter-spacing' ) }
							unit={ this.getValue( 'content', 'letter-spacing-unit' ) }
						/>
						<CheckboxControl
							label={ __( 'Apply Font Family to whole page', 'editorskit-typography-addon' ) }
							checked={ this.getValue( 'content', 'body' ) ? true : false }
							help={ __( 'Check this option to apply the selected font family to <body> instead of just content.', 'editorskit-typography-addon' ) }
							onChange={ ( selectedTransform ) => {
								this.createMeta( 'body', selectedTransform, 'content' );
							} }
						/>
					</PanelBody>

					<PanelBody
						title={ __( 'Heading Typography', 'editorskit-typography-addon' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Google Fonts', 'editorskit-typography-addon' ) }
							options={ selectOptions() }
							value={ this.getValue( 'heading', 'font-family' ) }
							onChange={ ( selectedValue ) => {
								this.createMeta( 'font-family', selectedValue, 'heading' );
							} }
						/>

						<TabPanel className="editorskit-typography-tab-panel"
							activeClass="active-tab"
							// onSelect={onSelect}
							tabs={ [
								{
									name: 'editorskit-typography-h1',
									title: <HeadingLevelIcon level={ 1 } />,
									className: 'editorskit-typography-h1',
									level: 'H1',
								},
								{
									name: 'editorskit-typography-h2',
									title: <HeadingLevelIcon level={ 2 } />,
									className: 'editorskit-typography-h2',
									level: 'H2',
								},
								{
									name: 'editorskit-typography-h3',
									title: <HeadingLevelIcon level={ 3 } />,
									className: 'editorskit-typography-h3',
									level: 'H3',
								},
								{
									name: 'editorskit-typography-h4',
									title: <HeadingLevelIcon level={ 4 } />,
									className: 'editorskit-typography-h4',
									level: 'H4',
								},
								{
									name: 'editorskit-typography-h5',
									title: <HeadingLevelIcon level={ 5 } />,
									className: 'editorskit-typography-h5',
									level: 'H5',
								},
								{
									name: 'editorskit-typography-h6',
									title: <HeadingLevelIcon level={ 6 } />,
									className: 'editorskit-typography-h6',
									level: 'H6',
								},
							] }>
							{
								( tab ) => {
									const headingFontName = this.getValue( 'heading', 'font-family' );
									return (
										<Fragment>
											{
												fontWeightOptions( headingFontName ) && fontWeightOptions( headingFontName ).length > 1 ?
													<SelectControl
														label={ sprintf(
															__( 'Font Weight (%s)', 'editorskit-typography-addon' ),
															tab.level
														) }
														options={ fontWeightOptions( headingFontName ) }
														value={ this.getValue( 'heading', 'font-weight', tab.level ) }
														onChange={ ( selectedTransform ) => {
															this.createMeta( 'font-weight', parseInt( selectedTransform ), 'heading', tab.level );
														} }
													/> :
													''
											}
											<UnitControl
												label={ sprintf(
													__( 'Font Size (%s)', 'editorskit-typography-addon' ),
													tab.level
												) }
												syntax="font-size"
												createMeta={ this.createMeta }
												value={ this.getValue( 'heading', 'font-size', tab.level ) }
												unit={ this.getValue( 'heading', 'font-size-unit', tab.level ) }
												elementType="heading"
												level={ tab.level }
											/>
											<UnitControl
												label={ sprintf(
													__( 'Line Height (%s)', 'editorskit-typography-addon' ),
													tab.level
												) }
												syntax="line-height"
												createMeta={ this.createMeta }
												value={ this.getValue( 'heading', 'line-height', tab.level ) }
												unit={ this.getValue( 'heading', 'line-height-unit', tab.level ) }
												elementType="heading"
												level={ tab.level }
											/>
											<UnitControl
												label={ sprintf(
													__( 'Letter Spacing (%s)', 'editorskit-typography-addon' ),
													tab.level
												) }
												syntax="letter-spacing"
												createMeta={ this.createMeta }
												value={ this.getValue( 'heading', 'letter-spacing', tab.level ) }
												unit={ this.getValue( 'heading', 'letter-spacing-unit', tab.level ) }
												elementType="heading"
												level={ tab.level }
											/>
											<SelectControl
												label={ sprintf(
													__( 'Text Transform (%s)', 'editorskit-typography-addon' ),
													tab.level
												) }
												options={ transformOptions() }
												value={ this.getValue( 'heading', 'text-transform', tab.level ) }
												onChange={ ( selectedTransform ) => {
													this.createMeta( 'text-transform', selectedTransform, 'heading', tab.level );
												} }
											/>
											{ tab.level === 'H1' ?
												<CheckboxControl
													label={ __( 'Apply to Title', 'editorskit-typography-addon' ) }
													checked={ this.getValue( 'heading', 'title', tab.level ) ? true : false }
													onChange={ ( selectedTransform ) => {
														this.createMeta( 'title', selectedTransform, 'heading', tab.level );
													} }
												/> : null
											}
										</Fragment>
									);
								}
							}
						</TabPanel>
					</PanelBody>

					<PanelBody
						title={ __( 'Buttons Typography', 'editorskit-typography-addon' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'Google Fonts', 'editorskit-typography-addon' ) }
							options={ selectOptions() }
							value={ this.getValue( 'button', 'font-family' ) }
							onChange={ ( selectedValue ) => {
								this.createMeta( 'font-family', selectedValue, 'button' );
							} }
						/>
						{
							fontWeightOptions( this.getValue( 'button', 'font-family' ) ) && fontWeightOptions( this.getValue( 'button', 'font-family' ) ).length > 1 ?
								<SelectControl
									label={ __( 'Font Weight', 'editorskit-typography-addon' ) }
									options={ fontWeightOptions( this.getValue( 'button', 'font-family' ) ) }
									value={ this.getValue( 'button', 'font-weight' ) }
									onChange={ ( selectedWeight ) => {
										this.createMeta( 'font-weight', parseInt( selectedWeight ), 'button' );
									} }
								/> :
								''
						}
						<UnitControl
							label={ __( 'Font Size', 'editorskit-typography-addon' ) }
							syntax="font-size"
							createMeta={ this.createMeta }
							value={ this.getValue( 'button', 'font-size' ) }
							unit={ this.getValue( 'button', 'font-size-unit' ) }
							elementType="button"
						/>
						<UnitControl
							label={ __( 'Line Height', 'editorskit-typography-addon' ) }
							syntax="line-height"
							createMeta={ this.createMeta }
							value={ this.getValue( 'button', 'line-height' ) }
							unit={ this.getValue( 'button', 'line-height-unit' ) }
							elementType="button"
						/>
						<UnitControl
							label={ __( 'Letter Spacing', 'editorskit-typography-addon' ) }
							syntax="letter-spacing"
							createMeta={ this.createMeta }
							value={ this.getValue( 'button', 'letter-spacing' ) }
							unit={ this.getValue( 'button', 'letter-spacing-unit' ) }
							elementType="button"
						/>
						<SelectControl
							label={ __( 'Text Transform', 'editorskit-typography-addon' ) }
							options={ transformOptions() }
							value={ this.getValue( 'button', 'text-transform' ) }
							onChange={ ( selectedTransform ) => {
								this.createMeta( 'text-transform', selectedTransform, 'button' );
							} }
						/>
					</PanelBody>

				</div>
			</Fragment >
		);
	}
}

export default compose( [
	withSelect( ( select ) => {
		return {
			postmeta: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { createNotice } = dispatch( 'core/notices' );

		return {
			onFontSelection( fontData, key ) {
				dispatch( 'core/editor' ).editPost( {
					meta: {
						_editorskit_typography_data: key ? { meta: { id: key, data: fontData } } : { meta: fontData },
					},
				} );
			},
			removeFontSelection() {
				dispatch( 'core/editor' ).editPost( {
					meta: {
						_editorskit_typography_data: { meta: { disabled: true } },
					},
				} );

				document.body.classList.remove( 'ek-has-typography' );
			},
			noticeMessage( message ) {
				createNotice(
					'info',
					message,
					{
						isDismissible: true,
						type: 'snackbar',
					}
				);
			},
		};
	} ),
	withSpokenMessages,
] )( TypographySelection );
