import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { userIsOwner } from '../../helpers/auth'


const DisplayRecommendations = ({ parkName, activity, text, image, _id, owner, createdAt }) => {
  const params = useParams()

  const date = new Date(createdAt)
  const formattedTime = date.toUTCString()

 
  if (!userIsOwner) return ''
  return (
    <div className="box card-box">
      <div className="content">
        <a className="author">{owner.username}</a>
        <div className="metadata">
          <span className="date">Added on {formattedTime}</span>
        </div>
      </div>
      <h4>Activity: {activity}</h4>
      <h4>Recommendation: {text}</h4>
      <img src={image} alt={parkName} width="75%" height="60%"/>
      { userIsOwner(owner._id) && 
      <div className="buttons">
        <Link to={`/parks/${params.id}/recommendations/${_id}`}> <i className="edit icon"/>Edit</Link>
      </div>
      }
    </div>
  )
}
export default DisplayRecommendations