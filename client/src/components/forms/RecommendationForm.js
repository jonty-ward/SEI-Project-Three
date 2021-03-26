import React from 'react'
import { ImageUploadField } from './ImageUploadField'
const recommendationForm = ({ handleChange, handleImageUrl, handleSubmit, formData }) => {

  return (
    
    <form onSubmit={handleSubmit} className="Form-field">

      <div className="field">
        <label className="label">Park Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Add park name here ... "
            name="parkName"
            value={formData.parkName}
            onChange={handleChange}

          />
        </div>
        <div className="field">
          <label className="label"> Activity </label>
          <div className="control">
            <input
              className="input"
              placeholder="Add your activity reccomendation here ... "
              name="activity"
              value={formData.activity}
              onChange={handleChange}
            />
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

