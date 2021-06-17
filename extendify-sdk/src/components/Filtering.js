import { useTemplatesStore } from '../state/Templates'
import { __experimentalSearchForm as SearchForm } from '@wordpress/block-editor'
// import { SelectControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import { debounce } from 'lodash'
import {
    useEffect, useState, useCallback,
} from '@wordpress/element'
import { Categories as CategoriesApi } from '../api/Categories'
import classNames from 'classnames'

export default function Filtering() {
    const updateSearchParams = useTemplatesStore(state => state.updateSearchParams)
    const searchParams = useTemplatesStore(state => state.searchParams)
    // const [categoriesOpen, setCategoriesOpen] = useState(true)
    const searchInputUpdate = debounce((value) => updateSearchParams({
        categories: [],
        search: value,
    }), 500)
    const [searchValue, setSearchValue] = useState(searchParams?.search ?? '')
    const [categories, setCategories] = useState([])
    const fetchCategories = useCallback(async () => {
        const { records } = await CategoriesApi.get()
        const cats = records.map(cat => cat?.fields?.title).filter(Boolean).sort()
        setCategories(cats)
    }, [])

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    return <div className="flex-grow overflow-y-auto">
        <SearchForm
            placeholder={__('What are you looking for?', 'extendify-sdk')}
            onChange={(value) => {
                useTemplatesStore.setState({
                    nextPage: '',
                })
                setSearchValue(value)
                searchInputUpdate(value)
            }}
            value={searchValue}
            className="sm:ml-px sm:mt-1 sm:mr-1 sm:mb-6 px-6 sm:p-0 sm:px-0"
            autoComplete="off" />
        {/* <div className="sm:hidden pb-2 px-6" style={{
            maxWidth: '400px',
        }}>
            <label htmlFor="category-search-mobile" className="sr-only">
                {__('Select a category', 'extendify-sdk')}
            </label>
            <SelectControl
                id="category-search-mobile"
                className="pt-0"
                onChange={(cat) => updateSearchParams({
                    categories: [cat],
                })}
                options={
                    [{
                        value: '',
                        label: __('Select a category...', 'extendify-sdk'),
                    }, ...categories.map(cat => ({
                        value: cat, label: cat,
                    }))]
                }/>
        </div> */}
        <div className="hidden sm:block">
            <div
                className="flex justify-between items-center mb-4 py-4 border-b border-gray-200">
                <h3 className="font-medium mb-2 pl-4 text-sm m-0 p-0">{ __('Categories', 'extendify-sdk') }</h3>
                {/* <span>
                    {categoriesOpen ?
                        <svg width="14" height="8" className="stroke-current" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.00018 1L6.00018 1M14.0002 1L12.0002 1M2.00018 1L0.000183105 1" strokeWidth="2"/>
                        </svg> :
                        <svg width="14" height="8" className="stroke-current" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.49999 1L6.99999 6L12.5 1" strokeWidth="1.5"/>
                        </svg>
                    }
                </span> */}
            </div>
            {<div className="mt-6">
                <ul className="m-0 pl-4 pb-24">
                    <li className="m-0">
                        <button
                            type="button"
                            className="cursor-pointer w-full flex justify-between items-center p-3 m-0 px-4 leading-none hover:text-wp-theme-500 bg-transparent transition duration-200"
                            onClick={() => {
                                updateSearchParams({
                                    categories: [],
                                })
                            }}>
                            <span className={classNames({
                                'text-wp-theme-500 font-bold': (!searchParams.categories.length || searchParams?.categories.includes('Default')),
                            })}>
                                {searchParams.type === 'pattern'
                                    ? __('Default', 'extendify-sdk')
                                    : __('All', 'extendify-sdk')}
                            </span>
                        </button>
                    </li>
                    {categories.map((category) =>
                        <li className="m-0" key={category}>
                            <button
                                type="button"
                                className="cursor-pointer w-full flex justify-between items-center p-3 m-0 px-4 leading-none bg-transparent hover:text-wp-theme-500 transition duration-200"
                                onClick={() => {
                                    updateSearchParams({
                                        categories: [category],
                                    })
                                }}>
                                <span className={classNames({
                                    'text-wp-theme-500 font-bold': searchParams.categories.includes(category),
                                })}>
                                    {category}
                                </span>
                                {/* <span className="text-black">
                                    <svg width="8" height="14" viewBox="0 0 8 14" className="stroke-current" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12.5L6 6.99998L1 1.5" strokeWidth="1.5"/>
                                    </svg>
                                </span> */}
                            </button>
                        </li>)
                    }
                </ul>
            </div>}
        </div>
    </div>
}
