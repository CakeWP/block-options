import React from 'react';
import useNotices from '../../store/notice.store';

/**
 * WordPress Components
 */
import { Snackbar } from '@wordpress/components';

function NoticesProvider() {
	const notices = useNotices((state) => state.notices);
	const removeNotice = useNotices((state) => state.removeNotice);

	return (
		<div className="gsm-notices-root">
			{notices.map((notice) => {
				return (
					<Snackbar
						key={notice.id}
						status={notice.status}
						onDismiss={() => {
							removeNotice(notice.id);
						}}
					>
						{notice.title}
					</Snackbar>
				);
			})}
		</div>
	);
}

export default NoticesProvider;
