/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Toolbar } = wp.components;

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
		return () => onChange( value === align ? undefined : align );
	}

	const activeAlignment = find( alignmentControls, ( control ) => control.align === value );

	return (
		<Toolbar
			isCollapsed={ isCollapsed }
			icon={ activeAlignment ? activeAlignment.icon : 'editor-alignleft' }
			label={ label }
			controls={ alignmentControls.map( ( control ) => {
				const { align } = control;
				const isActive = ( value === align );

				return {
					...control,
					isActive,
					role: isCollapsed ? 'menuitemradio' : undefined,
					onClick: applyOrUnset( align ),
				};
			} ) }
		/>
	);
}

export default AlignmentToolbar;
