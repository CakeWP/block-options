/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Button } = wp.components;

/**
 * Internal dependencies
 */
import URLInput from './url-input';

export default function LinkEditor( {
	autocompleteRef,
	className,
	onChangeInputValue,
	value,
	...props
} ) {
	return (
		<form
			className={ classnames(
				'block-editor-url-popover__link-editor',
				className
			) }
			{ ...props }
		>
			<URLInput
				value={ value }
				onChange={ onChangeInputValue }
				autocompleteRef={ autocompleteRef }
			/>
			<Button icon="editor-break" label={ __( 'Apply', 'block-options' ) } type="submit" />
		</form>
	);
}
