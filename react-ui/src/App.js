import React, { Component } from 'react';
import './App.css';
// import Main from './Main.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import Setting from './Setting.jsx';
// import phone from './red-phone.jpg';
// import logo from './logoNudge.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      timeLastActivity: 0,
      contactName: "",
      contactEmail: "",
      notificationsEnabled: true,
      tagName: "Login"
    }

    // this.checkLoginStatus = this.checkLoginStatus.bind(true);
    this.verifyIfTrackActivity = this.verifyIfTrackActivity.bind(this);
    this.trackActivity = this.trackActivity.bind(this);
    this.getTimeSinceLastActivity = this.getTimeSinceLastActivity.bind(this);
    this.verifyIfPing = this.verifyIfPing.bind(this);
    this.pingServer = this.pingServer.bind(this);
    this.getTagName = this.getTagName.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  // checkLoginStatus {
  //    return session id
  //}

  // changeNotificationStatus() {
  // pass to settings checkbox
  //}

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

  verifyIfPing(schedule) {
    return this.state.timeLastActivity && this.getTimeSinceLastActivity() < schedule;
  }

  pingServer() {
    //ping server POST /users/:id/checkin with session user_id
    console.log("Ping server!"); // for development
  }

  manageServerPings(time) { // Date.now(), Date.now() + 2hrs
    if (this.verifyIfPing(86400000)) { // 24-hr schedule
      this.pingServer();
    }
    this.manageServerPings(time + 3600000); // every hour
  }

  getTagName() {
    switch(this.state.tagName) {
      case "Login":
        return <Login renderPage={ this.changePage } />;
      case "Registration":
        return <Registration renderPage={ this.changePage } />;
      case "Setting":
        return <Setting renderPage={ this.changePage } />;
      default:
        console.log("Error: invalid component tag name");
    }
  }
  // function to change firstName, email, contactFirstName, contactEmail at login
  // function to create new user (firstName, email, contactFirstName, contactEmail) at registration
  // function to check if user logged in (for conditionals)

  // when cookie session is set, get info for this.state from JSON for user (by user_id)

  componentDidMount() {
    // this.manageServerPings(Date.now());
  }

  render() {
    const tagName = this.getTagName();
    return (
      <div className="App" onMouseMove={ this.verifyIfTrackActivity ? this.trackActivity : null } onKeyPress={ this.verifyIfTrackActivity ? this.trackActivity : null } >
        <div id="phone-image">

          <div className="image-text">
            <h1>
              <span>IF YOU CAN'T REACH YOUR PHONE,<span className='spacer'></span><br />
              <span className='spacer'></span><span id="nudge">NUDGE</span> WILL DO IT FOR YOU.</span>
            </h1>
          </div>
        </div>
          <NavBar renderPage={ this.changePage } />
          {tagName}
      </div>
    );
  }
}

export default App;
