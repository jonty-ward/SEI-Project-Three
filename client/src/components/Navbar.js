import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/auth'

const Navbar = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    location.reload()
  }

  return (
    <div className="navbar">
      {/* <h1>This is navbar</h1> */}
      <div className="navbar-brand navbar-item">
        <Link to='/'>
          Home
        </Link>
      </div>
      <div className="navbar-start">
        <div className="navbar-item">
          <Link to="/regions">
            Regions
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        { !userIsAuthenticated() && 
        <>
          <div className="navbar-item">
            <Link to='/register'>
              Register
            </Link>
          </div>
          <div className="navbar-item">
            <Link to='/login'>
              Login
            </Link>
          </div>
        </>
        }
        { userIsAuthenticated() &&
          <Link to='/myaccount' className="navbar-item">Account</Link>
        }   
        { userIsAuthenticated() &&
          <button onClick={handleLogout} className="button">Log out</button>
        }
      </div>
    </div>
  )

}

export default Navbar