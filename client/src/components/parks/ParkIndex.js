import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// import RegionSelect from '../regions/RegionSelect'
import ParkCard from './ParkCard'

const ParkIndex = () => {

  const params = useParams()
  console.log('params.region in the index file',params.region)
  const urlRegion = params.region

  const [parks, setParks] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/parks')
      setParks(data)
    }
    getData()
  }, [])
  
  // const parksJoined = parks.map(join =>{
  //   return join.region.toString().split(' ').join('')
  // })
  // console.log('PARKSJOINED>>>>>>',parksJoined)

  const filteredArray = parks.filter(parks => {
    console.log('PARKS.REGION', parks.region)
    return parks.region.toString().split(' ').join('') === urlRegion
  })
  console.log('filtered array', filteredArray)

  if (!parks) return ''
  return (
    <>
      <div className="section">
        <div className="container">
          { parks &&
          <div className="columns is-multiline">
            { filteredArray.map( park => (
              <ParkCard key={park._id} {...park}
              />
            ))}
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default ParkIndex