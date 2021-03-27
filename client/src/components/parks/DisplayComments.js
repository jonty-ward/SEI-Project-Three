import React from 'react-router-dom'
const DisplayComments = ({ text, rating, createdAt }) => {
  const date = new Date(createdAt)
  const formattedTime = date.toUTCString()
  
  return (
    <div className="box">
      <h3>Comment: {text}</h3>
      <h3>Rating: {rating}</h3>
      <h5>Created at: {formattedTime}</h5>
    </div>
  )
}
export default DisplayComments
