// Redux-persist allows us to store into localStorage
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
// The store file where containing all the states
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
// Redux saga is the alternative for redux thunk
import createSaga from 'redux-saga'
// Redux devtools extension is used for montioring the actions and state changes onto the browser
import { composeWithDevTools } from 'redux-devtools-extension'

// The root reducer did all the combination of mini reducer's states and ready to pass into the store

// The middleware contribution comes in between the action and the Root reducer.
// In simpler words, once the action is dispatched (called), before reaching to the root reducer and
// starts to manipulate things the middleware does any work to the payload or any background tasks and 
// then continues towards the reducer

// According to redux design patterns, middlewares are accepted as arrays
const saga = createSaga()
const middlewares = [logger, saga]
// We now create a store using createStore(), It takes in the root reducer which prepared to send the state here,
// And any additional middlewares which are spread out inside the applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
saga.run(rootSaga)
const persistedStore = persistStore(store)

export default { persistedStore, store }




