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
    const { review } = this.props;
    return (
      <div className="review-index-item">
        <div className="reviews-info">
          <div className="user-profile-pic">
            {/* <img src={review.photoUrl} /> */}
          </div>
          <div className="review-details">
            <div className="reviewer-names">
              <FontAwesomeIcon
                icon={faUserNinja}
                size="2x"
                color="#fff"
              />
              <span className="one-reviewer">{review.reviewerFirstName}&nbsp;{review.reviewerLastName}</span>
            </div>
            <div className="reviewer-rating">{review.rating}</div>
            <p className="review-body">{review.body}</p>
          </div>
        </div>

        <div className="review-buttons">{this.buttonVisible()}</div>
      </div>
    );
  }
};

export default ReviewIndexItem;