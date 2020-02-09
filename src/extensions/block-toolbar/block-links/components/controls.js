/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { Toolbar, withSpokenMessages } = wp.components;
const { withSelect } = wp.data;
const { compose, ifCondition } = wp.compose;

/**
 * Internal dependencies
 */
import URLInputUI from '../../../components/url-popover/url-input-ui';

class withLinkToolbar extends Component {
	constructor() {
		super( ...arguments );

		this.onSetHref = this.onSetHref.bind( this );
	}

	onSetHref( props ) {
		this.props.setAttributes( props );
	}

	render() {
		const {
			attributes,
		} = this.props;

		const {
			href,
			opensInNewTab,
			linkNoFollow,
			linkSponsored,
			hasAnimation,
		} = attributes;

		return (
			<Fragment>
				<BlockControls>
					<Toolbar>
						<URLInputUI
							url={ href || '' }
							opensInNewTab={ opensInNewTab || false }
							linkNoFollow={ linkNoFollow || false }
							linkSponsored={ linkSponsored || false }
							hasAnimation={ hasAnimation || false }
							onChangeUrl={ this.onSetHref }
						/>
					</Toolbar>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select, props ) => {
		const {
			attributes,
		} = props;

		return {
			attributes,
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitLinkBlockToolbarOptions' ),
		};
	} ),
	ifCondition( ( props ) => {
		return ! props.isDisabled;
	} ),
	withSpokenMessages
)( withLinkToolbar );
