import React from 'react'
import { useParams } from 'react-router-dom'
import ParkIndex from '../parks/ParkIndex'

const RegionEurope = (props) => {


  const params = useParams()


  console.log('PROPS.REGION>>>>>',props.region)



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