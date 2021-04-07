import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, location }) => {
  const sessionLinks = () => {
    if (location.pathname === "/login" || location.pathname === '/signup') {
      return null;
    } else {
      return (
        <nav className="nav-links">
          <Link to="/signup" className="signup">Sign Up</Link>
          &nbsp; &nbsp;
          <Link to="/login" className="login">Log In</Link>
        </nav>
      );
    }
  };

  const navDropDown = () => (
    <div className="header-group">
      <div className="user-dropdown">
        <div className="user-info">
          {currentUser.first_name} {currentUser.last_name}
        </div>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </div>
  );

  return currentUser ? navDropDown() : sessionLinks();
};

export default NavBar;