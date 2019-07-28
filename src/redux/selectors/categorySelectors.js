import { createSelector } from 'reselect'

export const selectCategories = state => state.categories
export const selectCategoriesCategories = createSelector([selectCategories], categories => categories.categories)