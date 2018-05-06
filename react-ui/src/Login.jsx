import React, { Component } from 'react';
// import NavBar from './NavBar.jsx';

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
      <div>

      <form className="login">

        <h1>Login</h1>
        <div className="form-field">
          <label>Email</label>
          <input className="email" value={ this.state.email } placeholder="email@example.com" /><br/>
        </div>
        <div className="form-field">
          <label>Password</label>
          <input className="password" value={ this.state.password } placeholder="Password" /><br/>
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
    );
  }

}
