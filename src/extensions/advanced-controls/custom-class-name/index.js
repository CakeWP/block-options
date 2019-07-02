/**
 * Internal dependencies
 */
import './styles/editor.scss';
import './styles/style.scss';

/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { withSelect }	= wp.data;
const { compose, createHigherOrderComponent, withState }	= wp.compose;
const { hasBlockSupport }	= wp.blocks;
const { InspectorAdvancedControls }	= wp.blockEditor;
const { TextControl, FormTokenField }	= wp.components;

const enhance = compose(
	withState( {
		customClassNames: [],
	} ),
	withSelect( ( select, block ) => {
		if( block.customClassNames.length < 1 && block.attributes.className && block.attributes.className != '' ){
			// props.attributes.className || ''
			block.setState({ customClassNames: block.attributes.className.split(' ') })
		}
		return {
			suggestions: [ 
				'padding--sm', 
				'sm:padding--sm', 
				'md:padding--sm', 
				'lg:padding--sm',
				'padding--md', 
				'sm:padding--md', 
				'md:padding--md', 
				'lg:padding--md',
				'padding--lg', 
				'sm:padding--lg', 
				'md:padding--lg', 
				'lg:padding--lg',
				'padding--xl', 
				'sm:padding-xl', 
				'md:padding-xl', 
				'lg:padding-xl',
				'flex', 
				'sm:flex', 
				'md:flex', 
				'lg:flex',
				'flex-initial',
				'sm:flex-initial',
				'md:flex-initial',
				'lg:flex-initial',
				'flex-1',
				'sm:flex-1',
				'md:flex-1',
				'lg:flex-1',
				'flex-auto',
				'sm:flex-auto',
				'md:flex-auto',
				'lg:flex-auto',
				'flex-none',
				'sm:flex-none',
				'md:flex-none',
				'lg:flex-none',
				'flex-no-wrap',
				'sm:flex-no-wrap',
				'md:flex-no-wrap',
				'lg:flex-no-wrap',
				'flex-wrap',
				'sm:flex-wrap',
				'md:flex-wrap',
				'lg:flex-wrap',
				'flex-wrap-reverse',
				'sm:flex-wrap-reverse',
				'md:flex-wrap-reverse',
				'lg:flex-wrap-reverse',
				'flex-row',
				'sm:flex-row',
				'md:flex-row',
				'lg:flex-row',
				'flex-row-reverse',
				'sm:flex-row-reverse',
				'md:flex-row-reverse',
				'lg:flex-row-reverse',
				'flex-col',
				'sm:flex-col',
				'md:flex-col',
				'lg:flex-col',
				'flex-col-reverse',
				'sm:flex-col-reverse',
				'md:flex-col-reverse',
				'lg:flex-col-reverse',
				'items-stretch',
				'sm:items-stretch',
				'md:items-stretch',
				'lg:items-stretch',
				'items-start',
				'sm:items-start',
				'md:items-start',
				'lg:items-start',
				'items-center',
				'sm:items-center',
				'md:items-center',
				'lg:items-center',
				'items-end',
				'sm:items-end',
				'md:items-end',
				'lg:items-end',
				'items-baseline',
				'sm:items-baseline',
				'md:items-baseline',
				'lg:items-baseline',
				'justify-start',
				'sm:justify-start',
				'md:justify-start',
				'lg:justify-start',
				'justify-center',
				'sm:justify-center',
				'md:justify-center',
				'lg:justify-center',
				'justify-end',
				'sm:justify-end',
				'md:justify-end',
				'lg:justify-end',
				'justify-between',
				'sm:justify-between',
				'md:justify-between',
				'lg:justify-between',
				'justify-around',
				'sm:justify-around',
				'md:justify-around',
				'lg:justify-around',


			],
		};
	} ),
);


/**
 * Override the default edit UI to include a new block inspector control for
 * assigning the custom class name, if block supports custom class name.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		
		const hasCustomClassName = hasBlockSupport( props.name, 'customClassName', true );

		const {
			customClassNames,
			suggestions,
			setState,
		} = props;
		// console.log( props );
		if ( hasCustomClassName && props.isSelected ) {
			return (
				<Fragment>
					<BlockEdit { ...props } />
					<InspectorAdvancedControls>
						<FormTokenField 
							label={ __( 'Additional CSS Class(es)' ) }
							value={ customClassNames } 
							suggestions={ suggestions } 
							maxSuggestions={ 20 }
							onChange={ ( nextValue ) => {
								props.setAttributes( {
									className: nextValue !== '' ? nextValue : undefined,
								} );

								setState( { customClassNames : nextValue !== '' ? nextValue : undefined } )
							} }
							help={ __( 'Separate multiple classes with spaces.' ) }
						/>
					</InspectorAdvancedControls>
				</Fragment>
			);
		}

		return <BlockEdit { ...props } />;
	});
}, 'withInspectorControl' );

addFilter( 'editor.BlockEdit', 'editorskit/custom-class-name/with-inspector-control', withInspectorControl );