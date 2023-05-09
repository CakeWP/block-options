/**
 * WordPress dependencies
 */
const { Button, Dropdown, SVG, Path, KeyboardShortcuts } = wp.components;
const { __ } = wp.i18n;
const { rawShortcut, displayShortcut } = wp.keycodes;
const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
import BlockNavigation from './';

const MenuIcon = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
		<Path d="M5 5H3v2h2V5zm3 8h11v-2H8v2zm9-8H6v2h11V5zM7 11H5v2h2v-2zm0 8h2v-2H7v2zm3-2v2h11v-2H10z" />
	</SVG>
);

function BlockNavigationDropdown( { hasBlocks, isDisabled } ) {
	const isEnabled = hasBlocks && ! isDisabled;

	return (
		<Dropdown
			renderToggle={ ( { isOpen, onToggle } ) => (
				<>
					{ isEnabled && <KeyboardShortcuts
						bindGlobal
						shortcuts={ {
							[ rawShortcut.access( 'o' ) ]: onToggle,
						} }
					/>
					}
					<Button
						icon={ MenuIcon }
						aria-expanded={ isOpen }
						onClick={ isEnabled ? onToggle : undefined }
						label={ __( 'Block navigation', 'block-options' ) }
						className="editor-block-navigation block-editor-block-navigation"
						shortcut={ displayShortcut.access( 'o' ) }
						aria-disabled={ ! isEnabled }
					/>
				</>
			) }
			renderContent={ ( { onClose } ) => (
				<BlockNavigation onSelect={ onClose } />
			) }
		/>
	);
}

export default withSelect( ( select ) => {
	return {
		hasBlocks: !! select( 'core/block-editor' ).getBlockCount(),
	};
} )( BlockNavigationDropdown );
