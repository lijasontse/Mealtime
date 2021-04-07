import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.handleDemo({
      email: 'demouser@demo.com',
      password: 'good123'
    })
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session-error alert-error" key={`errors-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {

    if (this.props.formType === 'Log In') {
      return (
        <div className="session-form">
          <div className="header-top">
            <Link to="/"><img className="mt-logo" src={window.mealTimeLogo}/></Link>
          </div>
          <div className="session-form-main">
            <div className="session-form-container">
              <form onSubmit={this.handleSubmit} className="session-form-box">
                <p className="session-form-header">Log in to Mealtime!</p> 
                <p className="session-form-subheader">New To Mealtime? {this.props.navLink}</p>
                <p className="session-form-subheader3">By logging in, you agree to Mealtimes's Wildest Imaginations!</p>
                {this.renderErrors()}
                <div className="session-form">
                  <label>
                    <input 
                      type="email" 
                      value={this.state.email} 
                      onChange={this.update('email')}
                      className="session-input"
                      placeholder="Email"
                      required
                    />
                  </label>
                  <label>
                    <input 
                      type="password" 
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="session-input"
                      placeholder="Password"
                      required
                    />
                  </label>
                  <input className="session-submit" type="submit" value={this.props.formType} />
                  <button className="demo-login" onClick={this.handleDemo}>Demo Login</button>
                  <p className="session-form-footer">New To Mealtime? {this.props.navLink}</p>
                </div>
              </form>
              <img className="sessions-art" src={window.sessionArt} />
            </div>
          </div>
        </div>
      )       
    } else if (this.props.formType === 'Sign Up') {
      return (
        <div className="main-session-form">
          <div className="header-top">
            <Link to="/"><img className="mt-logo" src={window.mealTimeLogo} /></Link>
          </div>
        <div className="session-form-main">
          <div className="session-form-container"> 
            <form onSubmit={this.handleSubmit} className="session-form-box">
              <p className="session-form-header">Sign Up for Mealtime</p> 
              <p className="session-form-subheader">Connect with great local businesses</p>
              <p className="session-form-subheader3">By continuing, you agree to MealTime's Wildest Dreams!</p>
              {this.renderErrors()}
              <div className="session-form-inputs">
                <label>
                  <input 
                    type="text" 
                    value={this.state.first_name} 
                    onChange={this.update('first_name')}
                    className="session-sign-up"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    value={this.state.last_name}
                    onChange={this.update('last_name')}
                    className="session-sign-up-1"
                    placeholder="Last Name"
                    required
                  />
                </label>
                <label>
                    <input
                    type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="session-input"
                    placeholder="Email"
                    required
                    />
                </label>
                <label>
                    <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                    placeholder="Password"
                    required
                    />
                </label>
                <input className="session-submit" type="submit" value={this.props.formType} />
                <button className="demo-signup" onClick={this.handleDemo}>Demo Login</button>
                <p className="session-form-footer">Already on Mealtime? {this.props.navLink}</p>
              </div>
            </form>
            <img className="sessions-art" src={window.sessionArt} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SessionForm;