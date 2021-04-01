import React from 'react'
import { useParams } from 'react-router-dom'
import ParkIndex from '../parks/ParkIndex'

const RegionEurope = () => {


  const params = useParams()



 



  return (
    <>
    
      <div className="margin-container">
        <h1 className="region">
          {(params.region === 'NorthAmerica' || params.region === 'SouthAmerica')
            ?
            params.region.split('h').join('h ')
            :
            params.region
          }
        </h1>
      </div>
      <br/>
      <ParkIndex />
    </>
  )
}

export default RegionEurope 