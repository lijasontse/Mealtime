import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './navbar/navbar_container';
import errorPage from './error_page';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import BusinessIndexContainer from './business/business_index_container';
import BusinessShowContainer from './business/business_show_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/businesses" component={BusinessIndexContainer}/>
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer}/>
      <Route exact path="/" component={SplashContainer}/>
      <Route component={errorPage}/>
    </Switch>
  </div>

);

export default App;