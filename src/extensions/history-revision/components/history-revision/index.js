import { Card, CardHeader, CardBody, MenuItem } from '@wordpress/components';
import { dispatch, useSelect } from '@wordpress/data';

function HistoryRevision() {
	const history = useSelect( ( select ) => select( 'editorskit/history' ).getHistory() );

	const undoAt = ( undoEdit ) => {
		dispatch( 'core' ).editEntityRecord( undoEdit.kind, undoEdit.name, undoEdit.recordId, {
			...undoEdit.edits,
			meta: { isUndo: true },
		} );
	};

	return (
		<Card className="editorskit-history-revision-root__panel">
			<CardHeader>
				History
			</CardHeader>
			<CardBody>
				{
					history.map( ( historyItem, index ) => {
						return (
							<MenuItem key={ index } onClick={ () => undoAt( historyItem ) }>
								History Item: { index }
							</MenuItem>
						);
					} )
				}
			</CardBody>
		</Card>
	);
}

export default HistoryRevision;
