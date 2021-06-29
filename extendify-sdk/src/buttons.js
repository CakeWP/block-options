import { __ } from '@wordpress/i18n'
import { renderToString } from '@wordpress/element'
import { registerPlugin } from '@wordpress/plugins'
import { openModal } from './util/general'
import { useUserStore } from './state/User'
import { PluginSidebarMoreMenuItem } from '@wordpress/edit-post'

const openLibrary = (event) => {
    openModal(event.target.closest('[data-extendify-identifier]')?.dataset?.extendifyIdentifier)
}

const mainButton = <div id="extendify-templates-inserter">
    <button
        style="background:#D9F1EE;color:#1e1e1e;border:1px solid #949494;font-weight:bold;font-size:14px;padding:8px;margin-right:8px"
        type="button"
        data-extendify-identifier="main-button"
        id="extendify-templates-inserter-btn"
        className="components-button">
        <svg style="margin-right:0.5rem" width="20" height="20" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="25.75" width="70.8125" height="77.25" fill="#000000"/>
            <rect x="45.0625" width="57.9375" height="57.9375" fill="#37C2A2"/>
        </svg>
        {__('Library', 'extendify-sdk')}
    </button>
</div>

// Add the MAIN button when Gutenberg is available and ready
window._wpLoadBlockEditor && window.wp.data.subscribe(() => {
    setTimeout(() => {
        if (!useUserStore.getState().enabled) {
            return
        }
        if (document.getElementById('extendify-templates-inserter-btn')) {
            return
        }
        if (!document.querySelector('.edit-post-header-toolbar')) {
            return
        }
        document.querySelector('.edit-post-header-toolbar').insertAdjacentHTML('beforeend', renderToString(mainButton))
        document.getElementById('extendify-templates-inserter-btn').addEventListener('click', openLibrary)
    }, 0)
})

// The CTA button inside patterns
window._wpLoadBlockEditor && window.wp.data.subscribe(() => {
    setTimeout(() => {
        if (!useUserStore.getState().enabled) {
            return
        }
        if (!document.querySelector('[id$=patterns-view]')) {
            return
        }
        if (document.getElementById('extendify-cta-button')) {
            return
        }
        const ctaButton = <div>
            <button
                id="extendify-cta-button"
                style="margin:1rem 1rem 0"
                data-extendify-identifier="patterns-cta"
                className="components-button is-secondary">
                {__('Discover more patterns in Extendify Library', 'extendify-sdk')}
            </button>
        </div>
        document.querySelector('[id$=patterns-view]').insertAdjacentHTML('afterbegin', renderToString(ctaButton))
        document.getElementById('extendify-cta-button').addEventListener('click', openLibrary)
    }, 0)
})

// The right dropdown side menu
const SideMenuButton = () => useUserStore.getState().enabled && <PluginSidebarMoreMenuItem
    data-extendify-identifier="sidebar-button"
    onClick={openLibrary}
    icon={
        <span className="components-menu-items__item-icon">
            <svg width="20" height="20" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="25.75" width="70.8125" height="77.25" fill="#000000"/>
                <rect x="45.0625" width="57.9375" height="57.9375" fill="#37C2A2"/>
            </svg>
        </span>
    }
>
    {__('Library', 'extendify-sdk')}
</PluginSidebarMoreMenuItem>
window._wpLoadBlockEditor && registerPlugin('extendify-temps-more-menu-trigger', {
    render: SideMenuButton,
})

// Everything above this line will be enabled or disabled based on the
// users "enabled" state, which is controlled by another button here
const LibraryEnableDisable = () => <PluginSidebarMoreMenuItem
    onClick={() => {
        useUserStore.setState({
            enabled: !useUserStore.getState().enabled,
        })
        requestAnimationFrame(() => location.reload())
    }}
    icon={<></>}
>
    {useUserStore.getState().enabled
        ? __('Disable Extendify', 'extendify-sdk')
        : __('Enable Extendify', 'extendify-sdk')}
</PluginSidebarMoreMenuItem>

window._wpLoadBlockEditor && registerPlugin('extendify-settings-enable-disable', {
    render: LibraryEnableDisable,
})
