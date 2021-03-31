import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import ReactMapGL from 'react-map-gl'
import axios from 'axios'





const Home = () => {

  // const [viewPort, setViewPort] = useState(null)

  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(position => {
  //     const { longitude, latitude } = position.coords
  //     setViewPort({ longitude, latitude })
  //   })
  // }, [])

  const [park, setPark] = useState(null)



  // *pulling in the parks data
  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get('/api/parks')
      setPark(data)
    }
      
    getData()
  }, [])


  // const [viewport, setViewport] = useState({
  //   latitude: 49.180278,
  //   longitude: 19.919444,
  //   zoom: 1
  // })

  // * random image for the home page hero 
  if (!park) return ''
  const mappedImages = park.map(item =>{
    return item.image
  })
  const randomImage =  mappedImages[Math.floor(Math.random() * mappedImages.length)][0]
  console.log(randomImage)


  return (
    <>
      
      <section className="hero is-fullheight-with-navbar home-background">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered  has-text-white is-family-monospace">
              <h1 className="home">This is the homepage - TITLE TBC</h1>
            </h1>
          </div>
        </div>
      </section>

      <hr/>
      <p> first option</p>
      {/* ******** THIS IS THE FIRST GRID OPTION WITH TEXT  ************ */}
      <div className="ui internally celled grid">
        <div className="row">
          <div className="three wide column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
          <div className="ten wide column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="three wide column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
        </div>
        <div className="row">
          <div className="three wide column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
          <div className="ten wide column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="three wide column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
        </div>
      </div>



      Fouth option

      <div className="ui segment">
        <img className="ui medium left floated image" src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
        <img className="ui small right floated image" src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
        <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.</p>
      </div>


      <hr/>
      <p>seccond option</p>
      {/* //SECCOND OPTION FOR GRID */}
      <div className="ui celled grid">
        <div className="row">
          <div className="three wide column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>   
          </div>
          <div className="thirteen wide column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
     
        </div>
        <div className="row">
          <div className="three wide column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
          <div className="ten wide column">
            <p> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="three wide column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
        </div>
      </div>

      <hr/>
      <p>third option</p>
      <div className="ui grid">
        <div className="three column row">
          <div className="column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
          <div className="column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
          <div className="column">
            <img src={mappedImages[Math.floor(Math.random() * mappedImages.length)][0]}/>
          </div>
        </div>
      </div>



      

      {/*       
      <div className="map-container"> 
      
        <h2>Select a region</h2>
        {viewport ?
          <ReactMapGL
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            height='50%'
            width='95%'
            mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
          >
            
          </ReactMapGL>
          :
          <h1>Loading your location...</h1>
        }
      </div> */}
    </>
  )
}


export default Home