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

   

     

      <ParkWeather key={park.id} {...park}/>
      <hr/>      
      {name}

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
      {region}
      <hr/>
      {country}
      <br/>
      <img src={image} alt={name}/>
      <hr/>
      {description}
      <hr/>
      {facts.map(fact=>{
        return <li key={fact}> {fact} </li>
      })}
      <hr/>
      <ParkMap {...park}/>

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

