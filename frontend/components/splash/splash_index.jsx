import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class SplashIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    const spDisplay = currentUser ? (
      <div className="sp-nav-list">
        <div className="sp-user-dropdown">
          <div className="sp-user-info">
            <div className="sp-user-name">{currentUser.first_name} {currentUser.last_name}</div>
            <button className="sp-logout" onClick={logout}>Log Out</button>
          </div>
        </div>
        <div className="sp-nav-logged-in">
          <Link to="/"></Link>
        </div>
      </div>
    ) : (
      <div className="sp-nav-header">
        <nav className="sp-nav-links">
          <Link to="/login" className="sp-login">Log In</Link>
          <Link to="/signup" className="sp-signup">Sign Up</Link>
        </nav>
      </div>
    );
    return (
      <header className="splash-head">
        <div className="mt-splash-logo">
          <div className="sp-all-navs">
            <div className="sp-right-nav">
              {spDisplay}
            </div>
          </div>
            <Link to="/"><img className="logo-home" src={window.mealTimeLogo2} /></Link>
            <div className="splash-index">
              <div className="splash-title">Hot &#38; New Businesses</div>

              <div className="splash-biz">
                <div className="biz-1">
                  <Link to='businesses/1'><img src={window.biz1} className="biz-pic"/></Link>
                  <div>
                    <figcaption className="biz-cap">Shan Dong Restaurant</figcaption>
                  </div>
                </div>

                <div className="biz-2">
                  <Link to='businesses/2'><img src={window.biz2} className="biz-pic" /></Link>
                  <div>
                    <figcaption className="biz-cap">Ricky Thai Bistro</figcaption>
                  </div>
                </div>

                <div className="biz-3">
                  <Link to='businesses/3'><img src={window.biz3} className="biz-pic" /></Link>
                  <div>
                    <figcaption className="biz-cap">Bi-Rite Creamery</figcaption>
                  </div>
                </div> 
              </div>
            </div>
        </div>
      </header>
    );
  }
}

export default SplashIndex;
