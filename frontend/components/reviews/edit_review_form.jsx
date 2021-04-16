import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';
import Rating from 'react-rating';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: '',
      author_id: '',
      business_id: '',
      id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
    this.props.fetchReview(this.props.match.params.reviewId)
      .then(() => {
        this.setState({
          body: this.props.review ? this.props.review.body : "",
          rating: this.props.review ? this.props.review.rating : "",
          author_id: this.props.currentUser ? parseInt(this.props.currentUser) : "",
          business_id: this.props.match.params.businessId ? parseInt(this.props.match.params.businessId) : "",
          id: this.props.match.params.reviewId ? parseInt(this.props.match.params.reviewId) : ""
        })
      })
  }

  navigateToBusinessShow() {
    const url = `/businesses/${this.state.business_id}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const navigate = this.navigateToBusinessShow.bind(this);
    const review = Object.assign({}, this.state);
    this.props.updateReview(review)
      .then(() => navigate());
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }

  handleHover() {
    switch (this.state.rating) {
      case 1:
        return <p id="rating-message">Not good</p>;
      case 2:
        return <p id="rating-message">Could've been better</p>;
      case 3:
        return <p id="rating-message">OK</p>;
      case 4:
        return <p id="rating-message">Good</p>;
      case 5:
        return <p id="rating-message">Great!</p>;
      default:
        return <p id="rating-message">Select your rating</p>;
    }
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
          <div className="review-form-main">
            <form onSubmit={this.handleSubmit} className="review-form-box">
              <div className="review-form-biz-name">
                <Link to={`/businesses/${business.id}`} className="biz-name-link">
                  {business.name}
                </Link>
                <span className="form-guideline">Read our review guidelines.</span>
              </div>
              <div className="review-ratings">
                <div className="rating-msg">{this.handleHover()}</div>
                <Rating
                  emptySymbol="fa fa-star fa-lg un-filled"
                  initialRating={this.state.rating}
                  fullSymbol="fa fa-star fa-lg filled"
                  onChange={this.ratingChanged}
                  className="plz-work-rating"
                  onHover={this.handleHover}
                />
                <textarea
                  className="review-form-inputs"
                  value={this.state.body}
                  onChange={this.update('body')}
                  placeholder="This spot is serving meal kits, as well as offering
                  delivery during COVID. I'm so glad! Of course nothing beats the in-person
                  experience, but delivery is a great second option right now. The food was a little
                  cold, but I understand this is a new operation for them..."
                />
              </div>
              {this.renderErrors()}
              <button className="review-form-submit">Update Review</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditReviewForm;