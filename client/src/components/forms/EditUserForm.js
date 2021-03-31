import React from 'react'
import { ImageUploadField } from './ImageUploadField'

const EditUserForm = ({ handleChange, handleImageUrl, handleSubmit, formData }) => {

  return (

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Full Name</label>
        <div className="control">
          <input
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Email Address</label>
        <div className="control">
          <input
            placeholder="email@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            placeholder="Username (for display)"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Profile Picture</label>
        <div className="control">
          <ImageUploadField
            name="profilePic"
            value={formData.profilePic}
            handleImageUrl={handleImageUrl}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password Confirmation</label>
        <div className="control">
          <input
            // className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
            type="password"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
        </div>
        {/* { errors.passwordConfirmation && <p className="help is-danger">{errors.passwordConfirmation.message}</p> } */}
      </div>
      <div className="field">
        <button type="submit" className="button is-fullwidth">Confirm changes</button>
      </div>
    </form>
  )
}


export default EditUserForm