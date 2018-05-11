import React, { Component } from 'react';
import Contact from './Contact.jsx';
import NewContact from './NewContact.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
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

    const asyncRendering = (cb) => {
      const cont = this.state.contacts.map((contact) => {
        console.log(`CONTACTS MAP ${contact}`);
        return <Contact contact={ contact } />;
      });
    };

    const renderCb = () => {
      return this.state.contacts.length ?
        <div className='contacts'>
          { cont }
        </div>
      :
      <NewContact renderPage={ this.props.renderPage } />;
    };

    return asyncRendering(renderCb);
  }
}