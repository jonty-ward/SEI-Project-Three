import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { getTokenFromLocalStorage } from '../helpers/auth'



const UserProfile = () => {

  const [userData, setUserData] = useState('')
  const [parksData, setParksData] = useState('')
  const params = useParams()

  
  useEffect(() => {
    const userInfo = async () => {
      const response = await axios.get(`/api/profile/${params.id}`)
      setUserData(response)
      const allParks = await axios.get('/api/parks/') 
      setParksData(allParks)
    }
    userInfo()
  }, [])

  
  if (!userData || !parksData) return ''
  console.log('PARKS DATA >>>>>>', parksData.data)

  // console.log('DATA>>', userData.data.wishList)

  const { username, email, fullName, profilePic, wishList } = userData.data
  // console.log('wishlist', userData.data)

  // wishList.forEach((wishlist, index)=>{
    
  // })
  const filteredParks = parksData.data.filter((item) =>{
    return item._id === wishList[0].toString()    
   
  })
  console.log('filteredParks', filteredParks)
  console.log('wishlist ', wishList)

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
        {wishList.map((item, i) =>(
          <div className="parks-saved " key={i}>

          </div>
        ))}
        { filteredParks[0].name}

      </div>
    </div>
  )

}

export default UserProfile