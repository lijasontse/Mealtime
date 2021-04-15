import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  handleDelete() {
    return e => {
      e.preventDefault();
      this.props.deleteReview(this.props.reviewId)
        .then(window.location.reload())
    };
  };

  buttonVisible() {
    if (this.props.currentUser === this.props.review.reviewerId) 
      return (
        <div className="edit-delete-review">
          <div className="toggle-icon">
            <button className="edit-btn"><Link to={`/reviews/${this.props.review.business_id}/edit`}>Edit</Link></button>
            <button className="delete-btn" onClick={this.handleDelete()}>Delete</button>
            <div className="ellipsis-icon">
              <FontAwesomeIcon
                icon={faEllipsisH}
                fixedWidth
              />
            </div>
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
            <div className="reviewer-name">{review.reviewerFirstName}&nbsp;{review.reviewerLastName}</div>
            <p className="review-body">{review.body}</p>
          </div>
        </div>

        <div className="review-buttons">{this.buttonVisible()}</div>
      </div>
    );
  }
};

export default ReviewIndexItem;