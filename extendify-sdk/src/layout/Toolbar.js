import { __, sprintf } from '@wordpress/i18n'
import { useUserStore } from '../state/User'

export default function Toolbar({ className, hideLibrary, initialFocus }) {
    const remainingImports = useUserStore(state => state.remainingImports)
    const apiKey = useUserStore(state => state.apiKey)
    const allowedImports = useUserStore(state => state.allowedImports)

    return <div className={className}>
        <div className="flex justify-between items-center px-6 sm:px-12 h-full">
            <div className="flex space-x-12 h-full">
                <div className="font-bold flex items-center space-x-1.5 lg:w-72">
                    <svg className="" width="30" height="30" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="25.75" width="70.8125" height="77.25" fill="#000000"/>
                        <rect x="45.0625" width="57.9375" height="57.9375" fill="#37C2A2"/>
                    </svg>
                    <span className="text-sm transform translate-y-0.5 whitespace-nowrap">
                        {__('Extendify Library', 'extendify-sdk')}
                    </span>
                </div>
                {!apiKey.length && <>
                    <div className="items-center ml-8 h-full hidden md:flex">
                        <div className="h-full flex items-center px-6 border-l border-r border-gray-300 bg-extendify-lightest">
                            <a
                                className="button-extendify-main inline lg:hidden"
                                target="_blank"
                                href="https://extendify.com"
                                rel="noreferrer">
                                {__('Sign up', 'extendify-sdk')}
                            </a>
                            <a
                                className="button-extendify-main hidden lg:block"
                                target="_blank"
                                href="https://extendify.com"
                                rel="noreferrer">
                                {__('Sign up today to get unlimited beta access', 'extendify-sdk')}
                            </a>
                        </div>
                        <div className="m-0 p-0 px-6 text-sm bg-gray-50 border-r border-gray-300 h-full flex items-center">
                            {sprintf(
                                __('Imports left: %s / %s'), remainingImports(), Number(allowedImports),
                            )}
                        </div>
                    </div>
                </>}
            </div>
            <div className="space-x-2 transform sm:translate-x-8">
                {/* <button type="button" className="components-button has-icon" onClick={() => toggleFullScreen()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" size="24" role="img" aria-hidden="true" focusable="false"><path d="M4.2 9h1.5V5.8H9V4.2H4.2V9zm14 9.2H15v1.5h4.8V15h-1.5v3.2zM15 4.2v1.5h3.2V9h1.5V4.2H15zM5.8 15H4.2v4.8H9v-1.5H5.8V15z"></path></svg>
                    <span className="sr-only">{__('Toggle fullscreen', 'extendify-sdk')}</span>
                </button> */}
                <button ref={initialFocus} type="button" className="components-button has-icon" onClick={() => hideLibrary()}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" size="24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg>
                    <span className="sr-only">{__('Close library', 'extendify-sdk')}</span>
                </button>
            </div>
        </div>
    </div>
}
