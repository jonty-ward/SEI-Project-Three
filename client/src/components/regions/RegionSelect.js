import React from 'react'
import {  useParams, Link } from 'react-router-dom'
import EuropeSlides from './EuropeSlides'
import Slider from './Slider'
import AfricaSlides from './AfricaSlides'
import AsiaSlides from './AsiaSlides'
import NorthAmericaSlides from './NorthAmericaSlides'
import OceaniaSlides from './OceaniaSlides'
import SouthAmericaSlides from './SouthAmericaSlides'


const RegionSelect = ({ region }) => {

 
  console.log(region)
  const params = useParams()
  console.log('params', params.region)


  return (
    <div className="region-slider-container">
    
      <Link to='/regions/Europe'>
        <div value='Europe' className="region-slider">
          <h1>Europe</h1>
          <Slider slides={EuropeSlides}/>
        </div>
      </Link>
      
      <Link to="/regions/Africa">
        <div value='Africa' className="region-slider">
          <h1>Africa</h1>
          <Slider slides={AfricaSlides}/>
        </div>
      </Link>
      <Link to="/regions/Asia">
        <div  value='Asia' className="region-slider">
          <h1>Asia</h1>
          <Slider slides={AsiaSlides}/>
        </div>
      </Link>
      <Link to="/regions/NorthAmerica">
        <div  value='NorthAmerica' className="region-slider">
          <h1>North America</h1>
          <Slider slides={NorthAmericaSlides}/>
        </div>
      </Link>
      <Link to="/regions/Oceania">
        <div  value='Oceania' className="region-slider">
          <h1>Oceania</h1>
          <Slider slides={OceaniaSlides}/>
        </div>
      </Link>
      <Link to="/regions/SouthAmerica">
        <div  value='SouthAmerica' className="region-slider">
          <h1>South America</h1>
          <Slider slides={SouthAmericaSlides}/>
        </div>
      </Link>
      
    </div>
  )
}

export default RegionSelect
