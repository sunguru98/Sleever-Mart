 // Combine reducers allows us to map all the small reducers into a giant reducer (like modules in VUEX)
import { combineReducers } from 'redux'
// Persist reducer is a built in method to store the reducer state in to the local storage
import { persistReducer } from 'redux-persist'
import lcStorage from 'redux-persist/lib/storage'
// All reducers
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'
import categoriesReducer from './reducers/categoriesReducer'
import collectionsReducer from './reducers/collectionsReducer'

// Persist config is used to say what to store and what not to store using the whitelist property
const persistConfig = {
  key: 'root', // Where the storage should start
  storage: lcStorage, // What type of storage must it use (here its local storage)
  whitelist: ['cart'] // Who all must be stored from the root reducer
}

// This is the rootReducer. containing all the states of all the mini reducers ready to send to the store
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  collections: collectionsReducer
})

export default persistReducer(persistConfig, rootReducer)