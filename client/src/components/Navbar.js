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



      <div className="ui inverted menu navbar-menu">
        <div className="header item">
          <Link to='/'>
            <i className="home icon"></i> Home
          </Link>
        </div>
 

        <a className="item">
          <Link to="/regions">
            <i className="globe icon"></i>
            Regions
          </Link>
          {/* <div className="ui compact menu">
            <div className="ui simple dropdown item ">
              Dropdown
              < i className="dropdown icon"/>
              <div className="menu">
                <Link to="/regions"> Regions </Link>
                <div className="item">Choice 2</div>
                <div className="item">Choice 3</div>
              </div>
            </div>
          </div> */}
        </a>


        <div className="right menu">
          
          { !userIsAuthenticated() && 
          <a className="item">
            <Link to='/login'>
              <i className="sign in alternate icon"></i>
              Login or Register
            </Link>
          </a>
          }

          { userIsAuthenticated() &&
          <a className="item">
            <Link to={`/profile/${userID()}`} className="navbar-item"> <i className="user secret icon"></i> Profile</Link>          
          </a>
          }

          { userIsAuthenticated() &&
          <a className="item">
            <a onClick={handleLogout} className="button"> <i className="sign out alternate icon"></i>Log out</a>
          </a>
          }


        </div>
      </div>

  

    </>
  )

}

export default Navbar