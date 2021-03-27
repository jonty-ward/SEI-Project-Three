import React from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
const DisplayComments = ({ text, rating, createdAt, _id }) => {
  const date = new Date(createdAt)
  const params = useParams()
  
  const formattedTime = date.toUTCString()
  
  return (
    <div className="box">
      <h3>Comment: {text}</h3>
      <h3>Rating: {rating}</h3>
      <h5>Created at: {formattedTime}</h5>
      <Link to={`/parks/${params.id}/comments/${_id}`}> Edit</Link>
    </div>
  )
}
export default DisplayComments
