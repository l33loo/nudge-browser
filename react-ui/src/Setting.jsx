import React, { Component } from 'react';

export default class Setting extends Component {
  constructor() {
    super();
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        contactName: "",
        contactEmail: ""
      };

    // bind 'this' here
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <form className="settings">
        <h1>Settings</h1>
        <h2>Your emergency contact</h2>
        <div className="form-field">
          <label>Contact's Name</label>
          <input className="name" value={ this.state.firstName } placeholder="Jane" /><br/>
        </div>
        <div className="form-field">
          <label>Contact's Email</label>
          <input className="email" value={ this.state.email } placeholder="email@example.com" /><br/>
        </div>
        <div>
          <input type="checkbox" value={ this.state.notificationsEnabled } />
          <label for="notifications"> Check if you love this website!</label>
        </div>
        <button type="submit" style={{cursor:'pointer'}}>Edit</button>
      </form>
    );
  }
}