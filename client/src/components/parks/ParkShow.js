import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import DisplayRecommendations from '../parks/DisplayRecommendations'
import DisplayComments from '../parks/DisplayComments'
import { userIsAuthenticated } from '../../helpers/auth'


const ParkShow = () => {

  const [park, setPark] = useState(null)
  const [weather, setWeather] = useState(null)
  console.log(setWeather, weather)

  const params = useParams()

 
  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/parks/${params.id}`)
      setPark(data)
    }
    getData()
  }, [])

  useEffect(() => {

    const getData = async () =>{
      const { data } = await axios.get(' http://api.weatherapi.com/v1/forecast.json?key=034aa607c3044e879dd112044212503&q=Birmingham&days=7')
      setWeather(data)
    }
    getData()
  }, [])

  console.log('WEATHER ====>>>>>', weather)

  


  if (!park) return ''
  const { name, image, region, description, facts, recommendations, comments } = park
  console.log('reccomendations>>>>>', recommendations)
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
      <div className="box">
        { comments.map(comment => (
          <DisplayComments key={comment._id} {...comment}/>
        ))}
        <div className="navbar-item">
          { userIsAuthenticated() && 
            <Link to={`/addComments/${params.id}`}>
              Add a comment
            </Link>
          }
        </div>
        
      </div>
    </div>
  )
}

export default ParkShow

