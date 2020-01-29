/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { withFilters } = wp.components;

export const AddonSettings = () => {
	return (
		<Fragment>
			<p>{ __( 'This area provide settings for all activated EditorsKit add ons.', 'block-options' ) }</p>
		</Fragment>
	);
};

export default withFilters( 'editorskit.addOn.extraPanel' )( AddonSettings );
