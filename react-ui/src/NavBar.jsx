import React from 'react';
import logo from './logoNudgeBrowser.png';

// function to change menu depending on login status

const NavBar = (props) => {
  // conditionals
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="menu"><span>Login</span> | <span>Register</span></span>
    </header>
  );
};

export default NavBar;
