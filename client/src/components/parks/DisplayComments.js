import React from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import { userIsOwner } from '../../helpers/auth'



const DisplayComments = ({ text, rating, createdAt, _id, owner }) => {
  const date = new Date(createdAt)
  const params = useParams()

  
  const formattedTime = date.toUTCString()

  
 

  if (!userIsOwner) return ''
  // console.log('owner>>>>>>', owner._id)
  // console.log('logged in user owner', userIsOwner(owner._id))
  return (
    
    <div className="box">
      <h3>Comment: {text}</h3>
      <h3>Rating: {rating}</h3>
      <h5>Created at: {formattedTime}</h5>
      { userIsOwner(owner._id) && 
      <div className="buttons">
        <Link to={`/parks/${params.id}/comments/${_id}`} className="button is-warning"> Edit</Link>
      </div> }
    </div>
    
  )
}
export default DisplayComments
