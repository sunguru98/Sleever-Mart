import React from 'react';
import ReactDOM from 'react-dom';
// Provider allows the application to access the store as well as the reducers (actions and mutations combined thingy)
// The Provider component accepts a prop which is none other than the store object
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// Persist gate allows us to load in the persisted state in local storage
import { PersistGate } from 'redux-persist/integration/react'
// importing the store as well as the persisted version of it, store is for redux integration
// and persisted store is for redux-persist library
import storeFile from './redux/store'
import './index.css'
import App from './App'

ReactDOM.render(<Provider store={storeFile.store}><BrowserRouter><PersistGate persistor={storeFile.persistedStore}><App /></PersistGate></BrowserRouter></Provider>, document.getElementById('root'));

