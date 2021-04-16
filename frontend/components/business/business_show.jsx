import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheck, faTimes, faExternalLinkAlt, faPhoneAlt, faMapSigns } from '@fortawesome/free-solid-svg-icons';
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
        <div className="biz-show-mid">
          <div className="biz-show-review"><Link to={`/businesses/${business.id}/newreview`}>Write a Review</Link></div>
          <div className="right-biz-show">
            <div className="right-biz-info">
              <div className="biz-show-website">
                <a className="web-url" href={business.website_url} target="_blank">{business.website_url}</a>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  size="lg"
                />
              </div>
              <div className="biz-show-num">
                <span>{business.phone_number}</span>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  size="lg"
                />
              </div>
              <div className="biz-show-get-dir-tag">
                <span className="dir-tag">Get Directions
                  <FontAwesomeIcon
                    icon={faMapSigns}
                    size="lg"
                  />
                </span>
                <span className="show-address">
                  {business.address}&nbsp;
                      {business.city}&#44;&nbsp;
                      {business.state}&nbsp;
                      {business.zip_code}
                </span>
              </div>
            </div>
          </div>
        </div>
        <ul className="biz-show-body">
          <div className="left-show-biz">
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
            <div className="date-time-all">
              <div className="date-tag">
                <div className="show-day-tag">Mon</div>
                <div className="show-day-tag">Tues</div>
                <div className="show-day-tag">Wed</div>
                <div className="show-day-tag">Thu</div>
                <div className="show-day-tag">Fri</div>
                <div className="show-day-tag">Sat</div>
                <div className="show-day-tag">Sun</div>
              </div>
              <div className="time-tag">
                <div className="show-time-tag">11:00AM - 9:00PM</div>
                <div className="show-time-tag">11:00AM - 9:00PM</div>
                <div className="show-time-tag">11:00AM - 9:00PM</div>
                <div className="show-time-tag">11:00AM - 9:00PM</div>
                <div className="show-time-tag">11:00AM - 9:00PM</div>
                <div className="show-time-tag">11:00AM - 9:00PM</div>
                <div className="show-time-tag">11:00AM - 9:00PM</div>
              </div>
            </div>
            <div className="review-container">
              <ReviewIndexContainer 
                users={this.props.users}
                reviews={reviews}
              />
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default BusinessShow;