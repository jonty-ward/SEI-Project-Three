import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  
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