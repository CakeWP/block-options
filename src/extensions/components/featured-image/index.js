/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

/**
 * Internal dependencies
 */
import PostFeaturedImage from './components/controls';

const applyWithSelect = withSelect((select) => {
	const { getMedia, getPostType } = select('core');
	const { getCurrentPostId, getEditedPostAttribute } = select('core/editor');
	const featuredImageId = getEditedPostAttribute('featured_media');

	return {
		media: featuredImageId ? getMedia(featuredImageId) : null,
		currentPostId: getCurrentPostId(),
		postType: getPostType(getEditedPostAttribute('type')),
		featuredImageId,
	};
});

const applyWithDispatch = withDispatch((dispatch) => {
	const { editPost } = dispatch('core/editor');
	return {
		onUpdateImage(image) {
			editPost({ featured_media: image.id });
		},
		onRemoveImage() {
			editPost({ featured_media: 0 });
		},
	};
});

const enhance = compose(
	applyWithSelect,
	applyWithDispatch
);

const withDragandDropFeaturedImage = createHigherOrderComponent(() => {
	return enhance(({ ...props }) => {

		return (
			<Fragment>
				<PostFeaturedImage {...props} />
			</Fragment>
		);
	});
}, 'withDragandDropFeaturedImage');

addFilter(
	'editor.PostFeaturedImage',
	'editorskit/post-featured-image',
	withDragandDropFeaturedImage
);