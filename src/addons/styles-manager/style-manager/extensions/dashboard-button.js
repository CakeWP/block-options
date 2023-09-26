/**
 * WordPress Dependencies
 */
import { get } from 'lodash';
import { wordpress } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { __experimentalMainDashboardButton as MainDashboardButton } from '@wordpress/edit-post';

const EKBackToStylesManagerDashboardButton = () => {
	const dashboardURI = get(
		window,
		'gutenberghubStylesManager.stylesManagerUrl',
		'#'
	);

	return (
		<MainDashboardButton>
			<Button
				isPressed
				iconSize={30}
				icon={wordpress}
				href={dashboardURI}
				style={{ padding: 31 }}
			/>
		</MainDashboardButton>
	);
};

registerPlugin('ek-back-to-styles-manager-button', {
	render: EKBackToStylesManagerDashboardButton,
});
