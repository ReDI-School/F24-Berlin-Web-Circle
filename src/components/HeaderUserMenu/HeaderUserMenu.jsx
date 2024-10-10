import React, { useState } from 'react';
import './HeaderUserMenu.css';

const HeaderUserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <button
        type="button"
        className="header-button"
        expanded={isOpen}
        label="Main navigation menu"
        onClick={handleClick}
      >
        <div className="icon-container">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 32 32" 
            className="hamburger-icon"
           >
            <path 
             d="M2 8h28M2 16h28M2 24h28" 
             stroke="currentColor" 
             strokeWidth="3" 
            fill="none" 
           />
          </svg>
        </div>
        <div className="icon-container user-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="profile-icon"
          >
            <path
              d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>Sign Up</li>
            <li>Log In</li>
            <hr className="menu-divider" />
            <li>Gift Cards</li>
            <li>Airbnb your home</li>
            <li>Host an experience</li>
            <li>Help Center</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderUserMenu;
