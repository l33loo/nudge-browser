import React, { Component } from 'react';
import './App.css';
// import Main from './Main.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
// import phone from './red-phone.jpg';
// import logo from './logoNudge.png';

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
        <div id="phone-image">

          <div className="image-text">
            <h1>
              <span>IF YOU CAN'T REACH YOUR PHONE,<span className='spacer'></span><br />
              <span className='spacer'></span><span id="nudge">NUDGE</span> WILL DO IT FOR YOU.</span>
            </h1>
          </div>
        </div>
          <NavBar />
          <Login />
          <Registration />

      </div>
    );
  }
}

export default App;
