import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './auth/Register'
import Login from './auth/Login'
import AddParkCommentForm from './components/forms/AddParkCommentForm'
import RecommendationAdd from './components/forms/RecommendationAdd'
import RegionSelect from './components/regions/RegionSelect'
import RegionEurope from './components/regions/RegionEurope'
import ParkShow from './components/parks/ParkShow'
import UserProfile from './auth/UserProfile'

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
        <Route  path="/profile/:id">
      	  <UserProfile />
        </Route>
        <Route exact path="/addComments">
      	  <AddParkCommentForm />
        </Route>
        <Route path="/addRecommendation">
          <RecommendationAdd/>
        </Route>
        <Route exact path="/regions">
          <RegionSelect />
        </Route>
        <Route exact path="/regions/:region">
          <RegionEurope />
        </Route>
        <Route path="/parks/:id">
          <ParkShow/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App