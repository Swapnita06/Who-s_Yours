import React from 'react'
import './Navbar.css';
import { useState } from 'react';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar" >
      <ul className={`navbar-list ${showMenu ? 'show' : ''}`} style={{display:'flex', listStyle:'none',justifyContent:'space-around',flexWrap:'wrap'}}>
        <li  className='yours'>
          <h1>Who's Yours?</h1>
        </li>
        <li className="search-bar">
        <input type="text" placeholder="Search..." />
      </li>
      <li className="navbar-item">
      <button className='chat'>
          Chat
        </button>
        </li>
        <li className="navbar-item">
        <button className='discover' >
          Discover
        </button>
        </li>
        <li className="navbar-item">
        <button >
         Profile
        </button>
        </li>
      </ul>
      <button className="navbar-toggle-btn" onClick={toggleMenu}>
      &#9776;
      </button>
    </nav>
  )
}

export default Navbar
