import React, { Component } from 'react';
import Contact from './Contact.jsx';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const userId = window.localStorage.getItem('nudge_token');
    // console.log(`USERRRR ID: ${userId} and STRING ${userId} and TYPE ${typeof userId}`);
    // if (userId) {
      fetch(`https://nudge-server.herokuapp.com/contacts/2`)
      .then((response) => {
        console.log(`RESPONSE CONTACTS!!!!: ${response}`);
        return response.json();
      })
      .then((resp) => {
        console.log(`CONTACTS JSON!!!! ${resp}, USERSSS ${resp.users}`);
        // const newState = {};
        // newState["contacts"] = resp.users;
        // console.log(`NEW STATE ${newState}`);
        this.setState(resp);
        console.log(`NEW THIS.STATE.CONTACTS: ${this.state.users}`);
      });
    // }
  }

  render() {
    const cont = this.state.users.forEach((contact) => {
      return <Contact contact={ contact } />
    });
    return (
      <div className='contacts'>
        { cont }
      </div>
    );
  }
}