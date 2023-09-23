import React from 'react';

import Importer from './importer';
import Exporter from './exporter';

function ImportExportManager() {
	return (
		<div className="gsm-wrap gsm-content gsm-import-export-manager">
			<Exporter />
			<Importer />
		</div>
	);
}

export default ImportExportManager;
