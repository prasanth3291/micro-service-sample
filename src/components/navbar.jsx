import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav style={{display:'flex' , backgroundColor:"whitesmoke"}}>
        <ul>
          <NavLink className='nav-link' to='/home'>
					  Home
				  </NavLink>          
        </ul>
        <ul>
          <NavLink className='nav-link' to='/register'>
					  Register
				  </NavLink>          
        </ul>
        <ul>
          <NavLink className='nav-link' to='/login'>
					  Login
				  </NavLink>          
        </ul>
        <ul>
          <NavLink className='nav-link' to='/posts'>
					  Post
				  </NavLink>          
        </ul>
        
      </nav>
    </div>
  )
}

export default Navbar