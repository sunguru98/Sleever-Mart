import { createSelector } from 'reselect'

export const selectCollections = state => state.collections
export const selectCollectionsCollections = createSelector([selectCollections], collections => collections.collections)