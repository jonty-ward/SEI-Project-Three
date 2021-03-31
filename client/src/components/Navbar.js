import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userIsAuthenticated, userID } from '../helpers/auth'

const Navbar = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    location.reload()


  }

  return (
    <>



      <div className="ui inverted menu">
        <div className="header item">
          <Link to='/'>
          Home
          </Link>
        </div>
        <a className="item">
          <Link to="/regions">
            Regions
          </Link>
        </a>
        <div className="right menu">
          


          { !userIsAuthenticated() && 
          <a className="item">
            <Link to='/login'>
              Login or Register
            </Link>
          </a>
          }

          { userIsAuthenticated() &&
          <a className="item">
            <Link to={`/profile/${userID()}`} className="navbar-item">Profile</Link>          
          </a>
          }

          { userIsAuthenticated() &&
          <a className="item">
            <button onClick={handleLogout} className="button">Log out</button>
          </a>
          }


        </div>
      </div>

  

    </>
  )

}

export default Navbar