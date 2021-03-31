import React, { useEffect, useState } from 'react'
import { ImageUploadField } from './ImageUploadField'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const recommendationForm = ({ handleChange, handleImageUrl, handleSubmit, formData }) => {

  const [parkData, setParkData] = useState(null)
  const params = useParams()
  

  useEffect(() =>{
    const getData = async () => {
      const { data } = await axios.get(`/api/parks/${params.id}`)
      setParkData(data)
    }
    getData()
  }, [])
  

  if (!parkData) return null
  console.log(formData)
  return (
    
    <form onSubmit={handleSubmit} className="Form-field">
      <div className="field">
        <label className="label">{parkData.name}</label>
        <div className="field">
          <label className="label"> Activity </label>
          <div className="control">
            <select onChange={handleChange} id="activity" name="activity">
              <option value="Choose">Choose an activity</option>
              <option value="Hiking">Hiking</option>
              <option value="Swimming">Swimming</option>
              <option onSelect={handleChange} value="climbing">Climbing/Mountaineering/Orienteering</option>
              <option value="Birdwatching">Birdwatching</option>
              <option value="Rafting">Rafting/Paddling/Canoeing</option>
              <option value="Snorkeling">Snorkeling</option>
              <option value="Camping">Camping</option>
              <option value="Food and Drink">Food and Drink</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Your recommendation</label>
        <div className="control">
          <input
            className="input"
            placeholder="Add your reccomendation here ... "
            name="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <ImageUploadField
            value={formData.image}
            name="image"
            handleImageUrl={handleImageUrl}
          />
        </div>
      </div>
      <div className="field">
        <button type="submit" className="button is-link  is-fullwidth">
          Submit
        </button>
      </div>
    </form>
  )
}

export default recommendationForm

// className="input"
// placeholder="Add your activity reccomendation here ... "
// name="activity"
// value={formData.activity}