import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../../helpers/auth'
import RecommendationForm from './RecommendationForm'


const EditRecommendation = () => {
  const history = useHistory()
  const params = useParams()

  const [formData, setFormData] = useState({
    parkName: '',
    activity: '',
    text: '',
    image: ''
  })

  const { id, recommendationId } = params

  const handleDelete = async () => {
    await axios.delete(`/api/parks/${id}/recommendations/${recommendationId}`, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`
      }
    })
    history.push(`/parks/${params.id}`)
  }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/parks/${id}/recommendations/${recommendationId}`)
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
      `/api/parks/${id}/recommendations/${recommendationId}`,
      formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
    )
    history.push(`/parks/${params.id}`)
    
  }

  if (!formData) return ''


  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <RecommendationForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
          <hr/>
          <br/>
          <div className="buttons">
            <button onClick={handleDelete} className="button is-danger">Delete</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditRecommendation