import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Popup from 'reactjs-popup'

// import { getTokenFromLocalStorage } from '../helpers/auth'
const UserProfile = () => {
  const [userData, setUserData] = useState('')
  const [parksData, setParksData] = useState('')
  const params = useParams()
  const [wishlist, setUpdateWishlist] =  useState({
    wishList: []
  })
  const [confirm, setConfirm] = useState(null)

  
  useEffect(() => {
    const userInfo = async () => {
      const response = await axios.get(`/api/profile/${params.id}`)
      setUserData(response)
      const allParks = await axios.get('/api/parks/') 
      setParksData(allParks)
    }
    userInfo()
  }, [confirm])

  if (!userData || !parksData) return ''
  let arrayOfFilteredPark = []
  const { username, email, fullName, profilePic, wishList } = userData.data

  // * for Each lopp to make array of parks in wishlist
  wishList.forEach((wishlist, index)=>{
    const filteredParks = parksData.data.filter((item) =>{
      return item._id === wishList[index].toString()    
    }) 
    arrayOfFilteredPark = [...arrayOfFilteredPark, filteredParks]
  })

  // * function to remove the item from the wishlist 
  const removeFromWishlist = (event)=>{
    console.log('event.target.value', event.target.value)
    setConfirm('confirm')
    const filteredWishlistConst = wishList.filter(filter => {
      return filter !== event.target.value
    })
    const newWishList = { [event.target.name]: filteredWishlistConst }
    setUpdateWishlist(newWishList)
    
  }
  
  const handleConfirm = async () =>{
    console.log('updated wish list', wishlist)
    setConfirm('')
    await axios.put(
      `/api/profile/${userData.data.id}`,
      wishlist
    )
  }

  const handleCancel = () =>{
    setConfirm('')
  }


  const PopupExample = () => (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  )
  PopupExample()

  return (
    <div className="section">
      <div className="container">
        <h1 className="profile-title">{`${username}'s Profile`}</h1>

        <div className="user-info-container">
          <div className="profile-image-container">
            <img src={profilePic} className="ui medium circular image ui medium bordered image"/>
          </div>
          
          <div className="text-container">
            <h2>Full Name: {fullName}</h2>
            <hr/>
            <h2>Username (for display): {username}</h2>
            <hr/>
            <h2>Email: {email}</h2>
          </div>
        </div>

        <hr/>
        <div className="wishlist-items">
          {arrayOfFilteredPark.map((item, i) =>(
            <div className="parks-saved" key={i}>
              <Link to={`/parks/${item[0]._id}`}>
                <p>{item[0].name}</p>
                <img src={item[0].image} alt={item[0].name} />
              </Link>
              {!confirm ?
                <button name="wishList" value={item[0]._id} onClick={removeFromWishlist} > Remove {item[0].name} from wishlist </button>
                :
                <>
                  <button value={item[0]._id} onClick={handleConfirm} > Confirm? </button>
                  <button value={item[0]._id} onClick={handleCancel} > Cancel </button>
                </>
              }

              {/* <Popup trigger={<button name="wishList" value={item[0]._id} onClick={removeFromWishlist} > Trigger</button>} position="right center">
                <div>
                  <button value={item[0]._id} onClick={handleConfirm} > Confirm? </button>
                  <button value={item[0]._id} onClick={handleCancel} > Cancel </button>
                </div>
              </Popup> */}

            </div>
            
            
          ))}
        </div>
      </div>
    </div>
  )
}
export default UserProfile