import React, { Component } from 'react';
import './App.css';
// import Main from './Main.jsx';
import NavBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import Registration from './Registration.jsx';
import Setting from './Setting.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

// const fetch = fetch(); //gives error
// import phone from './red-phone.jpg';
// import logo from './logoNudge.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 0,
      first_name: "",
      lastName: "",
      email: "",
      timeLastActivity: 0,
      contacts: [],
      notificationsEnabled: true,
      tagName: "Intro",
      loggedIn: false // for development
    }

    // this.checkLoginStatus = this.checkLoginStatus.bind(true);
    this.verifyIfTrackActivity = this.verifyIfTrackActivity.bind(this);
    this.trackActivity = this.trackActivity.bind(this);
    this.getTimeSinceLastActivity = this.getTimeSinceLastActivity.bind(this);
    // this.verifyIfPing = this.verifyIfPing.bind(this);
    this.pingServer = this.pingServer.bind(this);
    this.getTagName = this.getTagName.bind(this);
    this.changePage = this.changePage.bind(this);
    // this.updateState = this.updateState.bind(this);
  }

  // checkLoginStatus {
  //    return session id
  //}

  // changeNotificationStatus() {
  // pass to settings checkbox
  //}

  // updateState() {
  //   fetch(`/users/${user_id}.json`)
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(userJson) {
  //       this.setState();
  //     })
  // }

  updateState(json) {
    this.setState({ json });
  }

  //merge with previous function
  changePage(tagName) {
    this.setState({ tagName: tagName});
  }

  verifyIfTrackActivity() {
    //return checkLoginStatus && this.state.notificationsEnabled;
    return true; //for development
  }

  trackActivity() {
    this.setState({ timeLastActivity: Date.now() });
    console.log(this.state.timeLastActivity);
  }

  getTimeSinceLastActivity() {
    return Date.now() - this.state.timeLastActivity;
  }

  // verifyIfPing(schedule) {
  //   return this.state.timeLastActivity && this.getTimeSinceLastActivity() < schedule;
  // }

  pingServer() {
    //ping server POST /users/:id/checkin with session user_id
    console.log("Ping server!"); // for development
  }

  handleServerPings() { // Date.now(), Date.now() + 2hrs
    if (Date.now() - this.state.timeLastActivity < 5000) { // 86400000 -- 24-hr schedule
      console.log("Ping server!"); //this.pingServer();
    }
  }

  getTagName() {
    if (this.state.loggedIn) {
      return <Main contacts={ this.state.contacts } renderPage={ this.changePage } />
    } else {
      switch(this.state.tagName) {
        case "Intro":
          return <Intro renderPage={ this.changePage } />;
        case "Registration":
          return <Registration renderPage={ this.changePage } />;
        case "Setting":
          return <Setting renderPage={ this.changePage } />;
        default:
          console.log("Error: invalid component tag name");
      }
    }
  }
  // function to check if user logged in (for conditionals)

  componentDidMount() {
    // if (this.state.loggedIn) {
    //   fetch("https://nudge-server.herokuapp.com/contacts")
    //   .then((response) => {
    //     console.log(`RESPONSE!!!!: ${response}`);
    //     return response.json();
    //   })
    //   .then((resp) => {
    //       console.log(`JSON!!!! ${resp}, USERSSS? ${resp.users}`);

    //     const users = resp.users;
    //     this.setState({ contacts: users });
    //   });
    // }
    if (this.state.loggedIn && this.state.notificationsEnabled) {
      setInterval(() => {
        if (Date.now() - this.state.timeLastActivity < 10000) { // 86400000 -- 24-hr schedule
          // console.log("Ping server!"); //this.pingServer();
        fetch("https://nudge-server.herokuapp.com/ping", {
          method: 'GET',
          //mode : 'no-cors'//,
          // credentials: 'include'
        })
        .then(function(response) {
          return response;
        })
        .then(function(resp) {
          console.log(resp);
        });
      }}, 5000);
    }
    // fetch(`/users/${user_id}.json`, credentials: 'same-origin')
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(userJson) {
    //   this.setState({ userJson });
    // });
  }

  render() {
    const tagName = this.getTagName();
    return (
      <div className="App" onMouseMove={ this.verifyIfTrackActivity ? this.trackActivity : null } onKeyPress={ this.verifyIfTrackActivity ? this.trackActivity : null } >
        <NavBar renderPage={ this.changePage } />
        {tagName}
        <Footer />
      </div>

    );
  }
}

export default App;
