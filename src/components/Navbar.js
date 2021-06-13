import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import './style.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink to='/'>
          <img className='logo' src={logo} alt="logo" />
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink exact className='nav__link' to='/' activeClassName='active__link'>Home</NavLink>
          </li>
          <li>
            <NavLink className='nav__link' to='/about' activeClassName='active__link'>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
