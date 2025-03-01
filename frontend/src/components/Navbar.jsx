import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(()=>{
    if(isDarkTheme ){
      document.body.classList.add('dark-theme')
      localStorage.setItem('theme', 'dark')
    }else{
      document.body.classList.remove('dark-theme')
      localStorage.setItem('theme' , 'light')
    }
  }, [isDarkTheme])

  const toogleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  const toogleTheme = ()=>{
    setIsDarkTheme(!isDarkTheme)
    setIsMenuOpen(false)
    console.log(isDarkTheme)
  }

  return (
    <nav className='nav'>

      <div className='logo'>
      <h2><a href='/'>Task Management System</a></h2>
      </div>

      <div className={`menu-icon ${isMenuOpen? 'open' : ''}`} onClick={toogleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isMenuOpen? 'show': 'hide'}`}>
      <li>
          <Link className='link' onClick={toogleTheme}>
            {isDarkTheme? 'Light Mode': 'Dark Mode'}
          </Link>
        </li>
        <li>
          <Link className='link' to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
        </li>
        <li>
          <Link className='link' to="/tasklist" onClick={() => setIsMenuOpen(false)}>Tasks</Link>
        </li>
        <li>
          <Link className='link' to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </li>
        
      </ul>

    </nav>
  );
}

export default Navbar;
