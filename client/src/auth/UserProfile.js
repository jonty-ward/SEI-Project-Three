import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
// import { getTokenFromLocalStorage } from '../helpers/auth'



const UserProfile = () => {

  const [userData, setUserData] = useState('')
  const [parksData, setParksData] = useState('')
  const params = useParams()

  
  useEffect(() => {
    const userInfo = async () => {
      const response = await axios.get(`/api/profile/${params.id}`)
      setUserData(response)
      const allParks = await axios.get('/api/parks') 
      setParksData(allParks)
    }
    userInfo()
  }, [])

  if (!userData || !parksData) return ''
  let arrayOfFilteredPark = []
  const { username, email, fullName, profilePic, wishList } = userData.data

  // *for Each lopp to make array of parks in wishlist
  wishList.forEach((wishlist, index)=>{
    const filteredParks = parksData.data.filter((item) =>{
      return item._id === wishList[index].toString()    
    }) 
    arrayOfFilteredPark = [...arrayOfFilteredPark, filteredParks]
  })

  // * function to remove the item from the wishlist 
  const removeFromWishlist = (event)=>{
    console.log(event.target.value)
    console.log(wishList)
  }
  


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
        <div className="wishlist-items">
          
          {arrayOfFilteredPark.map((item, i) =>(
            
            <div className="parks-saved" key={i}>
              <Link to={`/parks/${item[0]._id}`}>
                <p>{item[0].name}</p>
                <img src={item[0].image} alt={item[0].name} />
              </Link>
              <button value={item[0]._id} onClick={removeFromWishlist} > Remove {item[0].name} from wishlist </button>
            </div>
            
          ))}
        </div>

      </div>
    </div>
  )

}

export default UserProfile