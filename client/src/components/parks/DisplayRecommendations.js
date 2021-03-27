import React from 'react'
const DisplayRecommendations = ({ parkName, activity, text, image }) => {
  return (
    <div className="box">
      <h3>Park: {parkName}</h3>
      <h4>Activity: {activity}</h4>
      <h4>Comments: {text}</h4>
      <div>
        {image}
      </div>
    </div>
  )
}
export default DisplayRecommendations