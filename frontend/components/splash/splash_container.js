import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchBusinesses } from '../../actions/business_actions';
import SplashIndex from './splash_index';

const mapStateToProps = ({ entities: {businesses} }) => ({
  businesses: businesses
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashIndex));