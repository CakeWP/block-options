/**
 * External dependencies
 */
import {map} from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { parse, createBlock } = wp.blocks;
const { Fragment, Component } = wp.element;
const { Modal, TabPanel, Button } = wp.components;

const DownloadsModal = ({ onClose, downloads }) => {
	const onSelect = (tabName) => {
		console.log('Selecting tab', tabName);
	};

	const fetchDownload = async ( url ) => {
		console.log(url);
		const response = await fetch(url);

		const data = await response.json();
		if( data ){
			const created = createBlock('editorskit/import', { file: data });
			console.log(created);
		}
		// if (data) {
		// 	if (typeof data.error !== "undefined") {
		// 		this.setState({ error: data.error, isLoading: false });
		// 		setAttributes({ hasValidApiKey: false });
		// 	} else {
		// 		this.setState({ downloads: data, isLoading: false });
		// 		setAttributes({ hasValidApiKey: true });
		// 	}
		// }

	};

	// if no purchases
	if (typeof downloads.purchased_files === 'undefined' ){
		return false;
	}

	return(
		<Fragment>
			<Modal
				title={__('ShareABlock Patterns and Templates', 'block-options')}
				className="editorskit-fullscreen-modal"
				onRequestClose={() => {
					onClose();
				}}
			>
				<TabPanel className="my-tab-panel"
					activeClass="is-active-tab"
					onSelect={onSelect}
					tabs={[
						{
							name: 'all',
							title: __('All Downloads', 'block-options'),
							className: 'shareablock-all-downloads',
						},
						{
							name: 'block-patterns',
							title: __('Block Patterns', 'block-options'),
							className: 'shareablock-block-patterns',
						},
					]}>
					{
						(tab) => {
							return(
								<Fragment>
									<ul className="shareablock-downloads">
										{map(downloads.purchased_files, (download, key) => {
											console.log(key);
											return (
												<li key={'shareablock-' + key} >
													<div>
														{typeof download.thumbnail !== 'undefined' && ( <img src={download.thumbnail} /> ) }
													</div>
													<h3>{download.name}</h3>
													<Button
														isPrimary
														onClick={()=>{
															map(download.files, (files) => {
																if ( files.download_url ){
																	fetchDownload(files.download_url);

																	return;
																}
															});
														}}
													>
														{__( 'Insert', 'block-options' )}
													</Button>
													<Button
														isTertiary
														href={ 'https://shareablock.com?p=' + key }
														target="_blank"
													>
														{__('Preview', 'block-options')}
													</Button>
												</li>
											);
										})}
									</ul>
								</Fragment>
							);
						}
					}
				</TabPanel>
			</Modal>
		</Fragment>
	);
}

export default DownloadsModal;
