import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SplashIndex from './splash_index';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashIndex));