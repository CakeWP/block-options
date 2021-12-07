import {
	TextControl,
	ToggleControl,
	ButtonGroup,
	Button,
	Flex,
	SearchControl,
	FormTokenField,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useViewportMatch } from '@wordpress/compose';

import { useSelect, useDispatch } from '@wordpress/data';
import { map, isEqual, isEmpty, omit } from 'lodash';

import Empty from './empty';

function EditorSettings() {
	const [searchQuery, setSearchQuery] = useState('');
	const isLargeViewport = useViewportMatch('medium' );

	const { updateSettings } = useDispatch('core/block-editor');
	const editorSettings = useSelect((select) =>
		select('core/block-editor').getSettings()
	);

	const onUpdate = (settingsKey, newSetting) => {
		updateSettings({
			...editorSettings,
			[settingsKey]: newSetting,
		});
	};

	const defaultOptions = [
		{
			slug: 'titlePlaceholder',
			keywords: ['title', 'placeholder'],
			option: () => (
				<TextControl
					className="editorskit-option"
					label={__('Title Placeholder', 'block-options')}
					placeholder={__('Enter a placeholder…', 'block-options')}
					help={__('Change the default gutenberg title placeholder.')}
					value={editorSettings.titlePlaceholder ?? ''}
					onChange={(newTitlePlaceholder) =>
						onUpdate('titlePlaceholder', newTitlePlaceholder)
					}
				/>
			),
		},
		{
			slug: 'bodyPlaceholder',
			keywords: ['paragraph', 'body', 'placeholder'],
			option: () => (
				<TextControl
					className="editorskit-option"
					label={__('Body Placeholder', 'block-options')}
					placeholder={__(
						'Enter a body placeholder…',
						'block-options'
					)}
					help={__('Change the default gutenberg body placeholder.')}
					value={editorSettings.bodyPlaceholder ?? ''}
					onChange={(newBodyPlaceholder) =>
						onUpdate('bodyPlaceholder', newBodyPlaceholder)
					}
				/>
			),
		},
		{
			slug: 'defaultImageSize',
			keywords: ['default', 'image', 'size'],
			option: () => (
				<Flex className="editorskit-option">
					<span>{__('Default Image Size', 'block-options')}</span>
					<ButtonGroup>
						{map(editorSettings.imageSizes, (imageSize, idx) => {
							const currentImageSize =
								editorSettings.imageDefaultSize ?? '';
							const isActiveDefaultSize = isEqual(
								imageSize.slug,
								currentImageSize
							);

							return (
								<Button
									key={idx}
									isPrimary={isActiveDefaultSize}
									onClick={() =>
										onUpdate(
											'imageDefaultSize',
											imageSize.slug
										)
									}
								>
									{imageSize.name}
								</Button>
							);
						})}
					</ButtonGroup>
				</Flex>
			),
		},
		{
			slug: 'enableCustomUnits',
			keywords: ['custom', 'units', 'editor', 'styles'],
			option: () => {
				const suggestedUnits = [
					'cm',
					'mm',
					'Q',
					'in',
					'pc',
					'pt',
					'px',
					'em',
					'ex',
					'ch',
					'rem',
					'lh',
					'vw',
					'vh',
					'vmin',
					'vmax',
				];

				return (
					<FormTokenField
						suggestions={suggestedUnits}
						value={editorSettings.enableCustomUnits ?? new Array()}
						label={__('Custom Units', 'block-options')}
						placeholder={__('Enter custom units…')}
						onChange={(newCustomUnits) => {
							if (
								newCustomUnits.every((insertedUnit) =>
									suggestedUnits.includes(insertedUnit)
								)
							) {
								onUpdate('enableCustomUnits', newCustomUnits);
							}
						}}
					/>
				);
			},
		},
		{
			slug: 'focusMode',
			keywords: ['focus', 'mode'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.focusMode ?? true}
					label={__('Focus Mode', 'block-options')}
					help={__(
						'Toggle focus mode in the editor.',
						'block-options'
					)}
					onChange={(focusMode) => onUpdate('focusMode', focusMode)}
				/>
			),
		},
		{
			slug: 'hasFixedToolbar',
			keywords: ['fixed', 'toolbar'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.hasFixedToolbar ?? true}
					label={__('Fixed Toolbar', 'block-options')}
					help={__(
						'Change the toolbar position in the editor.',
						'block-options'
					)}
					onChange={(hasFixedToolbar) =>
						onUpdate('hasFixedToolbar', hasFixedToolbar)
					}
				/>
			),
		},
		{
			slug: 'hasReducedUI',
			keywords: ['ui', 'reduced'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.hasReducedUI ?? true}
					label={__('Reduced UI', 'block-options')}
					help={__(
						'Toggle reduce UI in the editor.',
						'block-options'
					)}
					onChange={(hasReducedUI) =>
						onUpdate('hasReducedUI', hasReducedUI)
					}
				/>
			),
		},
		{
			slug: 'imageEditing',
			keywords: ['image', 'editing'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.imageEditing ?? true}
					label={__('Image Editing', 'block-options')}
					help={__(
						'Control image editing ability in the editor.',
						'block-options'
					)}
					onChange={(imageEditing) =>
						onUpdate('imageEditing', imageEditing)
					}
				/>
			),
		},
		{
			slug: 'disableCustomColors',
			keywords: ['colors', 'disable'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.disableCustomColors ?? false}
					label={__('Disable Custom Colors', 'block-options')}
					help={__(
						'Disables custom color picker in the editor.',
						'block-options'
					)}
					onChange={(disableCustomColors) =>
						onUpdate('disableCustomColors', disableCustomColors)
					}
				/>
			),
		},
		{
			slug: 'disableCustomFontSizes',
			keywords: ['font', 'disable', 'size'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.disableCustomFontSizes ?? false}
					label={__('Disable Custom Font Sizes', 'block-options')}
					help={__(
						'Disables custom font sizes in the editor.',
						'block-options'
					)}
					onChange={(disableCustomFontSizes) =>
						onUpdate(
							'disableCustomFontSizes',
							disableCustomFontSizes
						)
					}
				/>
			),
		},
		{
			slug: 'disableCustomGradients',
			keywords: ['gradients', 'disable', 'size'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.disableCustomGradients ?? false}
					label={__('Disable Custom Gradients', 'block-options')}
					help={__(
						'Disables custom gradients in the editor.',
						'block-options'
					)}
					onChange={(disableCustomGradients) =>
						onUpdate(
							'disableCustomGradients',
							disableCustomGradients
						)
					}
				/>
			),
		},
		{
			slug: 'enableCustomLineHeight',
			keywords: ['line', 'enable', 'height'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.enableCustomLineHeight ?? true}
					label={__('Enable custom line height', 'block-options')}
					help={__(
						'Enable custom line height in the editor.',
						'block-options'
					)}
					onChange={(enableCustomLineHeight) =>
						onUpdate(
							'enableCustomLineHeight',
							enableCustomLineHeight
						)
					}
				/>
			),
		},
		{
			slug: 'enableCustomSpacing',
			keywords: ['line', 'enable', 'height'],
			option: () => (
				<ToggleControl
					className="editorskit-option"
					checked={editorSettings.enableCustomSpacing ?? true}
					label={__('Enable custom spacing', 'block-options')}
					help={__(
						'Enable custom spacing in the editor.',
						'block-options'
					)}
					onChange={(enableCustomSpacing) =>
						onUpdate('enableCustomSpacing', enableCustomSpacing)
					}
				/>
			),
		},
	];

	const filteredOptions = defaultOptions.filter((option) => {
		const query = searchQuery.toLowerCase();

		return (
			option.keywords.filter((keyword) => keyword.indexOf(query) !== -1)
				.length > 0
		);
	});

	return (
		<div className="editorskit-editor-settings">
			{isLargeViewport && (
				<SearchControl
					value={searchQuery}
					onChange={setSearchQuery}
					className="editorskit-editor-settings-search-control"
					placeholder={__('Search Editor Settings…', 'block-options')}
				/>
			)}

			{(isEmpty(searchQuery) ? defaultOptions : filteredOptions).map(
				(editorOption, idx) => {
					const Option = editorOption.option;

					return <Option key={idx} />;
				}
			)}

			{isEmpty(filteredOptions) && !isEmpty(searchQuery) && <Empty />}

			{/* {
		    isFunction(ColorEdit) &&	(
		    <ColorEdit 
			    className="editorskit-option"
			    colors={ [
                    { name: 'red', color: '#f00', slug: "1" },
                    { name: 'white', color: '#fff' },
                    { name: 'blue', color: '#00f' },
                ] }
            />
            )
        } */}
		</div>
	);
}

export default EditorSettings;
