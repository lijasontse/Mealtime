import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCheck, faTimes, faExternalLinkAlt, faPhoneAlt, faMapSigns, faStar } from '@fortawesome/free-solid-svg-icons';
import ReviewIndexContainer from '../reviews/review_index_container';
import Footer from '../footer/footer';
import BusinessMap from '../business/business_map';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews();
    this.props.fetchUsers();
    // this.props.fetchBusinesses();
  }

  render() {
    const { business, reviews, photoUrls } = this.props;

    let showRating = <div></div>;
    let reviewArr = Object.values(reviews);
    
    if (!business) { 
      return <h1>Loading...</h1> 
    } else {
      let finalRating = 0;
      if (reviewArr.length === 0) {
        finalRating = 5;
      } else {
        let allRating = 0;
        let avgRating = 0;
        for (let i = 0; i < reviewArr.length; i++) {
          if (reviewArr[i].business_id === business.id) {
            allRating += reviewArr[i].rating;
          }
        }
  
        avgRating = allRating / reviewArr.length;
        finalRating = Math.floor(avgRating);

        let oneStar = finalRating === 1;
        let twoStar = finalRating === 2;
        let threeStar = finalRating === 3;
        let fourStar = finalRating === 4;
        let fiveStar = finalRating === 5;

        switch (true) {
          case oneStar:
            showRating = <div className="star1"><img src={window.star1} /></div>
            break;
          case twoStar:
            showRating = <div className="star2"><img src={window.star2}/></div>
            break;
          case threeStar:
            showRating = <div className="star3"><img src={window.star3} /></div>
            break;
          case fourStar:
            showRating = <div className="star4"><img src={window.star4} /></div>
            break;
          case fiveStar:
            showRating = <div className="star5"><img src={window.star5} /></div>
            break;
          default:
            break;
        }
      }
    }
    
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
        </div>
        <div className="show-top-info">
          <h2 className="biz-show-name">{business.name}</h2>
          <div className="overall-ratings" >{showRating}
            <div className="num-ratings" >{reviewArr.length} Reviews</div>
          </div>
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
        <div className="biz-show-container">
          <div className="biz-show-mid">
            <div className="biz-show-review"><Link to={`/businesses/${business.id}/newreview`}>
              <FontAwesomeIcon 
                icon={faStar}
                color="white"
                fixedWidth
                className="write-review-star"
              />
              Write a Review</Link></div>
            <div className="line-between"></div>
            <ul className="biz-show-body">
              <div className="left-show-biz">
                <div className="covid-update">COVID-19 Updates</div>
                <div className="biz-cool-message">"{business.message}"</div>
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
                <li className="location-hour-title">Location &#38; Hours</li>
                <div className="map-time-container">
                  <div className="biz-map-show">
                    <div className="biz-map-indiv">
                      <BusinessMap businesses={business} type="show" zoom="false" />
                    </div>
                  </div>
                  <div className="date-time-all">
                    <div className="date-tag">
                      <div className="show-day-tag">{business.days[0]}</div>
                      <div className="show-day-tag">{business.days[1]}</div>
                      <div className="show-day-tag">{business.days[2]}</div>
                      <div className="show-day-tag">{business.days[3]}</div>
                      <div className="show-day-tag">{business.days[4]}</div>
                      <div className="show-day-tag">{business.days[5]}</div>
                      <div className="show-day-tag">{business.days[6]}</div>
                    </div>
                    <div className="time-tag">
                      <div className="show-time-tag">{business.hours[0]}</div>
                      <div className="show-time-tag">{business.hours[1]}</div>
                      <div className="show-time-tag">{business.hours[2]}</div>
                      <div className="show-time-tag">{business.hours[3]}</div>
                      <div className="show-time-tag">{business.hours[4]}</div>
                      <div className="show-time-tag">{business.hours[5]}</div>
                      <div className="show-time-tag">{business.hours[6]}</div>
                    </div>
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
                <a className="dir-tag" href={`https://www.google.com/maps/dir/?api=1&destination=${business.lat},${business.lng}`} target="_blank">
                  <div className="dir-tag-text">Get Directions</div>
                  <span>
                      <FontAwesomeIcon
                      icon={faMapSigns}
                      size="lg"
                    />
                  </span>
                </a>
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
        <Footer />
      </div>
    );
  }
}

export default BusinessShow;