import React , { useState } from 'react'
import axios from 'axios'

const parkWishlist = ({ userData, park }) => {

  console.log('USERDATA>>>>>',userData)
  console.log('PARK DATA >>>>>>',park)
  // const parkID = park._id

  const [wishlist] =  useState({
    wishList: [...userData.wishList, park._id]
  })

  if (!wishlist) return ''
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
