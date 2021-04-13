import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import BusinessIndexItem from './business_index_item';

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
            <div className="business-index-item">
              {
                businesses.map((business) => <BusinessIndexItem
                  business={business}
                  fetchBusinesses={fetchBusinesses}
                  key={business.id}
                />)
              }
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default BusinessIndex;