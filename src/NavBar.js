import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <div>
           <nav>
               <ul className='links'>
                   <li>
                        <Link className='list' to='/' >Sign Up</Link>
                        <Link className='list' to='/login' >Log In</Link>
                        <Link className='list'  to='/forgot' >Forgot Password</Link>
                        <Link className='list' to='/image' >Image Upload</Link>
                        <Link className='list' to='/delete' >Delete</Link>
                        <Link className='list' to='/address' >Address</Link>
                        <Link className='list' to='/changepassword' >change Password</Link>
                        <Link className='list' to='/sentotp' >send OTP</Link>
                   </li>
               </ul>
         </nav> 
        </div>

    )
}

export default NavBar
