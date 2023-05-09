/**
 * WordPress dependencies
 */
const { addFilter } = wp.hooks;
const { compose, createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { withSpokenMessages } = wp.components;
const { withSelect, withDispatch } = wp.data;

/**
 * Internal dependencies
 */
import PostFeaturedImage from './components/controls';

const applyWithSelect = withSelect( ( select ) => {
	const { getMedia, getPostType } = select( 'core' );
	const { getCurrentPostId, getEditedPostAttribute } = select( 'core/editor' );
	const featuredImageId = getEditedPostAttribute( 'featured_media' );

	return {
		media: featuredImageId ? getMedia( featuredImageId ) : null,
		currentPostId: getCurrentPostId(),
		postType: getPostType( getEditedPostAttribute( 'type' ) ),
		featuredImageId,
		isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitDragAndDropFeaturedTools' ),
	};
} );

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { editPost } = dispatch( 'core/editor' );
	return {
		onUpdateImage( image ) {
			editPost( { featured_media: image.id } );
		},
		onRemoveImage() {
			editPost( { featured_media: 0 } );
		},
	};
} );

const enhance = compose(
	applyWithSelect,
	applyWithDispatch,
	withSpokenMessages,
);

const withDragandDropFeaturedImage = createHigherOrderComponent( ( OriginalComponent ) => {
	return enhance( ( { ...props } ) => {
		const { isDisabled } = props;
		return (
			<Fragment>
				{ ! isDisabled ? <PostFeaturedImage { ...props } /> : <OriginalComponent { ...props } /> }
			</Fragment>
		);
	} );
}, 'withDragandDropFeaturedImage' );

addFilter(
	'editor.PostFeaturedImage',
	'editorskit/post-featured-image',
	withDragandDropFeaturedImage
);
