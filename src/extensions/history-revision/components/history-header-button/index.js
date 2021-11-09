import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

function HistoryButton() {
	const isEnabled = useSelect( ( select ) => select( 'editorskit/history' ).isHistoryViewOpened() );

	const { setIsHistoryViewOpened } = useDispatch( 'editorskit/history' );

	const toggleHistoryView = () => setIsHistoryViewOpened( ! isEnabled );

	return (
		<Button isPressed={ isEnabled } icon="clock" onClick={ toggleHistoryView } />
	);
}

export default HistoryButton;
