import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faUserNinja } from '@fortawesome/free-solid-svg-icons';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteReview(this.props.review.id)
      .then(window.location.reload())
  };

  buttonVisible() {
    if (this.props.currentUser === this.props.review.reviewerId) 
      return (
        <div className="edit-delete-review">
          <div className="ellipsis-icon">
            <FontAwesomeIcon
              icon={faEllipsisH}
              size="lg"
            />
          </div>
          <div className="toggle-icon">
            <button className="edit-btn"><Link to={`/businesses/${this.props.review.business_id}/review/${this.props.review.id}/edit`}>Edit Review</Link></button>
            <button className="delete-btn" onClick={this.handleDelete}>Remove Review</button>
          </div>
        </div>
      );
  }

  render() {
    const { review, author } = this.props;
  
    let oneStar = review.rating === 1;
    let twoStar = review.rating === 2;
    let threeStar = review.rating === 3;
    let fourStar = review.rating === 4;
    let fiveStar = review.rating === 5;

    const createdDate = new Date(review.created_at).toLocaleDateString();

    let reviewerRating; 

    switch (true) {
      case oneStar:
        reviewerRating = <div className="one-star"><img src="https://mealtime-img.s3-us-west-1.amazonaws.com/onestar.png" /></div>
        break;
      case twoStar:
        reviewerRating = <div className="two-star"><img src="https://mealtime-img.s3-us-west-1.amazonaws.com/twostar.png" /></div>
        break;
      case threeStar:
        reviewerRating = <div className="three-star"><img src="https://mealtime-img.s3-us-west-1.amazonaws.com/threestar.png" /></div>
        break;
      case fourStar:
        reviewerRating= <div className="four-star"><img src="https://mealtime-img.s3-us-west-1.amazonaws.com/fourstar.png" /></div>
        break;
      case fiveStar:
        reviewerRating= <div className="five-star"><img src="https://mealtime-img.s3-us-west-1.amazonaws.com/fivestar.png" /></div>
        break;
      default:
        break;
    }


    return (
      <div className="review-index-item">
        <div className="reviews-info">
          <div className="review-details">
            <div className="reviewer-names">
              <FontAwesomeIcon
                icon={faUserNinja}
                size="2x"
                color="#fff"
              />
              <span className="one-reviewer">{review.reviewerFirstName}&nbsp;{review.reviewerLastName}</span>
            </div>
            <div className="reviewer-rating">{reviewerRating}
              <span className="review-date">{createdDate}</span> 
              <div className="review-buttons">{this.buttonVisible()}</div>
            </div>
            <p className="review-body">{review.body}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ReviewIndexItem;