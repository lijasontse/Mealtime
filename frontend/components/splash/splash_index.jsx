import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class SplashIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }  

  render() {
    return (
      <header id="nav-bar"><NavBarContainer/>
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
      </header>
    );
  }
}

export default SplashIndex;
