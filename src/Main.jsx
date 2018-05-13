import React, { Component } from 'react';
import Contact from './Contact.jsx';
import NewContact from './NewContact.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }

    this.updateContactsArr = this.updateContactsArr.bind(this);
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.getContacts = this.getContacts.bind(this);
  }

  updateContactsArr(obj) {
    this.state.contacts.push(obj);
  }

  addContact() {
    this.props.renderPage("NewContact");
  }

  deleteContact(event) {
    const contact = { nickname: event.target.name, email: event.target.value };
    console.log(`EVENT**** ${JSON.stringify(contact)} + ${typeof contact}`);
    fetch(`https://nudge-server.herokuapp.com/delete/${window.localStorage.getItem('nudge_token')}`, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => res)
    .catch(error => console.error('Error:', error))
    .then(response => console.log(response))
    .then(() => this.getContacts());
  }

  getContacts() {
    const userId = window.localStorage.getItem('nudge_token');
    return fetch(`https://nudge-server.herokuapp.com/contacts/${userId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          contacts: responseJson.users
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  componentDidMount() {
    this.getContacts();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.contacts !== nextState;
  }

  render() {
    const checkContacts = [];
    const cont = this.state.contacts.map((contact) => {
      // console.log(`CONTACT ***** ${contact.toString()}`);
      checkContacts.push(contact);
      return <div><Contact contact={ contact } /><button name={ contact.nickname } value={ contact.email } onClick={ this.deleteContact }>Delete</button></div>;
    });

    return checkContacts.length ?
      <div className='contacts'>
        <div>
          <h1>Your emergency contacts<span onClick={ this.addContact }>+</span></h1><br />
          <ol>
            { cont }
          </ol>
        </div>
      </div>
    :
    <NewContact updateContactsArr={ this.updateContactsArr } />;
  }
}