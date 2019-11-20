import userActionTypes from '../actionTypes/userActionTypes'

export const setUser = userObj => ({
  type: userActionTypes.SET_USER, // This is exactly like a mutation in VUEX where we commit using a name
  payload: userObj
})

export const getCurrentUser = () => ({
  type: userActionTypes.GET_CURRENT_USER
})

export const signInEmail = (email, password) => ({
  type: userActionTypes.SIGNIN_EMAIL,
  payload: { email, password }
})

export const signInGoogle = () => ({
  type: userActionTypes.SIGNIN_GOOGLE
})

export const signOut = () => ({
  type: userActionTypes.SIGN_OUT
})

export const registerUser = (email, password, displayName) => ({
  type: userActionTypes.REGISTER_USER,
  payload: { email, password, displayName }
})
