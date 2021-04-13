import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render() {
    const { business } = this.props;

    if (!business) return <h1>Loading...</h1>
            
    return (
      <div>
        <NavBarContainer />
        <div className="biz-show-header">
          <ul className="biz-show-ul">
            {/* <img className="show-images" src={topPhotos} /> */}
            <h2 className="biz-show-name">{business.name}</h2>
            <li className="biz-show-details">
              <div className="biz-show-claimed">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  fixedWidth
                />
                <span>Claimed</span>
              </div>
              <div className="biz-show-category">{business.category}</div>
            </li>
          </ul>
        </div>
        <div className="biz-show-review">Write a Review</div>
        <ul className="biz-show-body">
          <li className="covid-update">Covid-19 Updates
            <div className="updated-service-title">Updated Services
              <div className="covid-delivery">
                <FontAwesomeIcon
                  icon={faCheck}
                  fixedWidth
                />
                <span>Delivery</span>
              </div>
              <div className="covid-takeout">
                <FontAwesomeIcon
                  icon={faCheck}
                  fixedWidth
                />
                <span>Takeout</span>
              </div>
              <div className="covid-seating">
                <FontAwesomeIcon
                  icon={faTimes}
                  fixedWidth
                />
                <span>Outdoor Seating</span>
              </div>
            </div>
            <div className="health-safety-title">Health &#38; Safety Measures
              <div className="social-distance-tag">
                <FontAwesomeIcon
                  icon={faCheck}
                  fixedWidth
                />
                <span>Social distancing enforced</span>
              </div>
              <div className="wear-mask-tag">
                <FontAwesomeIcon
                  icon={faCheck}
                  fixedWidth
                />
                <span>Staff wears masks</span>
              </div>
              <div className="mask-required-tag">
                <FontAwesomeIcon
                  icon={faCheck}
                  fixedWidth
                />
                <span>Masks required</span>
              </div>
            </div>
          </li>
          <li className="location-hour-title">Locaion &#38; Hours
            <div className="date-time-tag">
              <div className="show-day-tag">Mon</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Tues</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Wed</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Thu</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Fri</div>
              <div className="show-time-tag">11:00AM - 9:30PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Sat</div>
              <div className="show-time-tag">11:00AM - 9:30PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Sun</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default BusinessShow;