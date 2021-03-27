import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DisplayRecommendations from '../parks/DisplayRecommendations'
import DisplayComments from '../parks/DisplayComments'


const ParkShow = () => {

  const [park, setPark] = useState(null)
  console.log(park, setPark)

  const params = useParams()

 
  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/parks/${params.id}`)
      setPark(data)
    }
    getData()
  }, [])

  console.log('par data>>>>>', park)


  if (!park) return ''
  const { name, image, region, description, facts, recommendations, comments } = park
  return (
    <div>
      
      {name}
      <hr/>
      {region}
      <br/>
      <img src={image} alt={name}/>
      <hr/>
      {description}
      <hr/>
      {facts.map(fact=>{
        return <li key={fact}> {fact} </li>
      })}
      <hr/>
      <div className="box">
        { recommendations.map(recommendation => (
          <DisplayRecommendations key={recommendation._id} {...recommendation}/>
        ))}
      </div> 
      <hr/>
      <div className="box">
        { comments.map(comment => (
          <DisplayComments key={comment._id} {...comment}/>
  
        ))}
      </div>

    </div>
  )
}

export default ParkShow

