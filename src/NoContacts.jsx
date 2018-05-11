import React, { Component } from 'react';

export default class NoContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contact: {
          contact_name: "",
          contact_email: ""
        }
      };

    this.linkLogin = this.linkLogin.bind(this);
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
    // const contact = this.state.contact;
    // const userId = window.localStorage.getItem('nudge_token');
    // fetch(`/contact/${userId}`, {
    //   method: 'POST',
    //   body: JSON.stringify(contact),
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => this.props.updateState({ response, tagName: "Main" }));
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