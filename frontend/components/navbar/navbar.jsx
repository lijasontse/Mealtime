import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
        <Link to="/login">Log In</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign Up</Link>
    </nav>
  );

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