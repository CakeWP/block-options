import LoginButton from '../components/Loginbutton'
import { Button } from '@wordpress/components'
import { __ } from '@wordpress/i18n'

export default function HasSidebar({ children }) {

    return <>
        <aside className="flex-shrink-0 sm:pl-12 py-0 sm:py-6 relative">
            <div className="sm:w-56 lg:w-72 sticky flex flex-col h-full">{children[0]}</div>
            <div className="hidden sm:flex flex-col absolute bottom-0 bg-white p-4 w-72 text-left space-y-4">
                <div>
                    <Button isSecondary target="_blank" href="https://extendify.com/feedback">
                        {__('Send us your feedback', 'extendify-sdk')}
                    </Button>
                </div>
                <div className="border-t border-gray-300"><LoginButton/></div>
            </div>
        </aside>
        <main
            id="extendify-templates"
            tabIndex="0"
            className="w-full smp:l-12 sm:pt-6 h-full">
            {children[1]}
        </main>
    </>
}
