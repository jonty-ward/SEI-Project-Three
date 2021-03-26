import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import ReactMapGL from 'react-map-gl'


const Home = () => {

  // const [viewPort, setViewPort] = useState(null)

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(position => {
  //     const { longitude, latitude } = position.coords
  //     setViewPort({ longitude, latitude })
  //   })
  // }, [])

  const [viewport, setViewport] = useState({
    latitude: 49.180278,
    longitude: 19.919444,
    zoom: 4
  })

  return (
    <>
      <h1>This is the homepage - TITLE TBC</h1>
      {/* <Link to="/addRecommendation">
        Add a recommendation
      </Link> */}
      <div className="container">
        HERO IMAGE HERE

      </div>
      <div className="map-container"> 
        <h2>Select a region</h2>
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='50%'
          width='95%'
          mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          
        </ReactMapGL>
      </div>
    </>
  )
}


export default Home