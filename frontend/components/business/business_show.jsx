import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReviewIndexContainer from '../reviews/review_index_container';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews();
    this.props.fetchUsers();
  }

  render() {
    const { business, reviews, photoUrls } = this.props;

    if (!business) return <h1>Loading...</h1>
    return (
      <div>
        <NavBarContainer />
        <div className="biz-show-header">
          <ul className="biz-show-ul">
            {
              business.photoUrls.map((pic, i) => (
                <div key={i} className="show-header-imgs">
                  <img src={pic} className="show-img" />
                </div>
              ))
            }
          </ul>
            <div className="show-top-info">
              <h2 className="biz-show-name">{business.name}</h2>
              <li className="biz-show-details">
                <div className="biz-show-claimed">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    color="Dodgerblue"
                    fixedWidth
                  />
                  <span>&nbsp;Claimed &nbsp;</span>
                </div>
                <div className="first-bullet">&#8226;</div>
                <div className="biz-show-category">{business.category}</div>
              </li>
            </div>
        </div>
        <div className="biz-show-review"><Link to={`/businesses/${business.id}/newreview`}>Write a Review</Link></div>
        <ul className="biz-show-body">
          <div className="covid-update">Covid-19 Updates</div>
          <div className="updated-service-title">Updated Services</div>
          <div className="updated-service-body">
            <div className="covid-delivery">
              <FontAwesomeIcon
                icon={faCheck}
                fixedWidth
                color="green"
              />
              <span>&nbsp;Delivery&nbsp;</span>
            </div>
            <div className="covid-takeout">
              <FontAwesomeIcon
                icon={faCheck}
                fixedWidth
                color="green"
              />
              <span>&nbsp;Takeout&nbsp;</span>
            </div>
            <div className="covid-seating">
              <FontAwesomeIcon
                icon={faTimes}
                fixedWidth
                color="red"
              />
              <span>&nbsp;Outdoor Seating</span>
            </div>
          </div>
          <div className="health-safety-title">Health &#38; Safety Measures</div>
          <div className="health-safety-body">
            <div className="social-distance-tag">
              <FontAwesomeIcon
                icon={faCheck}
                fixedWidth
                color="green"
              />
              <span>&nbsp;Social distancing enforced&nbsp;</span>
            </div>
            <div className="wear-mask-tag">
              <FontAwesomeIcon
                icon={faCheck}
                fixedWidth
                color="green"
              />
              <span>&nbsp;Staff wears masks&nbsp;</span>
            </div>
            <div className="mask-required-tag">
              <FontAwesomeIcon
                icon={faCheck}
                fixedWidth
                color="green"
              />
              <span>&nbsp;Masks required</span>
            </div>
          </div>
          <li className="location-hour-title">Locaion &#38; Hours</li>
            <div className="date-time-tag">
              <div className="show-day-tag">Mon&nbsp;&nbsp;&nbsp;</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Tues&nbsp;&nbsp;&nbsp;</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Wed&nbsp;&nbsp;&nbsp;</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Thu&nbsp;&nbsp;&nbsp;</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Fri&nbsp;&nbsp;&nbsp;</div>
              <div className="show-time-tag">11:00AM - 9:30PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Sat&nbsp;&nbsp;&nbsp;</div>
              <div className="show-time-tag">11:00AM - 9:30PM</div>
            </div>
            <div className="date-time-tag">
              <div className="show-day-tag">Sun&nbsp;&nbsp;&nbsp;</div>
              <div className="show-time-tag">11:00AM - 9:00PM</div>
            </div>
        </ul>
        <div>
          <ReviewIndexContainer 
            users={this.props.users}
            reviews={reviews}
          />
        </div>
      </div>
    );
  }
}

export default BusinessShow;