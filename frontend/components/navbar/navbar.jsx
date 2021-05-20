import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Search from '../search/search_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    const display = currentUser ? (
      <div className="nav-list">
        <li id="user-navs">
          <FontAwesomeIcon icon={faUserAstronaut} size="2x" />
          <ul className="user-dropdown-btn">
            <li>
              <ul className="user-info">
                <span className="user-dropdown-info"></span>
                <ul className="user-name"> 
                  <li>{currentUser.first_name}&nbsp;{currentUser.last_name}</li>
                </ul>
              </ul>
            </li>
            <li className="logout-btn">
              <button className="logout" onClick={logout}>Log Out</button>
            </li>
          </ul>
        </li>
        <div className="nav-logged-in">
          <Link to="/"></Link>
        </div>
      </div>
    ) : (
    <div className="nav-header">
      <div className="nav-links">
          <Link to="/login" className="login">Log In</Link>
          <Link to="/signup" className="signup">Sign Up</Link>
      </div>
    </div>
    );
    
    return (
      <div className="all-navs">
        <div className="left-nav">
          <Link to="/"><img className="logo-left" src={window.mealTimeLogo2} /></Link>
        </div>
        <Search />
        <div className="right-nav">
          {display}
        </div>
      </div>
    );
  }
}
export default NavBar;
