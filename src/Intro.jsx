import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
const FontAwesome = require('react-fontawesome');

const Intro = (props) => {
  const responseGoogle = (response) => {
    console.log(`GOOGLE RESPONSE! ${response} and TOKEN ${response.tokenId} and BASIC PROFILE ${response.getBasicProfile()}`);
    // if (response.type === 'success') {
      // console.log("GOOGLE LOGIN SUCCESS");
      // this.props.changePage('Main');
      fetch('https://nudge-server.herokuapp.com/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstParam: response.tokenId
        }),
      })
      .then((resp) => {
        // console.log(`LOOOOCAL STORAGE: ${resp}, and STRING ${resp.toString()}`);
        return resp.json();
      })
      .then((r) => {
        console.log(`REPONSE USER ID ${r}`);
        window.localStorage.setItem('nudge_token', r);
      })
      .then(() => {
        props.loggedIn(true);
        console.log(`LOOOOGGED IN???`);
      })
      .catch((error) => {
        console.log("GOOGLE ERROR!!!");
        throw error;
      });
    // } else {
    //   console.log("GOOGLE ERROR!!!");
    // }
  }

  return (
    <div className="Intro">
      <h1>
        <span>IF YOU GO DARK,<span className='spacer'></span><br />
        <span className='spacer'></span><span id="nudge">NUDGE</span> WILL RAISE THE FLAG.</span><br />
        <GoogleLogin
        id='google-login'
        clientId="241417537066-elmbirp4ups9h0cjp73u70nkgur98nq4.apps.googleusercontent.com"
        prompt='select_account'
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ><FontAwesome name='google' />
      <span> Login with Google</span>
      </GoogleLogin>
      </h1>



    </div>
  );
}

export default Intro;
