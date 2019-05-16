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
		let genesisLayoutSelector = document.querySelectorAll('.genesis-layout-selector input');
		let pageTemplate 	 = select('core/editor').getEditedPostAttribute('template');
		let postType 		 = select('core/editor').getEditedPostAttribute('type');
		let prefix 			 = postType + '-template-';
		
		if( templateSelector ){
			templateSelector.addEventListener('change',function(){
			    const classes = document.body.className.split(' ').filter( c => !c.startsWith( prefix ) );
			    let selected = templateSelector.options[ templateSelector.selectedIndex ].value;

			    if( !selected ){
			    	selected = 'default';
			    }

			    selected = selected.split('/').join('-');

				document.body.className = classes.join(' ').trim();
			    document.body.classList.add( prefix + selected.split('.').join('-') );
			});
		}


		//add support for Genesis Framework Layouts
		if( genesisLayoutSelector ){
			let selectedLayout = 'default-layout';
		    let prefixLayout   = postType + '-layout-';
		    for (var i = 0, len = genesisLayoutSelector.length; i < len; i++) {
	            genesisLayoutSelector[i].addEventListener('change', function() {
			        if (this.getAttribute('id') !== selectedLayout) {

			        	const bodyClasses = document.body.className.split(' ').filter( c => !c.startsWith( prefixLayout ) );
			            selectedLayout    = this.getAttribute('id');

			            document.body.className = bodyClasses.join(' ').trim();
			    		document.body.classList.add( prefixLayout + selectedLayout.split('.').join('-') );
			        }
			    });
	        }
		}

	}
	
}

wp.domReady( 
	PageTemplateBodyClass
);