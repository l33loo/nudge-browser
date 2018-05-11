import React, { Component } from 'react';
import Contact from './Contact.jsx';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    const userId = window.localStorage.getItem('nudge_token');
    console.log(`USERRRR ID: ${userId} and STRING ${userId} and TYPE ${typeof userId}`);
    if (userId) {
      fetch(`https://nudge-server.herokuapp.com/contacts/${userId.toString()}`)
      .then((response) => {
        console.log(`RESPONSE!!!!: ${response}`);
        return response.json();
      })
      .then((resp) => {
        console.log(`JSON!!!! ${resp}, USERSSS? ${resp.users}`);
        const newState = {};
        newState["contacts"] = resp.users;
        this.setState(newState);
      });
    }
  }

  render() {
    const contact = this.state.contacts.map((contact) => (<Contact contact={ contact } />));
    return (
      <div className='contacts'>
        { contact }
      </div>
    );
  }
}