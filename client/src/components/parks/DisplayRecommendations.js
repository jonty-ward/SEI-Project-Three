import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { userIsOwner } from '../../helpers/auth'


const DisplayRecommendations = ({ parkName, activity, text, image, _id, owner }) => {
  const params = useParams()

  if (!userIsOwner) return ''
  return (
    <div className="box card-box">
      <h4>Activity: {activity}</h4>
      <h4>Recommendation: {text}</h4>
      <div>
        <img src={image} alt={parkName}/>
      </div>
      { userIsOwner(owner._id) && 
      <div className="buttons">
        <Link to={`/parks/${params.id}/recommendations/${_id}`}> Edit</Link>
      </div>
      }
    </div>
  )
}
export default DisplayRecommendations