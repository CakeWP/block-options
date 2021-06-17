import { isEmpty, get } from 'lodash'

/**
 * Will create query accepted string airtable formula with given fields
 *
 * @return {string} formula
 */

export function createTemplatesFilterFormula(filters) {
    const categories = get(filters, 'categories'),
        search = get(filters, 'search'),
        type = get(filters, 'type')

    const CategoriesFilter =
        isEmpty(categories)
            ? 'TRUE()'
            : categories.map((filter) => `SEARCH("${filter}", {categories}) = 1`).join(',')

    const searchFilter = isEmpty(search)
        ? 'TRUE()'
        : `OR(FIND(LOWER("${search}"), LOWER(title)) != 0, FIND(LOWER("${search}"), LOWER({categories})) != 0)`

    const typeFilter = isEmpty(type)
        ? 'TRUE()'
        : `{type}="${type}"`

    let formula = `IF(AND(${CategoriesFilter}, ${searchFilter}, ${typeFilter}), TRUE())`
    if (isEmpty(searchFilter) && isEmpty(typeFilter) && isEmpty(CategoriesFilter)) {
        formula = ''
    }

    return formula.replace(/\r?\n|\r/g, '')
}
