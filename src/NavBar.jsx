import React from 'react';
import logo from './logoNudgeBrowser.png';
import { GoogleLogout } from 'react-google-login';

const NavBar = (props) => {

  const userId = window.localStorage.getItem('nudge_token');

  const linkAbout = () => {
    props.renderPage("About");
  };

  const linkContactsList = () => {
    if (userId) {
      props.renderPage("ContactsList");
    }
  };

  const logout = () => {
    console.log("LOgoUT");
    window.localStorage.removeItem('nudge_token');
    props.clearState();
  };

  return userId ?
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" onClick={ linkContactsList } style={{cursor:'pointer'}} />
      <span className="menu">
        <span className="loggedin-as">Logged in as { window.localStorage.getItem('nudge_name') } ({ window.localStorage.getItem('nudge_email') })</span>
        <span className="logout" onClick={ logout } style={{cursor:'pointer'}}>Logout</span>
      </span>
    </header>
  :
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="menu"><span className="about-link" onClick={ linkAbout } style={{cursor:'pointer'}}>About</span></span>
    </header>;
};

export default NavBar;

