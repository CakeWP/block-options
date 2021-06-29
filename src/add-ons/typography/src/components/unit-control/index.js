/**
 * External dependencies
 */
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __, sprintf } = wp.i18n;
const { Fragment, Component } = wp.element;
const { Tooltip, ButtonGroup, withSpokenMessages, Button } = wp.components;

class UnitControl extends Component {
	render() {
		const { label, createMeta, syntax, unit, value, elementType, level } = this.props;
		const unitSizes = [
			{
				/* translators: a unit of size (px) for css markup */
				name: __( 'Pixel', 'editorskit-typography-addon' ),
				unitValue: 'px',
			},
			{
				/* translators: a unit of size (em) for css markup */
				name: __( 'Em', 'editorskit-typography-addon' ),
				unitValue: 'em',
			},
			{
				/* translators: a unit of size (rem) for css markup */
				name: __( 'Rem', 'editorskit-typography-addon' ),
				unitValue: 'rem',
			},
		];

		return (
			<Fragment>
				<div className="components-editorskit-typography-unit-control">
					{ label && <p className={ 'components-editorskit-typography-unit-control__label' }>{ label }</p> }
					<div className="components-editorskit-typography-unit-control__fields">
						<input
							className="components-editorskit-typography-unit-control__number"
							type="number"
							onChange={ ( event ) => {
								createMeta( syntax, event.target.value, elementType, level );
							} }
							value={ value }
						/>
						<ButtonGroup className="components-editorskit-typography-unit-control__units" aria-label={ __( 'Select Units', 'editorskit-typography-addon' ) }>
							{ map( unitSizes, ( { unitValue, name } ) => (
								<Tooltip text={ sprintf(
									/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
									__( '%s Units', 'editorskit-typography-addon' ),
									name
								) }>
									<Button
										key={ unitValue }
										className={ 'components-editorskit-typography-unit-control__units--' + name }
										isDefault
										isPrimary={ unit === unitValue }
										aria-pressed={ unit === unitValue }
										aria-label={ sprintf(
											/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
											__( '%s Units', 'editorskit-typography-addon' ),
											name
										) }
										onClick={ () => {
											createMeta( syntax + '-unit', unitValue, elementType, level );
										} }
									>
										{ unitValue }
									</Button>
								</Tooltip>
							) ) }
						</ButtonGroup>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withSpokenMessages( UnitControl );
