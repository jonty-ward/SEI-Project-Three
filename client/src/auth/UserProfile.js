import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const UserProfile = () => {

  const [data, setData] = useState()
  const params = useParams()
  
  const userInfo = async () => {
    const response = await axios.get(`/api/profile/${params.id}`)
    setData(response)
  }
  userInfo()

  console.log('DATA>>', data)

  return (
    <h1>MY PROFILE</h1>
  )

}

export default UserProfile