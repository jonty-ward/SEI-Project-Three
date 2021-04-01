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

  // const [confirmMessage, setConfirmMessage] = useState('')

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

  // const handleWishlistConfirm = (event) => {
  //   const confirm = event.target.value
  //   setConfirmMessage(confirm)
  // }

  return (
    <>
      <div className="ui labeled button" tabIndex="0">
        <button className="ui basic button" onClick={ handleWishlist} value="Added to your wishlist!"><i className="heart icon"></i>Add to wishlist</button>
        {/* <div className="ui success left pointing label">
          <div className="content">
            <p>{confirmMessage}</p>
          </div>
        </div> */}
      </div>
      
    </>
    
  )
}

export default parkWishlist
