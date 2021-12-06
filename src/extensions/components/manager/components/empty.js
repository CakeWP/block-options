import { __ } from '@wordpress/i18n';
import { Card, CardBody, ExternalLink } from '@wordpress/components';


function Empty () {
    return (
	<Card className="editorskit-no-settings-found" isBorderless>
		<CardBody>
			<strong>
				{ __('Nothing to see here!', 'block-options') }
			</strong>
			<p>
				{ __('Looking for something specific? ', 'block-options') }
				<ExternalLink href="https://wordpress.org/support/plugin/block-options/">
					{ __('Let us know', 'block-options') }
				</ExternalLink>
			</p>
		</CardBody>
	</Card>
    );
}

export default Empty;