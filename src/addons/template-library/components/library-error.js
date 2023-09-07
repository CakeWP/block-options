import { Button } from '@wordpress/components';
import { isFunction } from 'lodash';
import React from 'react';

function LibraryError( props ) {
	const hasReset = isFunction( props?.onReset );

	return (
		<div className="gutenberghub-template-library-error">
			<h3>Something Went Wrong</h3>
			{ hasReset ? (
				<Button variant="link" onClick={ props.onReset }>
					Try Again
				</Button>
			) : null }
		</div>
	);
}

export default LibraryError;
