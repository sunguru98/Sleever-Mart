import React from 'react'
import './styles/App.scss'
// import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
