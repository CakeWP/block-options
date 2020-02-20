/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Spinner } = wp.components;

const ShareABlockLoading = () => (
	<div className="wp-block-embed is-loading">
		<Spinner />
		<p>{ __( 'Loading…', 'block-options' ) }</p>
	</div>
);

export default ShareABlockLoading;
