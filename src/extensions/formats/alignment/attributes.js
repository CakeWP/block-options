/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks;
const { hasBlockSupport } = wp.blocks;

const allowedBlocks = [ 'core/image', 'core/gallery', 'core/video', 'core/audio', 'core-embed', 'core-embed/youtube', 'core-embed/twitter', 'core-embed/facebook', 'core-embed/instagram', 'core-embed/wordpress', 'core-embed/soundcloud', 'core-embed/spotify', 'core-embed/flickr', 'core-embed/vimeo', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/crowdsignal', 'core-embed/dailymotion', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/speaker-deck', 'core-embed/ted', 'core-embed/tumblr', 'core-embed/videopress', 'core-embed/wordpress-tv', 'core-embed/amazon-kindle', 'core/table' ];

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttributes( settings ) {
	if ( typeof settings.attributes !== 'undefined' ) {
		if ( allowedBlocks.includes( settings.name ) || hasBlockSupport( settings.name, 'editorsKitCaptionAlignment' ) ) {
			settings.attributes = Object.assign( settings.attributes, {
				captionAlignment: {
					type: 'string',
				},
			} );
		}
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'editorskit/alignment/attributes',
	addAttributes
);
