import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const UserProfile = () => {

  const [userData, setUserData] = useState()
  const params = useParams()
  console.log('OARAMS', params)
  
  useEffect(() => {
    const userInfo = async () => {
      const response = await axios.get(`/api/profile/${params.id}`)
      setUserData(response)
    }
    userInfo()
  }, [])
  
  if (!userData) return ''

  const { username, email, fullName, profilePic, wishlist } = userData.data

  return (

    <div className="section">
      <div className="container">
        <h1>MY PROFILE</h1>
        {profilePic}
        <hr/>
        {fullName}
        <hr/>
        {username}
        <hr/>
        {email}
        <hr/>
        <hr/>
        {wishlist}

      </div>
    </div>
  )

}

export default UserProfile