import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {

  console.log('MY TOKEN>', process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)

  return (
    <>
      <h1>This is the homepage</h1>
      <Link to="/addRecommendation">
        Add a recommendation
      </Link>
    
    </>
  )
}


export default Home