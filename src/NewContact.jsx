import React, { Component } from 'react';

export default class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contact: {
          nickname: "",
          email: ""
        }
      };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      contact: {
        [name]: value
      }
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const contact = this.state.contact;
    const userId = window.localStorage.getItem('nudge_token');
    fetch(`https://nudge-server.herokuapp.com/insert/${userId}`, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.props.renderPage('Main'));
  }

  render() {
    return (
      <form className="registration">
        <h1>Add a contact</h1>
        <div className="form-section">
          <div className="form-field">
          <label>Contact's name</label>
          <input name="contact_name" value={ this.state.contact.contact_name } placeholder="Jane Doe" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Contact's email</label>
            <input name="contact_email" value={ this.state.contact.contact_email } placeholder="email@example.com" onChange={this.handleInput} /><br/>
          </div>
        </div>
        <button type="submit" style={{cursor:'pointer'}}>Add Contact</button>
      </form>
    );
  }
}