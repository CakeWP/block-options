import create from 'zustand'
import { templates as config } from '../config'
import { createBlocksFromInnerBlocksTemplate } from '../util/blocks'

const defaultCategoryForType = (type) => type === 'pattern'
    ? ['Default']
    : []

export const useTemplatesStore = create((set, get) => ({
    templates: [],
    fetchToken: null,
    activeTemplate: {},
    activeTemplateBlocks: {},
    searchParams: {
        categories: defaultCategoryForType(config.defaultType),
        type: config.defaultType,
        search: '',
    },
    // The offset is returned from Airtable.
    // It's removed when search params are updated
    // Or otherwise updated on each request
    nextPage: '',
    removeTemplates: () => set({
        nextPage: '',
        templates: [],
    }),
    appendTemplates: (templates) => set({
        templates: [...new Map([...get().templates, ...templates].map(item => [item.id, item])).values()],
    }),
    setActive: (template) => {
        set({
            activeTemplate: template,
        })

        // This will convert the template to blocks for quick injection
        if (template?.fields?.code) {
            const { parse } = window.wp.blocks
            set({
                activeTemplateBlocks: createBlocksFromInnerBlocksTemplate(parse(template.fields.code)),
            })
        }
    },
    updateSearchParams: (params) => {
        // If categories are set to [] or not set at all, lets compute the default
        if (params?.categories && !params.categories.length || !Object.prototype.hasOwnProperty.call(params, 'categories')) {
            params.categories = defaultCategoryForType(params?.type ?? get().searchParams.type)
        }
        set({
            templates: [],
            nextPage: '',
            searchParams: {
                ...Object.assign(get().searchParams, params),
            },
        })
    },
}))
