import React, { useState } from 'react'
import axios from 'axios'
import { ImageUploadField } from '../components/forms/ImageUploadField'

const Register = ({ handleImageUrl }) => {

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    profilePic: '',
    wishlist: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/register', formData)
    window.localStorage.setItem('token', response.data.token)
    history.pushState('/parks')
  }

  return (
    <div className="background-color">
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Full Name</label>
                <div className="control">
                  <input
                    className="input"
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
                    className="input"
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
                    className="input"
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
                <label className="label">Wishlist</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Save your favourites!"
                    name="wishlist"
                    value={formData.wishlist}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
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
                    className="input"
                    type="password"
                    placeholder="Password Confirmation"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth">Sign Me Up!</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
