import { Fragment, useRef } from '@wordpress/element'
import { Dialog, Transition } from '@headlessui/react'
import Toolbar from './Toolbar'
import Content from './Content'
import Login from './Login'
import Beacon from '../components/Beacon'
import { useGlobalStore } from '../state/GlobalState'

export default function MainWindow() {
    const initialFocus = useRef(null)
    const open = useGlobalStore(state => state.open)
    const setOpen = useGlobalStore(state => state.setOpen)
    const currentPage = useGlobalStore(state => state.currentPage)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                static
                className="extendify-sdk"
                initialFocus={initialFocus}
                onClose={() => {}}
            >
                <div className="h-screen w-screen sm:h-auto sm:w-auto fixed z-high inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-5"
                            enterTo="opacity-100 translate-y-0"
                        >
                            <div className="fixed lg:absolute inset-0 lg:overflow-hidden transform transition-all lg:pt-5 lg:p-10">
                                <div className="bg-white h-full flex flex-col items-center relative shadow-xl max-w-screen-4xl mx-auto">
                                    <Toolbar
                                        className="w-full h-16 border-solid border-0 border-b border-gray-300 flex-shrink-0"
                                        initialFocus={initialFocus}
                                        hideLibrary={() => setOpen(false)}/>
                                    {currentPage === 'content' &&
                                        <Content className="w-full flex-grow overflow-hidden"/>
                                    }
                                    {currentPage === 'login' &&
                                        <Login className="w-full flex-grow overflow-hidden bg-extendify-light"/>
                                    }
                                </div>
                                <Beacon show={open}/>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
