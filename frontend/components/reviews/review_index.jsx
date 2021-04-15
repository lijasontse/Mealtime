import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

  render() {
    const { reviews, author } = this.props;

    if (reviews === undefined) return null;

    return (
      <div>
        <div className="review-main">
          <ul className="review-un-list"> 
            <div className="reviews-tag">Recommended Reviews</div>
              <div className="review-index-item">
                {
                  reviews.map((review) => {
                    return (
                      <ReviewIndexItem
                        review={review}
                        author={author}
                        currentUser={this.props.currentUser}
                        deleteReview={this.props.deleteReview}
                        key={review.id}
                      />
                    )
                  }
                )}
              </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default ReviewIndex;