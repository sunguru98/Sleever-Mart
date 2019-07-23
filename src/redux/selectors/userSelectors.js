import { createSelector } from 'reselect'

export const selectUser = state => state.user
export const selectUsersUser = createSelector([selectUser], user => user.user)