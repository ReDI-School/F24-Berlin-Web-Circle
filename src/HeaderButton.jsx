import React from 'react';
import './HeaderButton.css';

const HeaderButton = () => {
  return (
    <div className="header-button">
      <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="profile-icon">
        <div className="circle">
          <div className="user-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderButton;
