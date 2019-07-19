import React from 'react'
import './styles/App.scss'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AuthPage from './pages/AuthPage'

import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
       <Route exact path='/auth' component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
