/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { compose } = wp.compose;
const { Component, Fragment } = wp.element;
const { BlockControls } = wp.blockEditor;
const { Toolbar, withSpokenMessages } = wp.components;

class ToolbarControls extends Component {
	componentDidUpdate() {
		const {
			attributes,
			setAttributes,
		} = this.props;

		const {
			mediaPosition,
			className,
		} = attributes;

		if ( ! [ 'top', 'bottom' ].includes( mediaPosition ) && className ) {
			setAttributes( { className: this.removeTopBottom() } );
		}
	}

	removeTopBottom() {
		const {
			attributes,
		} = this.props;

		const {
			className,
		} = attributes;

		let newClassName = '';

		if ( className ) {
			newClassName = className.replace( 'has-media-on-the-bottom', '' ).replace( 'has-media-on-the-top', '' ).trim();
			newClassName = newClassName.replace( /\s+/g, ' ' ).trim();
		}

		return newClassName;
	}

	render() {
		const {
			attributes,
			setAttributes,
			isDisabled,
		} = this.props;

		const {
			mediaPosition,
		} = attributes;

		if ( isDisabled ) {
			return null;
		}

		const toolbarControls = [ {
			className: 'align-pull-top',
			icon: 'align-pull-left',
			title: __( 'Show media on top', 'block-options' ),
			isActive: mediaPosition === 'top',
			onClick: () => {
				setAttributes( { mediaPosition: 'top', className: this.removeTopBottom() + ' has-media-on-the-top', align: '' } );
			},
		}, {
			className: 'align-pull-bottom',
			icon: 'align-pull-right',
			title: __( 'Show media on bottom', 'block-options' ),
			isActive: mediaPosition === 'bottom',
			onClick: () => {
				setAttributes( { mediaPosition: 'bottom', className: this.removeTopBottom() + ' has-media-on-the-bottom', align: '' } );
			},
		} ];

		return (
			<Fragment>
				<BlockControls>
					<Toolbar
						className="editorskit-media-text-card-controls"
						controls={ toolbarControls }
					/>
				</BlockControls>
			</Fragment>
		);
	}
}

export default compose(
	withSelect( ( select ) => {
		return {
			isDisabled: select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitMediaTextLayoutOptions' ),
		};
	} ),
	withSpokenMessages
)( ToolbarControls );
