import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to="/signup" className="session-form-link">Sign up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    handleDemo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);