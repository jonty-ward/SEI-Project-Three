import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const AddParkCommentForm = () => {
  const params = useParams
  const history = useHistory()
  console.log('params', params)

  // const getTokenFromLocalStorage = () => {
  //   return window.localStorage.getItem('token')
  // }

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
    console.log('FORM DATA>>>', formData)
    console.log(event)
    await axios.post(
      '/api/parks/605dc54826460d1c0036f013/comments/',
      formData,
      {
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDVkYzU0ODI2NDYwZDFjMDAzNmYwMDgiLCJpYXQiOjE2MTY3NTgxMDQsImV4cCI6MTYxNzM2MjkwNH0.bbWu4cZnrY9Tw9SBUdMeCktTZSjA9UxVYjKvSPP_Trk' }
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
