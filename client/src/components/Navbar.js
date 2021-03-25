import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <h1>This is navbar</h1>
      <Link to='/'>
        Home
      </Link>
      <Link to='/register'>
        Register
      </Link>
      <Link to='/login'>
        Login
      </Link>
      <Link to='/comments'>
        comments
      </Link>
    </>
  )

}

export default Navbar