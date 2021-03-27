import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
// import AddParkCommentForm from '../forms/AddParkCommentForm'


const EditComment = () => {
  const history = useHistory()
  const params = useParams()

  const [formData, setFormData] = useState({
    text: '',
    rating: ''
  })

  const { id, commentId } = params

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/parks/${id}/comments/${commentId}`)
      setFormData(response.data)
    }
    getData()
  }, [])

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    
    setFormData(newFormData)
    console.log(event.target)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `/api/parks/${id}/comments/${commentId}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
    )
    history.push(`/api/parks/${id}`)
  }

  if (!formData) return ''
  console.log('FORM DATA>>>>>>>', formData)

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

export default EditComment