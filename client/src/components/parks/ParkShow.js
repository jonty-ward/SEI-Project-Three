import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import DisplayRecommendations from '../parks/DisplayRecommendations'
import DisplayComments from '../parks/DisplayComments'
import { userIsAuthenticated } from '../../helpers/auth'
import ParkWeather from './ParkWeather'
import AddParkCommentForm from '../forms/AddParkCommentForm'


const ParkShow = () => {

  const [park, setPark] = useState(null)


  const params = useParams()

 
  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/parks/${params.id}`)
      setPark(data)
    }
    getData()
  }, [])

 

  
  

  

  


  if (!park) return ''


  const { name, image, region, description, facts, recommendations, comments } = park
  console.log('reccomendations>>>>>', recommendations)
  return (
    <div>

      <ParkWeather key={park.id} {...park}/>
      <hr/>      
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
      <h1> Recommendations</h1>
      <div className="box">
        { recommendations.map(recommendation => (
          <>
            <DisplayRecommendations key={recommendation._id} {...recommendation}/>
          </>
        ))}
        <div className="navbar-item">
          { userIsAuthenticated() && 
            <Link to={`/addRecommendation/${params.id}`}>
              Add a recommendation
            </Link> 
          }
        </div>
      </div> 
      <hr/>
      <h1> Comments</h1>
      <div className="box">
        { comments.map(comment => (
          <DisplayComments key={comment._id} {...comment}/>
        ))}
        <div className="navbar-item">
          { userIsAuthenticated() && 

            <>
              <AddParkCommentForm/>
            </>
          }
        </div>
        
      </div>
    </div>
  )
}

export default ParkShow

