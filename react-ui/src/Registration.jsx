import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        contactFisrtName: "",
        contactLastName: "",
        contactEmail: ""
      };

    // bind 'this' here
  }

  render() {
    // const onSubmit = e => {
    //   e.preventDefault();
    // };

    return (
      <form className="registration">
        <h1>Register</h1>
        <h2>You</h2>
        <div className="form-field">
        <label>First Name</label>
        <input className="name" value={ this.state.firstName } placeholder="Jane" /><br/>
        </div>
        <div className="form-field">
          <label>Last Name</label>
          <input className="name" value={ this.state.lastName } placeholder="Doe" /><br/>
        </div>
        <div className="form-field">
          <label>Email</label>
          <input className="email" value={ this.state.email } placeholder="email@example.com" /><br/>
        </div>
        <div className="form-field">
          <label>Password</label>
          <input className="password" value={ this.state.password } placeholder="Password" /><br/>
        </div>
        <div className="form-field">
          <label>Password Confirmation</label>
          <input className="password-confirmation" value={ this.state.passwordConfirmation } placeholder="Password" /><br/>
        </div>
        <h2>Your emergency contact</h2>
        <div className="form-field">
          <label>Contact's Name</label>
          <input className="name" value={ this.state.firstName } placeholder="Jane" /><br/>
        </div>
        <div className="form-field">
          <label>Contact's Email</label>
          <input className="email" value={ this.state.email } placeholder="email@example.com" /><br/>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}