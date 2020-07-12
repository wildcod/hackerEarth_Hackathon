import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="todo-header-wrapper">
      <div className="search">
        <span>Logo</span>
        <input placeholder="&#xF002; | search..." />
      </div>
      <div className="tabs"></div>
      <div className="status"></div>
    </div>
  );
};

export default Header;
