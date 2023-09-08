import { get } from "lodash";
import { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";

/**
 * A custom hook that allows fetching of wp settings easier.
 *
 * @param {string} key - Setting key.
 *
 * @return any - Setting value
 */
function useSetting(
	key,
	onSuccess = () => null,
	onUpdateCallback = () => null
) {
	const [fetchedSettings, setFetchedSettings] = useState(null);
	const [status, setStatus] = useState({
		loading: false,
		error: false,
	});

	const [updateStatus, setUpdateStatus] = useState({
		loading: false,
		error: false,
	});

	useEffect(() => {
		setStatus({
			loading: true,
			error: false,
		});

		apiFetch({ path: "/wp/v2/settings" })
			.then((settings) => {
				setFetchedSettings(settings);
				onSuccess(settings[key]);

				setStatus({
					loading: false,
					error: false,
				});
			})
			.catch((error) => {
				setStatus({
					loading: false,
					error: true,
				});
			});
	}, []);

	useEffect(() => {
		const watchUpdate = (e) => {
			setFetchedSettings({
				...fetchedSettings,
				[key]: e.detail?.value,
			});

			onUpdateCallback(e.detail?.value);
		};

		window.addEventListener(`gutenberghub-setting-${key}-updated`, watchUpdate);

		return () =>
			window.removeEventListener(
				`gutenberghub-setting-${key}-updated`,
				watchUpdate
			);
	}, []);

	const onUpdate = (newValue) => {
		setUpdateStatus({
			loading: true,
			error: false,
		});

		apiFetch({
			path: "wp/v2/settings",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-WP-Nonce": wpApiSettings.nonce,
			},
			body: JSON.stringify({ [key]: newValue }),
		})
			.then(() => {
				setFetchedSettings({
					...fetchedSettings,
					[key]: newValue,
				});

				window.dispatchEvent(
					new CustomEvent(`gutenberghub-setting-${key}-updated`, {
						detail: {
							value: newValue,
						},
					})
				);

				setUpdateStatus({
					loading: false,
					error: false,
				});
			})
			.catch(() => {
				setUpdateStatus({
					loading: false,
					error: true,
				});
			});
	};

	return {
		value: get(fetchedSettings, key, null),
		status,
		updateStatus,
		onUpdate,
	};
}

export default useSetting;