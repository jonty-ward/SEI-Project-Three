import axios from 'axios'
import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import RecommendationForm from './RecommendationForm'
import { getTokenFromLocalStorage } from '../../helpers/auth'

const RecommendationAdd = () => {


  // * setting the information for the request to state 
  const [formData, setFormData] = useState({
    parkName: '',
    activity: '',
    text: '',
    image: ''
  })
  // *params will be needeed when we have the park pages up and running 
  const params = useParams

  // *redirect once submit
  const history = useHistory()
 
  // * handling the change when imputting data 
  const handleChange = event =>{
    // console.log(event)
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    
  }

  // * handling the image upload 
  const handleImageUrl = url =>{
    setFormData({ ...formData, image: url })
  }

  // * handling the form submit 
  const handleSubmit = async event =>{
    console.log('Form data>>>>>>>>',formData)
    console.log('params.id', params)
    event.preventDefault()

    // * posting to the DB- need to link in the authentication and params
    await axios.post(
      '/api/parks/605dcd70b059d51e3916a4e8/recommendations',
      formData,
      {
        
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage}` }
      
      }
    )
    history.push('/')
  }
  
  // * this links to the form component page, could make this reusable 
  if (!FormData) return '' 
  return (
    <div>
      <RecommendationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        handleImageUrl={handleImageUrl}
      />
    </div>

    
  )
}

export default RecommendationAdd
