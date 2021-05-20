import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchReviews, deleteReview, updateReview } from '../../actions/review_actions';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId],
    reviews: Object.values(state.entities.reviews).filter(
      (review) => review.business_id == ownProps.match.params.businessId
    ),
    users: state.entities.users,
    // businesses: state.entities.businesses
  }
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
  updateReview: review => dispatch(updateReview(review)),
  // fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);