import { createSelector } from 'reselect'

const selectCollections = state => { console.log(state); return state.collections }
export const selectCollectionsCollections = createSelector([selectCollections], collections => collections.collections)
export const selectParticularCategoryInCollections = routeName => createSelector([selectCollectionsCollections], collections => collections.find(collection => collection.routeName === routeName ))