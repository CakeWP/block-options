import { Axios as api } from './axios'

export const Categories = {
    get() {
        return api.get('categories')
    },
}
