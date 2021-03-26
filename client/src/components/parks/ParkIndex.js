import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import RegionSelect from '../regions/RegionSelect'
// import ParkCard from './ParkCard'

const ParkIndex = () => {

  const params = useParams()
  console.log(params.region)
  console.log(window.location.href.split('/')[4])
  const urlRegion = window.location.href.split('/')[4]

  const [parks, setParks] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/parks')
      setParks(data)
    }
    getData()
  }, [])
  console.log('parks', parks)

  const filteredArray = parks.filter(parks => {
    return parks.region === urlRegion
  })
  console.log('filtered array', filteredArray)

  if (!parks) return ''
  return (
    <>
      <div className="section">
        <div className="container">
          { parks &&
          <div className="columns is-multiline">
            { parks.map( park => (
              <RegionSelect key={park._id} {...park}
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