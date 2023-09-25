import React from 'react';
import { truncate, isEmpty } from 'lodash';

import { __ } from '@wordpress/i18n';
import {
	DropdownMenu,
	Modal,
	Button,
	ToggleControl,
	Spinner,
} from '@wordpress/components';
import { trash, fullscreen, edit, moreVertical, stack } from '@wordpress/icons';
import { addQueryArgs } from '@wordpress/url';
import { useState } from '@wordpress/element';

import { useMutation } from 'react-query';

import client from '../../client';
import { getEditPostLink } from '../../utils';
import useManager from '../../store/manager.store';
import deletePost from '../../services/delete-post';
import togglePostStatus from '../../services/toggle-post-status';
import useNotices from '../../store/notice.store';

function Post(props) {
	const [isFullScreen, setFullScreen] = useState(false);
	const [askDelete, setAskDelete] = useState(false);

	const currentPost = props.post;
	const activeTerm = useManager((state) => state.activeTerm);
	const createNotice = useNotices((state) => state.addNotice);

	const editPostLink = getEditPostLink(currentPost.id, activeTerm);

	// @ts-ignore
	const isActive = currentPost.meta?.gsm_active ?? false;

	const { mutate: deleteCurrentPost, isLoading: isDeleting } = useMutation(
		() =>
			deletePost({
				id: currentPost.id,
				postType: 'gsm_styles',
			}),
		{
			onSuccess: () => {
				client.invalidateQueries('posts');
				setAskDelete(false);
			},
			onError: () => {
				setAskDelete(false);
				createNotice({
					status: 'error',
					title: __(
						'Something went wrong when deleting the style.',
						'gutenberghub-styles-manager'
					),
				});
			},
		}
	);

	const { mutate: toggleStatus, isLoading: isToggling } = useMutation(
		() =>
			togglePostStatus({
				id: currentPost.id,
				postType: 'gsm_styles',
				currentStatus: isActive,
			}),
		{
			onSuccess: () => {
				client.invalidateQueries(['posts']);
			},

			onError: () => {
				createNotice({
					status: 'error',
					title: __(
						'Something went wrong when deactivate the style.',
						'gutenberghub-styles-manager'
					),
				});
			},
		}
	);

	const previewLink = addQueryArgs(currentPost.link, { preview: true });

	return (
		<div className="gsm-card-wrapper">
			<div className="gsm-card-item">
				<div className="gsm-style-preview-iframe">
					<iframe scrolling="no" src={previewLink} />
				</div>
				<div className="gsm-info-wrapper">
					<div className="gsm-style-preview-title">
						{isToggling ? (
							<Spinner />
						) : (
							<ToggleControl
								label={null}
								checked={isActive}
								onChange={() => toggleStatus()}
							/>
						)}

						<span>
							{!isEmpty(currentPost.title.rendered)
								? truncate(currentPost.title.rendered, {
										length: 20,
										omission: '...',
								  })
								: __(
										'Untitled Style',
										'gutenberghub-styles-manager'
								  )}
						</span>
					</div>
					<div className="gsm-action-buttons-wrapper">
						<Button
							showTooltip
							icon={edit}
							href={editPostLink}
							target="_blank"
							label={__('Edit', 'gutenberghub-styles-manager')}
						/>

						<Button
							icon={fullscreen}
							showTooltip
							onClick={() => setFullScreen(true)}
							label={__(
								'Fullscreen',
								'gutenberghub-styles-manager'
							)}
						/>

						<DropdownMenu
							icon={moreVertical}
							label={__(
								'More Actions',
								'gutenberghub-styles-manager'
							)}
							controls={[
								{
									title: __(
										'Delete',
										'gutenberghub-styles-manager'
									),
									icon: trash,
									onClick: () => setAskDelete(true),
								},
							]}
						/>
					</div>
				</div>
			</div>

			{isFullScreen && (
				<Modal
					//@ts-ignore
					isFullScreen
					title={currentPost.title.rendered}
					onRequestClose={() => setFullScreen(false)}
				>
					<div className="gsm-preview-wrapper">
						<iframe scrolling="no" src={currentPost.link} />
					</div>
				</Modal>
			)}

			{askDelete && (
				<Modal
					onRequestClose={() => setAskDelete(false)}
					title={__('Delete Style', 'gutenberghub-styles-manager')}
				>
					<p>
						{__(
							'You wont be able to recover this style, are you sure?',
							'gutenberghub-styles-manager'
						)}
					</p>

					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<Button
							variant="secondary"
							onClick={() => setAskDelete(false)}
						>
							{__('Cancel', 'gutenberghub-styles-manager')}
						</Button>
						<Button
							isDestructive
							variant="primary"
							isBusy={isDeleting}
							style={{ marginLeft: 5 }}
							onClick={() => deleteCurrentPost()}
						>
							{isDeleting
								? __('Deleting', 'gutenberghub-styles-manager')
								: __('Delete', 'gutenberghub-styles-manager')}
						</Button>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default Post;
