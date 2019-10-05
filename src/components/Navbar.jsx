import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NavLink, Route } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <>
    <nav className="navbar">
      <h1>Crypto Tracker</h1>     
      <div className='links'>
        <NavLink>Home</NavLink>  
        <NavLink>Coins</NavLink>  
      </div> 
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  </>
  );
};

export default Navbar;
