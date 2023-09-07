import React from 'react';

import LibrarySidebar from './library-sidebar';
import LibraryTemplates from './library-templates';

function LibraryContent( props ) {
	return (
		<div className="gutenberghub-template-library-content-root">
			<LibrarySidebar />
			<LibraryTemplates connection={ props.connection } />
		</div>
	);
}

export default LibraryContent;
