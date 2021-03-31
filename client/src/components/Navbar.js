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



      <div className="ui menu">
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
          {/* <div className="navbar-item">
            <Link to='/register'>
              Register
            </Link>
          </div> */}
          <div className="navbar-item">
            <Link to='/login'>
              Login or Register
            </Link>
          </div>
        </>
          }
          { userIsAuthenticated() &&
          <Link to={`/profile/${userID()}`} className="navbar-item">Profile</Link>
          }   
          { userIsAuthenticated() &&
          <button onClick={handleLogout} className="button">Log out</button>
          }
        </div>
      </div>
    </>
  )

}

export default Navbar