import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
         <nav id="navbar" className="navbar">
                <div className="menu">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='about'>About</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                    </ul>
                </div>
          </nav>
    </>
  )
}

export default Navbar
