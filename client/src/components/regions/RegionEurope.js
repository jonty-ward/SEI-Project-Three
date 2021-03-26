import React from 'react'
import { useParams } from 'react-router-dom'
import ParkIndex from '../parks/ParkIndex'

const RegionEurope = () => {


  const params = useParams()





  return (
    <>
      <div>
        {params.region}
      </div>
      <ParkIndex />
    </>
  )
}

export default RegionEurope 