import { connect } from 'react-redux';
import { 
  fetchReviews, 
  deleteReview,
} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.id,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);