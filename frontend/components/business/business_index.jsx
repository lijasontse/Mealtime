import React from 'React';
import { withRouter } from 'react-router-dom';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const { businesses, fetchBusinesses } = this.props;

    return (
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
    )
  }
}

export default BusinessIndex;