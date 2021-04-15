import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import NavBarContainer from '../navbar/navbar_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser,
      business_id: this.props.businessId,
      body: '',
      rating: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }


  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navigateToBusinessShow() {
    const url = `/businesses/${this.state.business_id}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const navigate = this.navigateToBusinessShow.bind(this);
    const review = Object.assign({}, this.state);
    this.props.createReview(review)
      .then(() => navigate());
  }


  renderErrors() {
    return (
      <ul className="review-form-error"> 
        {this.props.errors.map((error, i) => (
          <li className="review-error review-alert-error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const { business } = this.props;
    if (!business) return <h1>Loading...</h1>
    return (
      <div>
        <NavBarContainer />
        <div className="review-form-all">
          <div className="review-form-biz-name">
            <Link to={`/businesses/${business.id}`} className="biz-name-link">
              {business.name}
            </Link>
            <span className="form-guideline">Read our review guidelines.</span>
          </div>
          <div className="review-form-main">
            <form onSubmit={this.handleSubmit} className="review-form-box">
              <div className="review-ratings">
                <div id="rating-stars" className="review-stars">Select your rating</div>
                <label className="star-label">
                  <input 
                    type="number" 
                    min="1"
                    max="5"
                    value={this.state.rating} 
                    onChange={this.update('rating')}
                  />
                </label>
              </div>
              <textarea 
                className="review-form-inputs"
                value={this.state.body} 
                onChange={this.update('body')} 
                cols="60" 
                rows="25"
                placeholder="This spot is serving meal kits, as well as offering
                delivery during COVID. I'm so glad! Of course nothing beats the in-person
                experience, but delivery is a great second option right now. The food was a little
                cold, but I understand this is a new operation for them..."
              />
              {this.renderErrors()}
              <button className="review-form-submit">Post Review</button>
            </form>
          </div>
        </div>
      </div>
    )
  }


}

export default ReviewForm;