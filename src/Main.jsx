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

  render() {
    const cont = this.state.contacts.map((contact) => {
      console.log(`CONTACTS MAP ${contact}`);
      return <Contact contact={ contact } />;
    });
    return (
      <div className='contacts'>
        { cont }
      </div>
    );
  }
}