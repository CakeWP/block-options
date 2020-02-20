/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import insertImportedBlocks from '../../import/utils/insert';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment, RawHTML } = wp.element;
const { Modal, TabPanel, Button } = wp.components;

const DownloadsModal = ( { clientId, onClose, downloads, isInserting, setIsInserting, filterDownloads } ) => {
	const onSelect = ( tabName ) => {
		filterDownloads( tabName );
	};

	const fetchDownload = async ( url ) => {
		const response = await fetch( url );

		const data = await response.json();
		if ( data ) {
			insertImportedBlocks( clientId, data.content, onClose );
		}
	};

	// if no purchases
	if ( typeof downloads.purchased_files === 'undefined' ) {
		return false;
	}

	return (
		<Fragment>
			<Modal
				title={ __( 'ShareABlock Patterns and Templates', 'block-options' ) }
				className="editorskit-fullscreen-modal"
				onRequestClose={ () => {
					onClose();
				} }
			>
				<TabPanel className="shareablock-downloads-panel"
					activeClass="is-active-tab"
					onSelect={ onSelect }
					tabs={ [
						{
							name: 'all',
							title: __( 'All Downloads', 'block-options' ),
							className: 'shareablock-all-downloads',
						},
						{
							name: 'block-patterns',
							title: __( 'Block Patterns', 'block-options' ),
							className: 'shareablock-block-patterns',
						},
						{
							name: 'templates',
							title: __( 'Templates', 'block-options' ),
							className: 'shareablock-templates',
						},
					] }>
					{
						( tab ) => {
							return (
								<Fragment>
									{ Object.keys( downloads.purchased_files ).length < 1 ?
										<p className="shareablock-no-results">
											<RawHTML>
												{ sprintf(
													__( 'No %1$s Found. %2$sClick here to browse.%3$s', 'block-options' ),
													tab.name !== 'all' ? tab.title : __( 'Downloads', 'block-options' ),
													'<a href="https://shareablock.com/" target="_blank">',
													'</a>'
												) }
											</RawHTML>
										</p> : null }
									<ul className="shareablock-downloads">
										{ map( downloads.purchased_files, ( download, key ) => {
											return (
												<li key={ 'shareablock-' + key } >
													<div>
														{ typeof download.thumbnail !== 'undefined' && ( <img src={ download.thumbnail } alt={ download.name } /> ) }
													</div>
													<h3>{ download.name }</h3>
													<Button
														isPrimary
														disabled={ isInserting && key === isInserting ? true : false }
														onClick={ () => {
															setIsInserting( key );
															map( download.files, ( files ) => {
																if ( files.download_url ) {
																	fetchDownload( files.download_url );
																}
															} );
														} }
													>
														{ isInserting && key === isInserting ? __( 'Downloading....', 'block-options' ) : __( 'Insert', 'block-options' ) }
													</Button>
													<Button
														isTertiary
														href={ 'https://shareablock.com?p=' + key }
														target="_blank"
													>
														{ __( 'Preview', 'block-options' ) }
													</Button>
												</li>
											);
										} ) }
									</ul>
								</Fragment>
							);
						}
					}
				</TabPanel>
			</Modal>
		</Fragment>
	);
};

export default DownloadsModal;
