import React from 'react'
import { Link, useParams } from 'react-router-dom'
const DisplayRecommendations = ({ parkName, activity, text, image, _id }) => {
  const params = useParams()
  return (
    <div className="box">
      <h3>Park: {parkName}</h3>
      <h4>Activity: {activity}</h4>
      <h4>Comments: {text}</h4>
      <Link to={`/parks/${params.id}/recommendations/${_id}`}> Edit</Link>
      <div>
        {image}
      </div>
    </div>
  )
}
export default DisplayRecommendations