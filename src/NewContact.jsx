import React, { Component } from 'react';

export default class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      email: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  cancel() {
    this.props.renderPage("Settings");
  }

  onSubmit(event) {
    event.preventDefault();
    const userId = window.localStorage.getItem('nudge_token');
    console.log("I AM HERE AT LAST!!!");
    fetch(`https://nudge-server.herokuapp.com/insert/${userId}`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res)
    .then(response => this.props.getContacts())
    .then(() => this.props.renderPage('Settings'))
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <form>
        <h1>Add a contact</h1>
        <div className="form-section">
          <div className="form-field">
          <label>Contact's name</label>
          <input name="nickname" value={ this.state.nickname } placeholder="Jane Doe" onChange={this.handleInput} /><br/>
          </div>
          <div className="form-field">
            <label>Contact's email</label>
            <input name="email" value={ this.state.email } placeholder="email@example.com" onChange={this.handleInput} /><br/>
          </div>
        </div>
        <button id="add-button" style={{cursor:'pointer'}} onClick={ this.onSubmit }>Add contact</button>
        <button id="cancel" style={{cursor:'pointer'}} onClick={ this.cancel }>Cancel</button>
      </form>
    );
  }
}