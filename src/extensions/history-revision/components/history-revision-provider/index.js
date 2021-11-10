/**
 *
 * WordPress Dependencies
 *
 */
import { useSelect } from '@wordpress/data';

import HistoryRevision from '../history-revision';

function HistoryRevisionProvider() {
	const shouldPreview = useSelect( ( select ) => select( 'editorskit/history' ).isHistoryViewOpened() );

	return shouldPreview && (
		<div style={ { width: 350 } }>
			<HistoryRevision />
		</div>
	);
}

export default HistoryRevisionProvider;
