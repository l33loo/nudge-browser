// Keep file for future use in case needed.

import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      timeLastActivity: 0,
    };

    this.handleInput = this.handleInput.bind(this);
    this.linkRegistration = this.linkRegistration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  linkRegistration() {
    this.props.renderPage("Registration");
  }

  // Starting with Chrome 50, this property also takes a
  // FederatedCredential instance or a PasswordCredential instance.
  onSubmit(event) {
    event.preventDefault();
    const stateJson = this.state;
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(stateJson),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.props.updateState({ tagName: "Setting" })); // this.props.changePage('Main');
  }

  render() {

    return (
      <form className="login" onSubmit={ this.onSubmit }>

        <h1>Login</h1>
        <div className="form-section">
          <div className="form-field">
            <label>Email</label>
            <input name="email" value={ this.state.email } placeholder="email@example.com" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Password</label>
            <input name="password" value={ this.state.password } placeholder="Password" onChange={this.handleInput} /><br/>
          </div>
        </div>
        <button type="submit" style={{cursor:'pointer'}}>Login</button>
        <div>Not a user yet? <span className="formLink" onClick={ this.linkRegistration } style={{cursor:'pointer'}}>Register here.</span></div>

      </form>
    );
  }
}
