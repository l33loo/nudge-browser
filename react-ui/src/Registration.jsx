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
        <h1>You</h1>
        <label>First Name</label>
        <input className="name" value={ this.state.firstName } placeholder="Jane" />
        <label>Last Name</label>
        <input className="name" value={ this.state.lastName } placeholder="Doe" />
        <label>Email</label>
        <input className="email" value={ this.state.email } placeholder="email@example.com" />
        <label>Password</label>
        <input className="password" value={ this.state.password } placeholder="Password" />
        <label>Password Confirmation</label>
        <input className="password-confirmation" value={ this.state.passwordConfirmation } placeholder="Password" />

        <h1>Your emergency contact</h1>
        <label>First Name</label>
        <input className="name" value={ this.state.firstName } placeholder="Jane" />
        <label>Last Name</label>
        <input className="name" value={ this.state.lastName } placeholder="Doe" />
        <label>Email</label>
        <input className="email" value={ this.state.email } placeholder="email@example.com" />

        <button type="submit">Login</button>
      </form>
    );
  }
}