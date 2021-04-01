import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const ParkMap = ({ longitude , latitude, name }) => {



  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 10
  })









  return (
    <div className="map-container"> 
    
      <h3 className="juliusFontCenter">Explore { name }</h3>
      {viewport ?
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='400px'
          width='400px'
          mapStyle='mapbox://styles/mapbox/outdoors-v11'
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
        </ReactMapGL>
        :
        <h1>Loading your location...</h1>
      }
    </div>
  )
}

export default ParkMap
