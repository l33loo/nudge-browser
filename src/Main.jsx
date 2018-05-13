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
    fetch(`https://nudge-server.herokuapp.com/delete/${window.localStorage.getItem('nudge_token')}`, {
      method: 'POST',
      body: JSON.stringify(event.target.name),
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
      console.log(`CONTACT ***** ${contact.nickname}`);
      checkContacts.push(contact);
      return <div><Contact contact={ contact } /><button name={ contact } onClick={ this.deleteContact } style={{cursor:'pointer'}}>Delete</button></div>;
    });

    return checkContacts.length ?
      <div className='contacts'>
        <div>
          <h1>Your emergency contacts<span onClick={ this.addContact } style={{cursor:'pointer'}}>+</span></h1><br />
          <ol>
            { cont }
          </ol>
        </div>
      </div>
    :
    <NewContact updateContactsArr={ this.updateContactsArr } />;
  }
}