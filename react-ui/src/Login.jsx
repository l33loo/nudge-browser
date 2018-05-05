import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };

    // bind this here
  }

  render() {
    // const onSubmit = e => {
    //   e.preventDefault();
    // };

    return (
      <form className="login">
        <label>Email</label>
        <input className="login-email" value={ this.state.email } placeholder="email@example.com" />
        <label>Password</label>
        <input className="login-password" value={ this.state.password } placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }

}
