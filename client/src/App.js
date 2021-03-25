import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './auth/Register'
import Login from './auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
      	  <Home />
        </Route>
        <Route exact path="/register">
      	  <Register />
        </Route>
        <Route exact path="/login">
      	  <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App