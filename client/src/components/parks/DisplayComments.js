import React from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import { userIsOwner } from '../../helpers/auth'
import { Rating } from 'semantic-ui-react'



const DisplayComments = ({ text, rating, createdAt, _id, owner }) => {
  const date = new Date(createdAt)
  const params = useParams()

  
  const formattedTime = date.toUTCString()

  
 

  if (!userIsOwner) return ''
  // console.log('owner>>>>>>', owner._id)
  // console.log('logged in user owner', userIsOwner(owner._id))
  return (
    
    <div className="comment">
      <a className="avatar">
        <img src="https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg" />
      </a>
      <div className="content">
        <a className="author">{owner.username}</a>
        <div className="metadata">
          <span className="date">Created at: {formattedTime}</span>
        </div>
        <div className="text">
          {text}
        </div>
        <Rating icon='star' rating={rating} maxRating={5} disabled />
      </div>
      { userIsOwner(owner._id) && 
      <div className="buttons">
        <Link to={`/parks/${params.id}/comments/${_id}`} className="ui positive button tiny"> Edit</Link>
      </div> }
    </div>
    
  )
}
export default DisplayComments
