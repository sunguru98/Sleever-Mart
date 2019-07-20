// Combine reducers allows us to map all the small reducers into a giant reducer (like modules in VUEX)
import { combineReducers } from 'redux'
import userReducer from './reducers/userReducer'

// This is the rootReducer. containing all the states of all the mini reducers ready to send to the store
export default combineReducers({
  user: userReducer
})