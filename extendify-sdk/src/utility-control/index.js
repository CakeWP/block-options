import { __ } from '@wordpress/i18n'
import { InspectorAdvancedControls } from '@wordpress/block-editor'
import { createHigherOrderComponent } from '@wordpress/compose'
import { addFilter } from '@wordpress/hooks'
import { FormTokenField } from '@wordpress/components'

import suggestions from '../../utility-framework/suggestions.json'

function addAttributes(settings) {

    // Add new extUtilities attribute to block settings.
    return {
        ...settings,
        attributes: {
            ...settings.attributes,
            extUtilities: {
                type: 'array',
                default:[],
            },
        },
    }

}

function addEditProps(settings) {
    const existingGetEditWrapperProps = settings.getEditWrapperProps
    settings.getEditWrapperProps = (attributes) => {
        let props = {}

        if (existingGetEditWrapperProps) {
            props = existingGetEditWrapperProps(attributes)
        }

        return addSaveProps(
            props, settings, attributes,
        )
    }

    return settings
}

/**
 * Create HOC to add Extendify Utility to Advanced Panel of block.
 */
const utilityClassEdit = createHigherOrderComponent((BlockEdit) => {
    return function editPanel(props) {

        const { extUtilities } = props.attributes
        let classes = extUtilities

        if(!Array.isArray(classes)){
            classes = classes.split(' ')
        }

        /**
         * Remove all extra // and . from classnames
         */
        const suggestionList = suggestions.suggestions.map((s)=> {
            return s.replace('.','').replace(new RegExp('\\\\', 'g'), '')
        })

        return (
            <>
                <BlockEdit { ...props } />
                <InspectorAdvancedControls>
                    <FormTokenField
                        label={__('Extendify Utilities','extendify-sdk')}
                        tokenizeOnSpace={true}
                        value={ classes }
                        suggestions={ suggestionList }
                        onChange={ (value) => {
                            props.setAttributes({
                                extUtilities: value,
                            })
                        } }
                    />
                </InspectorAdvancedControls>
            </>
        )
    }
},'utilityClassEdit')

function addSaveProps(
    saveElementProps, blockType, attributes,
) {

    // these are generated classes which does not show in attributes
    let { className:generatedClasses } = saveElementProps

    let { extUtilities, className: additinalClasses } = attributes

    // // // Return if no utilities present.
    if (!extUtilities) {
        return saveElementProps
    }

    additinalClasses = additinalClasses ? additinalClasses.split(' ') : []
    generatedClasses = generatedClasses ? generatedClasses.split(' ') : []

    const classes = new Set([...additinalClasses, ...generatedClasses, ...extUtilities])

    Object.assign(saveElementProps, { className: [...classes].join(' ') })

    return saveElementProps
}

addFilter(
    'blocks.registerBlockType',
    'extendify/utilities/attributes',
    addAttributes,
)

addFilter(
    'blocks.registerBlockType',
    'extendify/utilities/addEditProps',
    addEditProps,
)

addFilter(
    'editor.BlockEdit',
    'extendify/utilities/advancedClassControls',
    utilityClassEdit,
)

addFilter(
    'blocks.getSaveContent.extraProps',
    'extendify/utilities/extra-props',
    addSaveProps,
)
