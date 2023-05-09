/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment, RawHTML } = wp.element;
const { withFilters } = wp.components;

export const LicensesSettings = () => {
	return (
		<Fragment>
			<p>
				<RawHTML>
					{ sprintf(
						__( 'Enter your extension license keys here to receive updates for purchased extensions. If your license key has expired, please %1$srenew your license%2$s.', 'block-options' ),
						'<a href="https://editorskit.com/" target="_blank">',
						'</a>'
					) }
				</RawHTML>
			</p>
		</Fragment>
	);
};

export default withFilters( 'editorskit.addOn.licensePanel' )( LicensesSettings );
