import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { getTokenFromLocalStorage } from '../../helpers/auth'

const AddParkCommentForm = () => {
  // const token = getTokenFromLocalStorage
  const params = useParams
  const history = useHistory()
  console.log('params', params)
 

  const [formData, setFormData] = useState({
    text: '',
    rating: ''
  })

  const handleChange = event => {
    console.log(event.target.name)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    
    await axios.post(
      '/api/parks/605dcd70b059d51e3916a4e8/comments/',
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage}` }
      }
    )
    history.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Comment</label>
        <div>
          <input
            placeholder="Add your comment here.."
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Rating</label>
        <div>
          <input
            placeholder="Rating out of 5"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <button type="submit">
      Submit
        </button>
      </div>
    </form>
  )
}

export default AddParkCommentForm
