import rootReducer from './rootReducer'
// The store file where containing all the states
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
// The root reducer did all the combination of mini reducer's states and ready to pass into the store

// The middleware contribution comes in between the action and the Root reducer.
// In simpler words, once the action is dispatched (called), before reaching to the root reducer and
// starts to manipulate things the middleware does any work to the payload or any background tasks and 
// then continues towards the reducer

// According to redux design patterns, middlewares are accepted as arrays
const middlewares = [logger]
// We now create a store using createStore(), It takes in the root reducer which prepared to send the state here,
// And any additional middlewares which are spread out inside the applyMiddleware()
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store




