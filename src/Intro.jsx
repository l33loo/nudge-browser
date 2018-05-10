import React from 'react';
import GoogleLogin from 'react-google-login';
const FontAwesome = require('react-fontawesome');

const Intro = (props) => {
  const responseGoogle = (response) => {
    console.log(`GOOGLE RESPONSE! ${response} and TYPE ${response.hg.id_token}`);
    // if (response.type === 'success') {
      console.log("GOOGLE LOGIN SUCCESS");
      this.props.changePage('Main');
      fetch('https://nudge-server.herokuapp.com/contacts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstParam: response.idToken
        }),
      })
      .then((resp) => {
        console.log(resp.status);
      })
      .catch((error) => {
        console.log("GOOGLE ERROR!!!");
        // throw error;
      });
    // } else {
      // console.log("GOOGLE ERROR!!!");
    // }
  }

  return (
    <div className="Intro">
      <h1>
        <span>IF YOU GO DARK,<span className='spacer'></span><br />
        <span className='spacer'></span><span id="nudge">NUDGE</span> WILL RAISE THE FLAG.</span>
      </h1><br />

      <GoogleLogin
        id='google-login'
        clientId="241417537066-elmbirp4ups9h0cjp73u70nkgur98nq4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ><FontAwesome name='google' />
      <span> Login with Google</span>
      </GoogleLogin>

    </div>
  );
}

export default Intro;


