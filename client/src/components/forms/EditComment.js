import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import AddParkCommentForm from '../parks/AddParkCommentForm'


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

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <AddParkCommentForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        </div>
      </div>
    </section>
  )
}

export default EditComment