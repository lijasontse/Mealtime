import { connect } from 'react-redux';
import { fetchBusiness } from '../../actions/business_actions';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId],
  reviews: Object.values(state.entities.reviews).filter(
    (review) => review.business_id === ownProps.match.paras.id
  )
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessShow);