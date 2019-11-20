import userActionTypes from '../actionTypes/userActionTypes'
// This exactly works like this.setState({}), having the payload inside and the object which we need to change
// In terms of type
export const setUser = userObj => ({
  type: userActionTypes.SET_USER, // This is exactly like a mutation in VUEX where we commit using a name
  payload: userObj
})

export const signInEmail = (email, password) => ({
  type: userActionTypes.SIGNIN_EMAIL,
  payload: { email, password }
})

export const signInGoogle = () => ({
  type: userActionTypes.SIGNIN_GOOGLE
})
