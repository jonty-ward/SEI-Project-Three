import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddParkCommentForm = () => {
  const params = useParams()

  const getTokenFromLocalStorage = () => {
    return window.localStorage.getItem('token')
  }

  const [formData, setFormData] = useState({
    text: '',
    rating: ''
  })

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log(formData)
    setFormData(newFormData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(event)
    await axios.put(
      `/api/parks/comments/${params.id}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage}` }
      }
    )
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
