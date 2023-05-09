/**
 * External dependencies
 */
import { has, get } from 'lodash';

/**
 * Internal dependencies
 */
import BackgroundDropZone from './dropzone';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;
const { PostFeaturedImageCheck } = wp.editor;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Button, Spinner, ResponsiveWrapper } = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

// Used when labels from post type were not yet loaded or when they are not present.
const DEFAULT_FEATURE_IMAGE_LABEL = __( 'Featured Image', 'block-options' );
const DEFAULT_SET_FEATURE_IMAGE_LABEL = __( 'Set Featured Image', 'block-options' );
const DEFAULT_REMOVE_FEATURE_IMAGE_LABEL = __( 'Remove Image', 'block-options' );

const PostFeaturedImage = ( { currentPostId, featuredImageId, onUpdateImage, onRemoveImage, media, postType } ) => {
	const postLabel = get( postType, [ 'labels' ], {} );
	const instructions = <p>{ __( 'To edit the featured image, you need permission to upload media.', 'block-options' ) }</p>;

	let mediaWidth, mediaHeight, mediaSourceUrl;
	if ( media ) {
		const mediaSize = applyFilters( 'editor.PostFeaturedImage.imageSize', 'post-thumbnail', media.id, currentPostId );
		if ( has( media, [ 'media_details', 'sizes', mediaSize ] ) ) {
			mediaWidth = media.media_details.sizes[ mediaSize ].width;
			mediaHeight = media.media_details.sizes[ mediaSize ].height;
			mediaSourceUrl = media.media_details.sizes[ mediaSize ].source_url;
		} else {
			mediaWidth = media.media_details.width;
			mediaHeight = media.media_details.height;
			mediaSourceUrl = media.source_url;
		}
	}

	const dropZone = (
		<BackgroundDropZone
			label={ __( 'Upload Featured Image', 'block-options' ) }
		/>
	);

	return (
		<PostFeaturedImageCheck>
			<div className="editor-post-featured-image editorskit-post-featured-image">
				<MediaUploadCheck fallback={ instructions }>
					{ dropZone }
					<div className="editorskit-post-featured-spinner">
						<Spinner />
					</div>
					<MediaUpload
						title={ postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL }
						onSelect={ onUpdateImage }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						modalClass={ ! featuredImageId ? 'editor-post-featured-image__media-modal' : 'editor-post-featured-image__media-modal' }
						render={ ( { open } ) => (
							<Button
								className={ ! featuredImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
								onClick={ open }
								aria-label={ ! featuredImageId ? null : __( 'Edit or update the image', 'block-options' ) }>
								{ !! featuredImageId && media &&
									<ResponsiveWrapper
										naturalWidth={ mediaWidth }
										naturalHeight={ mediaHeight }
									>
										<img src={ mediaSourceUrl } alt="" />
									</ResponsiveWrapper>
								}
								{ !! featuredImageId && ! media && <Spinner /> }
								{ ! featuredImageId && ( postLabel.set_featured_image || DEFAULT_SET_FEATURE_IMAGE_LABEL ) }
							</Button>
						) }
						value={ featuredImageId }
					/>
				</MediaUploadCheck>
				{ !! featuredImageId && media && ! media.isLoading &&
					<MediaUploadCheck>
						<MediaUpload
							title={ postLabel.featured_image || DEFAULT_FEATURE_IMAGE_LABEL }
							onSelect={ onUpdateImage }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							modalClass="editor-post-featured-image__media-modal"
							render={ ( { open } ) => (
								<Button onClick={ open } isDefault isLarge>
									{ __( 'Replace Image', 'block-options' ) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				}
				{ !! featuredImageId &&
					<MediaUploadCheck>
						<Button onClick={ onRemoveImage } isLink isDestructive>
							{ postLabel.remove_featured_image || DEFAULT_REMOVE_FEATURE_IMAGE_LABEL }
						</Button>
					</MediaUploadCheck>
				}
			</div>
		</PostFeaturedImageCheck>
	);
};

export default PostFeaturedImage;
