import ExtendifyLibrary from './layout/ExtendifyLibrary'
import { render } from '@wordpress/element'
import { useWantedTemplateStore } from './state/Importing'
import { injectTemplate } from './util/templateInjection'
import './buttons'
import './listeners'

window._wpLoadBlockEditor && window.wp.domReady(() => {

    // Insert a template on page load if it exists in localstorage
    if (useWantedTemplateStore.getState().importOnLoad) {
        const template = useWantedTemplateStore.getState().wantedTemplate
        setTimeout(() => {
            injectTemplate(template)
        }, 0)
    }

    // Reset template state after checking if we need an import
    useWantedTemplateStore.setState({
        importOnLoad: false,
        wantedTemplate: {},
    })

    // Insert into the editor (note: Modal opens in a portal)
    const extendify = document.createElement('div')
    extendify.id = 'extendify-root'
    document.body.append(extendify)
    render(<ExtendifyLibrary/>, extendify)
})
