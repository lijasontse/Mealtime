import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import BusinessIndexItem from './business_index_item';
import BusinessMap from './business_map';
import Footer from '../footer/footer'

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { businesses, fetchBusinesses } = this.props;

    return (
      <div>
        <NavBarContainer />
        <div className="business-main">
          <ul className="business-un-list">
            <div className="best-intro-tag">Browsing in San Francisco Bay Area, CA </div>
            <div className="results-tag">All Results</div>
              <div className="business-index-item">
                {
                  businesses.map((business, idx) => <BusinessIndexItem
                    business={business}
                    idx={idx}
                    fetchBusinesses={fetchBusinesses}
                    key={business.id}
                  />)
                }
              </div>
          </ul>
          <div className="right-biz-map">
            <div className="biz-map-container">
              <BusinessMap businesses={businesses}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default BusinessIndex;