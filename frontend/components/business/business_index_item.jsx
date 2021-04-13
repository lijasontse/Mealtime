import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const { business, idx } = this.props; 
    return (
      <div className="businesses-index-header">
        <Link to={`/businesses/${business.id}`}>
          <ul className="biz-index-ul">
            <div className="biz-photo">
              <img src={business.photoUrl} />
            </div>
            <li className="biz-details">
              <div className="biz-name">{idx + 1}. {business.name}</div>
              <div className="biz-category">{business.category}</div>
              <div className="for-delivery">
                <FontAwesomeIcon 
                  icon={faCheck}
                  fixedWidth
                />
                <span>Delivery</span>
              </div>
              <div className="for-takeout">
                <FontAwesomeIcon
                  icon={faCheck}
                  fixedWidth
                />
                <span>Takeout</span>
              </div>
              <div className="for-outdoor">
                <FontAwesomeIcon
                  icon={faTimes}
                  fixedWidth
                />
                <span>Outdoor Seating</span>
              </div>
              <div className="contact-methods">
                <div className="biz-phone">{business.phone_number}</div>
                <div className="whole-address">
                  <div className="street-address">{business.address}</div>
                  <div className="regional-address">
                    {business.city}{", "}
                    {business.state} {business.zip_code}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default BusinessIndexItem;