import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { userIsOwner } from '../../helpers/auth'


const DisplayRecommendations = ({ parkName, activity, text, image, _id, owner }) => {
  const params = useParams()

  if (!userIsOwner) return ''
  return (
    <div className="box">
      <h3>Park: {parkName}</h3>
      <h4>Activity: {activity}</h4>
      <h4>Comments: {text}</h4>
      { userIsOwner(owner._id) && 
      <div className="buttons">
        <Link to={`/parks/${params.id}/recommendations/${_id}`}> Edit</Link>
      </div>
      }
      <div>
        {image}
      </div>
    </div>
  )
}
export default DisplayRecommendations