import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

const ParkMap = ({ longitude , latitude, name }) => {

  // const permaLat = latitude
  // const permaLong = longitude

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 8
  })

  // const [popup, setPopup] = useState(null)








  return (
    <div className="map-container"> 
    
      <h2>Map of { name }</h2>
      {viewport ?
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='50%'
          width='60%'
          mapStyle='mapbox://styles/mapbox/outdoors-v11'
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {/* <Marker latitude = {permaLat} longitude = {permaLong}>
            <div className="mapbox-text">
            🌿
              { name }
            </div>
          </Marker>
          {popup &&
        <Popup
          latitude = {popup.latitude}
          longitude = {popup.longitude}
          closeOnClick = {true}
          onClose = {() => setPopup(null)}
        >
          <div>{popup.name}</div>
        </Popup>
          } */}
        </ReactMapGL>
        :
        <h1>Loading your location...</h1>
      }
    </div>
  )
}

export default ParkMap
