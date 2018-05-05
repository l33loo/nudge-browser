import React, { Component } from 'react';
import './App.css';
// import Main from './Main.jsx';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      email: "",
      lastMouseX: 0,
      lastMouseY: 0,
      contactFirstName: "",
      contactEmail: ""
    }
    // bind 'this' here
  }

  // function to change firstName, email, contactFirstName, contactEmail at login
  // function to change firstName, email, contactFirstName, contactEmail at registration
  // function to change mouse coordinates
  // function to check if user logged in (for conditionals)

  // when cookie session is set, use it's user_id to fetch info to be stored in state

  // componentDidMount() {
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
