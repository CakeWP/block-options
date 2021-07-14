/**
 * Internal dependencies
 */
import icon from '../icon';
import TypographySelection from '../../../components/font-selection';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const { Fragment, Component } = wp.element;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { withSpokenMessages } = wp.components;
const { BlockIcon } = wp.blockEditor;

/**
 * Render plugin
 */
class SidebarPanel extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			isOpen: false,
		};
		
	}

	render() {
		const { isDisabled } = this.props;
		
		if ( isDisabled ) {
			return false;
		}

		return (
			<Fragment>
				<PluginSidebarMoreMenuItem
					target="editorskit-typography-panel"
				>
					{ __( 'Typography Settings', 'editorskit-typography-addon' ) }
				</PluginSidebarMoreMenuItem>
				<PluginSidebar
					name="editorskit-typography-panel"
					title={ __( 'Typography Settings', 'editorskit-typography-addon' ) }
				>
					<div className="editorskit-block-card">
						<div className="block-editor-block-card">
							<BlockIcon icon={ icon.typography } showColors />
							<div className="block-editor-block-card__content">
								<div className="block-editor-block-card__title">{ __( 'Typography Settings', 'editorskit-typography-addon' ) }</div>
								<div className="block-editor-block-card__description">{ __( 'Select from predefined font combinations. You can also create custom combo or duplicate existing ones.', 'editorskit-typography-addon' ) }</div>
							</div>
						</div>
					</div>
					<TypographySelection />
				</PluginSidebar>
			</Fragment>
		);
	}
}

export default compose( [
	withSelect( ( select ) => {
		const { isFeatureActive } = select('core/edit-post');
		return {
			isDisabled: isFeatureActive('disableEditorsKitTypography'),
		};
	} ),
	withSpokenMessages,
] )( SidebarPanel );
