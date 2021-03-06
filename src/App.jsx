import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import NewContact from './NewContact.jsx';
import Settings from './Settings.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      email: "",
      timeLastActivity: 0,
      contacts: [],
      notificationsEnabled: true,
      tagName: "Settings",
      loggedIn: false,
      lastRecordedActivity: Date.now() - 90000000
    }

    this.verifyIfTrackActivity = this.verifyIfTrackActivity.bind(this);
    this.trackActivity = this.trackActivity.bind(this);
    this.getTimeSinceLastActivity = this.getTimeSinceLastActivity.bind(this);
    this.getTagName = this.getTagName.bind(this);
    this.changePage = this.changePage.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.getContacts = this.getContacts.bind(this);
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.asyncContactsPage = this.asyncContactsPage.bind(this);
    this.clearState = this.clearState.bind(this);
    this.disableNotifications = this.disableNotifications.bind(this);
    this.enableNotifications = this.enableNotifications.bind(this);
    this.updateState = this.updateState.bind(this);
    this.refreshContacts = this.refreshContacts.bind(this);
  }

  asyncContactsPage(cb) {
    this.getContacts();
  }

  refreshContacts() {
    if (window.localStorage.getItem('nudge_token')) {
      this.asyncContactsPage(() => {
        if (this.state.contacts.length) {
          this.changePage("Settings");
        } else {
          this.changePage("NewContact");
        }
      });
    }
  }

  clearState() {
    this.setState({
      first_name: "",
      email: "",
      timeLastActivity: 0,
      contacts: [],
      tagName: "Settings",
      loggedIn: false
    });
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

  addContact() {
    this.changePage("NewContact");
  }

  deleteContact(event) {
    const contact = { nickname: event.target.name, email: event.target.value };
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

  loggedIn(bool) {
    this.setState({ loggedIn: [bool] });
  }

  updateState(data) {
    this.setState(data);
  }

  disableNotifications() {
    const userId = window.localStorage.getItem('nudge_token');
    fetch(`https://nudge-server.herokuapp.com/deactivate/${userId}`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        this.setState({ notificationsEnabled : false });
      }
    })
    .catch((error) => {
      throw error;
    });
  }

  enableNotifications() {
    const userId = window.localStorage.getItem('nudge_token');
    fetch(`https://nudge-server.herokuapp.com/activate/${userId}`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        this.setState({ notificationsEnabled : true });
      }
    })
    .catch((error) => {
      throw error;
    });
  }

  changePage(tagName) {
    this.setState({ tagName: tagName });
  }

  verifyIfTrackActivity() {
    return this.loggedIn && this.notificationsEnabled();
  }

  trackActivity() {
    this.setState({ timeLastActivity: Date.now() });
  }

  getTimeSinceLastActivity() {
    return Date.now() - this.state.timeLastActivity;
  }

  handleServerPings() { // Date.now(), Date.now() + 30 min
    if (Date.now() - this.state.timeLastActivity < 5000) { // 86400000 -- 24-hr schedule
    }
  }

  getTagName() {
    if (!window.localStorage.getItem('nudge_token')) {
      return <Intro refreshContacts={ this.refreshContacts } updateState={ this.updateState } loggedIn={ this.loggedIn } renderPage={ this.changePage } />;
    } else {
      switch(this.state.tagName) {
        case "NewContact":
          return <NewContact getContacts={ this.getContacts } renderPage={ this.changePage } />;
        case "Settings":
          return <Settings contacts={ this.state.contacts } deleteContact={ this.deleteContact } addContact={ this.addContact } disableNotifications={ this.disableNotifications } enableNotifications={ this.enableNotifications } notificationStatus={ this.state.notificationsEnabled } lastRecordedActivity={ this.state.lastRecordedActivity } />
        default:
          console.log("Error: invalid component tag name");
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.loggedIn !== nextState || this.state.contacts !== nextState || this.state.tagName !== nextState || this.state.notificationsEnabled !== nextState;
  }

  componentDidMount() {

    this.refreshContacts();

    setInterval(() => {
      if (window.localStorage.getItem('nudge_token') && Date.now() - this.state.timeLastActivity < 10000) { // 86400000 -- 24-hr schedule
        console.log("Contact server!");
        fetch(`https://nudge-server.herokuapp.com/ping/${window.localStorage.getItem('nudge_token')}`)
        .then((response) => {
          this.setState({ lastRecordedActivity: Date.now() });
        })
        .catch(error => console.error('Error:', error));
      }
    }, 10000);
  }

  render() {

    const tagName = this.getTagName();
    return (
      <div className="App" onMouseMove={ this.verifyIfTrackActivity ? this.trackActivity : null } onKeyPress={ this.verifyIfTrackActivity ? this.trackActivity : null } >
        <NavBar clearState={ this.clearState } renderPage={ this.changePage } loggedIn={ this.loggedIn } />
        {tagName}
        <Footer />
      </div>
    );
  }
}

export default App;
