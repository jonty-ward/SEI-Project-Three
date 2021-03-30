import React , { useState } from 'react'
import axios from 'axios'
// import { userID } from '../../helpers/auth'

const parkWishlist = ({  park, userData }) => {

  // console.log('USERDATA>>>>>',userData)
  // console.log('PARK DATA >>>>>>',park)
  // const parkID = park._id

 

  // const [userData, setUserData] = useState(null)
  // useEffect(() =>{
  //   const getData = async () => {
  //     const { data } = await axios.get(`/api/profile/${userID()}`)
  //     setUserData(data)
  //   }
  //   getData()
  // }, [])


  if (!userData) return ''
  const [wishlist] =  useState({
    wishList: [...userData.wishList, park._id]
  })



  


  if (!wishlist) return ''
  // console.log('wishlist+++++++>>>>>>', wish)

  
  const handleWishlist = async () =>{
    await axios.put(
      `/api/profile/${userData.id}`,
      wishlist
    )
  }

  return (
    <div>
      <button onClick={handleWishlist}> Add to wishlist </button>
    </div>
  )
}

export default parkWishlist
