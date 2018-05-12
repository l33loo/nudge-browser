import React from 'react';
import logo from './logoNudgeBrowser.png';
import { GoogleLogout } from 'react-google-login';

const NavBar = (props) => {
  const linkRegistration = () => {
    props.renderPage("Registration");
  }

  const linkAbout = () => {
    props.renderPage("About");
  }

  const userId = window.localStorage.getItem('nudge_token');

  const logout = (e) => {
    window.localStorage.removeItem('nudge_token');
    console.log('logout');
  }

  return userId ?
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="menu">
        <span className="loggedin-as">Logged in as { userId }</span>
        <GoogleLogout
          className="logout"
          style={{cursor:'pointer'}}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onClick={logout}
        >
        </GoogleLogout>
        <span className="settings-link" style={{cursor:'pointer'}}>Settings</span>
      </span>
    </header>
  :
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="menu"><span className="about-link" onClick={ linkAbout } style={{cursor:'pointer'}}>About</span></span>
    </header>;
};

export default NavBar;

