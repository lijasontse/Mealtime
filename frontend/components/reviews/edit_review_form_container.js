import { connect } from 'react-redux';
import { updateReview, fetchReview, clearErrors } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import EditReviewForm from './edit_review_form';


const mapStateToProps = (state, ownProps) => ({
  formType: "Update Review",
  business: state.entities.businesses[ownProps.match.params.businessId],
  review: state.entities.reviews[ownProps.match.params.reviewId],
  currentUser: state.session.id,
  errors: state.errors.review,
  businessId: ownProps.match.params.businessId,
  reviewId: ownProps.match.params.reviewId
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: review => dispatch(updateReview(review)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditReviewForm);