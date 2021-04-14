import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId],
  reviews: Object.values(state.entities.reviews).filter(
    (review) => review.business_id === ownProps.match.params.id
  ),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);