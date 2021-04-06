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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`errors-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {

    if (this.props.formType === 'Log In') {
      return (
        <div className="header">
          <div className="session-form-container">
            <form onSubmit={this.handleSubmit} className="session-form-box">
              Log in to MealTime!
              <br/>
              New To MealTime? {this.props.navLink}
              {this.renderErrors()}
              By logging in, you agree to MealTime's Wildest Imaginations!
              <br/>
              <div className="session-form">
                <br/>
                <label>Email: {' '}
                  <input 
                    type="text" 
                    value={this.state.email} 
                    onChange={this.update('email')}
                    className="session-input"
                  />
                </label>
                <br/>
                <label>Password: {' '}
                  <input 
                    type="password" 
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="session-input"
                  />
                </label>
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        </div>
      )       
    } else if (this.props.formType === 'Sign Up') {
      return (
        <div className="session-form-container"> 
          <form onSubmit={this.handleSubmit} className="session-form-box">
            Sign Up for MealTime!
            <br/>
            Already on MealTime? {this.props.navLink}
            {this.renderErrors()}
            Connect with great local businesses
            By continuing, you agree to MealTime's Wildest Dreams!
            <br/>
            <div className="session-form">
              <br/>
              <label>First Name: {' '}
                <input 
                  type="text" 
                  value={this.state.first_name} 
                  onChange={this.update('first_name')}
                  className="session-input"
                />
              </label>
              <br/>
              <label>Last Name: {' '}
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className="session-input"
                />
              </label>
              <br/>
              <label>Email: {' '}
                  <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-input"
                />
              </label>
              <br />
              <label>Password: {' '}
                  <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-input"
                />
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SessionForm;