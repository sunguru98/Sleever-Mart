import { createSelector } from 'reselect'

const selectCollections = state => state.collections
export const selectCollectionsCollections = createSelector([selectCollections], collections => collections.collections)
export const selectParticularCategoryInCollections = routeName => createSelector([selectCollectionsCollections], collections => collections[routeName])