import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, clearErrors } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
  // author_id: state.session.id,
  business: state.entities.businesses[ownProps.match.params.businessId],
  businessId: ownProps.match.params.businessId,
  currentUser: state.session.id,
  errors: state.errors.review,
  formType: 'Create Review'

});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  clearErrors: () => dispatch(clearErrors()),
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);