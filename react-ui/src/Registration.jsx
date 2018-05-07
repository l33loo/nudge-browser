import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        contactName: "",
        contactEmail: ""
      };

    this.linkLogin = this.linkLogin.bind(this);
    this.onTypingFirstName = this.onTypingFirstName.bind(this);
    this.onTypingLastName = this.onTypingLastName.bind(this);
    this.onTypingEmail = this.onTypingEmail.bind(this);
    this.onTypingPassword = this.onTypingPassword.bind(this);
    this.onTypingPasswordConf = this.onTypingPasswordConf.bind(this);
    this.onTypingContactName = this.onTypingContactName.bind(this);
    this.onTypingContactEmail = this.onTypingContactEmail.bind(this);
  }

  linkLogin() {
    this.props.renderPage("Login");
  }

  // onChange={this.onTypingContactName}

  onTypingFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  onTypingLastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  onTypingEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  onTypingPassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  onTypingPasswordConf(event) {
    this.setState({
      passwordConfirmation: event.target.value
    });
  }

  onTypingContactName(event) {
    this.setState({
      contactName: event.target.value
    });
  }

  onTypingContactEmail(event) {
    this.setState({
      contactEmail: event.target.value
    });
  }

  render() {
    // const onSubmit = e => {
    //   e.preventDefault();
    // };

    return (
      <div>
        <form className="registration">
          <h1>Register</h1>
          <h2>You</h2>
          <div className="form-field">
          <label>First Name</label>
          <input className="name" value={ this.state.firstName } placeholder="Jane" onChange={this.onTypingFirstName} /><br/>
          </div>
          <div className="form-field">
            <label>Last Name</label>
            <input className="name" value={ this.state.lastName } placeholder="Doe" onChange={this.onTypingLastName} /><br/>
          </div>
          <div className="form-field">
            <label>Email</label>
            <input className="email" value={ this.state.email } placeholder="email@example.com" onChange={this.onTypingEmail} /><br/>
          </div>
          <div className="form-field">
            <label>Password</label>
            <input className="password" value={ this.state.password } placeholder="Password" onChange={this.onTypingPassword} /><br/>
          </div>
          <div className="form-field">
            <label>Password Confirmation</label>
            <input className="password-confirmation" value={ this.state.passwordConfirmation } placeholder="Password" onChange={this.onTypingPasswordConf} /><br/>
          </div>
          <h2>Your emergency contact</h2>
          <div className="form-field">
            <label>Contact's Name</label>
            <input className="name" value={ this.state.contactName } placeholder="Jane" onChange={this.onTypingContactName} /><br/>
          </div>
          <div className="form-field">
            <label>Contact's Email</label>
            <input className="email" value={ this.state.contactEmail } placeholder="email@example.com" onChange={this.onTypingContactEmail} /><br/>
          </div>
          <button type="submit" style={{cursor:'pointer'}}>Login</button>
        </form>
       <div>Already a user yet? <span className="formLink" onClick={ this.linkLogin } style={{cursor:'pointer'}}>Login here.</span></div>
      </div>
    );
  }
}