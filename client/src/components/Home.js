import React from 'react'

const Home = () => {

  console.log('MY TOKEN>', process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)

  return (
    <h1>This is the homepage</h1>
  )
}


export default Home