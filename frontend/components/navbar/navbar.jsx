import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    const display = currentUser ? (
      <div className="nav-list">
        <div className="user-dropdown">
          <div className="user-info">
            <div className="user-name">{currentUser.first_name} {currentUser.last_name}</div>
            <button className="logout" onClick={logout}>Log Out</button>
          </div>
        </div>
        <div className="nav-logged-in">
          <Link to="/"></Link>
        </div>
      </div>
    ) : (
    <div className="nav-logo">
          <div className="mt-nav-logo">
            <Link to="/"><img className="logo-home" src={window.mealTimeLogo2}/></Link>
          </div>
      <nav className="nav-links">
          <Link to="/login" className="login">Log In</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
      </nav>
    </div>
    );
    
    return (
      <div className="main-nav">
        <div className="right-nav">
          {display}
        </div>
      </div>
    );
  }
}
export default NavBar;