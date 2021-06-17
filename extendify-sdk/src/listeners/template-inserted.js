import { Templates } from '../api/Templates'
import { useUserStore } from '../state/User'
import { dispatch } from '@wordpress/data'
import { __ } from '@wordpress/i18n'

// This fires after a template is inserted
export const templateHandler = {
    register() {
        const { createNotice } = dispatch('core/notices')
        const increaseImports = useUserStore.getState().incrementImports
        window.addEventListener('extendify-sdk::template-inserted', (event) => {
            createNotice(
                'info', __('Template Added'), {
                    isDismissible: true,
                    type: 'snackbar',
                },
            )
            increaseImports()
            Templates.import(event.detail?.template)
        })
    },
}
