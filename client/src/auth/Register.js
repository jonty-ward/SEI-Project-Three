import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ImageUploadField } from '../components/forms/ImageUploadField'

const Register = () => {

 

  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    profilePic: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    fullName: '',
    password: '',
    username: '',
    passwordConfirmation: ''
  })
  console.log(errors, setErrors)

  const handleImageUrl = url =>{
    setFormData({ ...formData, profilePic: url })
  }
  const history = useHistory()

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log(event.target.value)
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/register', formData)
      window.localStorage.setItem('token', response.data.token)
      history.push('/')
    } catch (err) {
      console.log(err.response)
      setErrors(err.response.data.errors)
    }
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
                    className={`input ${errors.fullName ? 'is-danger' : ''}`}
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                { errors.fullName && <p className="help is-danger">{errors.fullName.message}</p> }
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    className={`input ${errors.email ? 'is-danger' : ''}`}
                    placeholder="email@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                { errors.email && <p className="help is-danger">{errors.email.message}</p> }
              </div>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className={`input ${errors.username ? 'is-danger' : ''}`}
                    placeholder="Username (for display)"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                { errors.username && <p className="help is-danger">{errors.username.message}</p> }
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
              {/* <div className="field">
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
              </div> */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password ? 'is-danger' : ''}`}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                { errors.password && <p className="help is-danger">{errors.password.message}</p> }
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                    type="password"
                    placeholder="Password Confirmation"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
                { errors.passwordConfirmation && <p className="help is-danger">{errors.passwordConfirmation.message}</p> }
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
