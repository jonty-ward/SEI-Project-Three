import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import DisplayRecommendations from '../parks/DisplayRecommendations'
import DisplayComments from '../parks/DisplayComments'
import { userIsAuthenticated } from '../../helpers/auth'
import ParkWeather from './ParkWeather'
import AddParkCommentForm from '../forms/AddParkCommentForm'
import ParkWishlist from './ParkWishlist'
import ParkMap from './ParkMap'





const ParkShow = ( { userData } ) => {

 

  const [park, setPark] = useState(null)


  // const [userData, setUserData] = useState(null)
  const params = useParams()

  // *pulling in the parks data
  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/parks/${params.id}`)
      setPark(data)
    }
    
    getData()
  }, [])







  if (!park ) return ''
  // console.log('USER DATA>>>>>>>',userData, setUserData)

 


  const { name, image, region, description, facts, recommendations, comments, country } = park
 
  return (
    <div>
     
  
     

      <hr/>      
      {name}

      <hr/>
      {region}
      <hr/>
      {country}
      <br/>
      <img src={image[0]} alt={name}/>
      
      {userIsAuthenticated 
        ?
        <ParkWishlist 
          userData = {userData}
          park = {park}
        />
        :
        <p>Login to save</p>
      }
      <hr/>
      <div className="ui container">{description}</div>

      <div className="ui grid">
        <div className="two wide column">
          {facts.map(fact=>{
            return <li className="ui list" key={fact}> {fact} </li>
          })}
        </div>
        <div className="two wide column">
          <img src={image[1]} alt={name}/>
          <img src={image[2]} alt={name}/>
        </div>
      </div>
      <ParkMap {...park}/>
      <ParkWeather key={park.id} {...park}/>


      <h1> Recommendations</h1>

      
      <div className="box reccomendation-box">
        { recommendations.map(recommendation => (
          <>
            <DisplayRecommendations key={recommendation.id} {...recommendation}/>
          </>
        ))}
      </div> 
      <div className="navbar-item">
        { userIsAuthenticated() && 
            <Link to={`/addRecommendation/${params.id}`}>
              Add a recommendation
            </Link> 
        }
      </div>
      <hr/>
      
      <div className="ui comments">
        <h1 className="ui dividing header">Comments</h1>
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

