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

  const dataFromUserData = userData
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

  console.log('USER DATA from userData' , dataFromUserData)





  if (!park ) return ''
  // console.log('USER DATA>>>>>>>',userData, setUserData)



  const { name, image, region, description, facts, recommendations, comments, country } = park
 
  return (
    <div>
  
   


      <hr/>      
      <div className="ui huge header center aligned">{name}</div>
      <hr/>

      <img src={image[0]} alt={name} width="100%"/>
      <br/>
      {userIsAuthenticated 
        ?
        <ParkWishlist 
          userData = {userData}
          park = {park}
        />
        :
        <p>Login to save</p>
      }


      <div className="ui raised very padded text segment">
        <h2 className="ui header">{country}</h2>
        <h3 className="ui header">{region}</h3>
        <p>{description}</p>
        <p></p>
      </div>
      <br/>
      <br/>




      <div className="ui vertically divided horizontally padded grid">
        <div className="two column row">
          <div className="column">
            <div className="ui segment">
              <h3>{name} Facts</h3>
              {facts.map(fact=>{
                return <><li className="item" key={fact}> {fact} </li><br/></>
              })}
            </div>
          </div>
          <div className="column">
            <div className="segment">
              <div className="container">
                <img src={image[2]} alt={name} width="100%" height="100%"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <div className="ui vertically divided horizontally padded grid">
        <div className="two column row">
          <div className="column">
            <div className="segment">
              <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <img src={image[1]} alt={name} width="100%" height="100%"/>
              </div>
            </div>
          </div>
          <div className="column">
            <ParkMap {...park}/>
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <div className="ui vertically divided horizontally padded grid">
        <div className="two column  row">
          <div className="column">
            <ParkWeather key={park.id} {...park}/>
          </div>
          <div className="column">
            <div className="segment">
              <div className="container">
                <img src={image[0]} alt={name} width="100%" height="100%"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>


      <div className="ui segment very padded">
        <h1> Recommendations</h1>
        <div className="box reccomendation-box">
          { recommendations.map(recommendation => (
            <>
              <DisplayRecommendations key={recommendation.id} {...recommendation}/>
            </>
          ))}
        </div>
      </div>
      <div className="navbar-item">
        { userIsAuthenticated() && 
          <Link to={`/addRecommendation/${params.id}`}>
            Add a recommendation
          </Link> 
        }
      </div>
      { !userIsAuthenticated() && 
          <Link to={'/login'}>
            <h4>Want to add a recommendation? Log in first!</h4>
          </Link> 
      }
      <br/>
      <br/>
    
      <div className="ui container">
        <div className="ui large comments">
          <h1 className="ui dividing header">Comments</h1>
          { comments.map(comment => (
            <DisplayComments key={comment._id} {...comment}/>
          ))}
          <br/>
          <br/>
          <br/>
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