/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar, ToolbarGroup, ToolbarButton } = wp.components;

const DEFAULT_ALIGNMENT_CONTROLS = [
	{
		icon: 'editor-alignleft',
		title: __( 'Align text left', 'block-options' ),
		align: 'left',
	},
	{
		icon: 'editor-aligncenter',
		title: __( 'Align text center', 'block-options' ),
		align: 'center',
	},
	{
		icon: 'editor-alignright',
		title: __( 'Align text right', 'block-options' ),
		align: 'right',
	},
	{
		icon: 'editor-justify',
		title: __( 'Align text justify', 'block-options' ),
		align: 'justify',
	},
];

export function AlignmentToolbar( props ) {
	const {
		value,
		onChange,
		alignmentControls = DEFAULT_ALIGNMENT_CONTROLS,
		label = __( 'Change text alignment', 'block-options' ),
		isCollapsed = true,
	} = props;

	function applyOrUnset( align ) {
		onChange( value === align ? undefined : align );
	}

	return (
		<Toolbar
			isCollapsed={ isCollapsed }
			label={ label }
		>
			<ToolbarGroup>
				{ alignmentControls.map( ( control ) => {
					const { align, title, icon } = control;
					const isActive = ( value === align );
					return(
						<ToolbarButton
							isActive={ isActive }
							icon={ icon }
							label={ title }
							onClick={ () => {
								applyOrUnset( align )
							} }
						/>
					);
				} ) }
			</ToolbarGroup>
		</Toolbar>
	);
}

export default AlignmentToolbar;
