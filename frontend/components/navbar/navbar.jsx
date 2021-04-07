import React from 'react';
import { Link } from 'react-router-dom';

// const NavBar = ({ currentUser, logout, location }) => {
//   const sessionLinks = () => {
//     if (location.pathname === "/login" || location.pathname === '/signup') {
//       return null;
//     } else {
//       return (
//         <nav className="nav-links">
//           <Link to="/signup" className="signup">Sign Up</Link>
//           &nbsp; &nbsp;
//           <Link to="/login" className="login">Log In</Link>
//           <Link to="/"><img className="mt-logo" src={window.mealTimeLogo} /></Link>
//           <img className="homepage-art" src={window.homePage} />
//         </nav>
//       );
//     }
//   };

//   const navDropDown = () => (
//     <div className="header-group">
//       <div className="user-dropdown">
//         <div className="user-info">
//           {currentUser.first_name} {currentUser.last_name}
//         </div>
//         <button className="header-button" onClick={logout}>Log Out</button>
//       </div>
//     </div>
//   );

//   return currentUser ? navDropDown() : sessionLinks();
// };

// export default NavBar;

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
            {currentUser.first_name} {currentUser.last_name}
          </div>
        </div>
        <button className="logout" onClick={logout}>Log Out</button>
      </div>
    ) : (
      <nav className="nav-links">
        <Link to="/signup" className="signup">Sign Up</Link>
        <Link to="/login" className="login">Log In</Link>
      </nav>
    );

    return (
      <div className="main-nav">
        <div className="right-nav">
          {display}
        </div>
        <Link to="/"><img className="mt-logo" src={window.mealTimeLogo} /></Link>
        <div className="homepage-img">
          <img className="homepage-art" src={window.homePage} />
        </div>
      </div>
    );
  }
}
export default NavBar;