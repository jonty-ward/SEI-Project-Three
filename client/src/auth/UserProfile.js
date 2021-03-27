import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const UserProfile = () => {

  const [userData, setUserData] = useState()
  const params = useParams()
  
  useEffect(() => {
    const userInfo = async () => {
      const response = await axios.get(`/api/profile/${params._id}`)
      setUserData(response)
    }
    userInfo()
  }, [])
  

  console.log('DATA>>', userData)

  const { username, email, fullName, profilePic, wishlist } = userData

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