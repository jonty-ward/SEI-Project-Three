import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './auth/Register'
import Login from './auth/Login'
import RecommendationForm from './components/forms/RecommendationForm'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
      	  <Home />
        </Route>
        <Route  path="/register">
      	  <Register />
        </Route>
        <Route  path="/login">
      	  <Login />
        </Route>
        <Route path="/addRecommendation">
          <RecommendationForm/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App