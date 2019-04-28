/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { select } = wp.data;

function PageTemplateBodyClass(){

	if( document.body.classList.contains( 'editorskit-body-class-on' ) ){
		let templateSelector = document.querySelector('.editor-page-attributes__template select');
		let pageTemplate 	 = select('core/editor').getEditedPostAttribute('template')
		let prefix 			 = 'page-template-';

		templateSelector.addEventListener('change',function(){
		    const classes = document.body.className.split(' ').filter( c => !c.startsWith( prefix ) );
		    let selected = templateSelector.options[ templateSelector.selectedIndex ].value;

		    if( !selected ){
		    	selected = 'default';
		    }

		    selected = selected.split('/').join('-');

			document.body.className = classes.join(' ').trim();
		    document.body.classList.add( 'page-template-' + selected.split('.').join('-') );
		});
	}
	
}

wp.domReady( 
	PageTemplateBodyClass
);